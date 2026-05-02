(function () {
  const config = window.fitFirebaseConfig || {};
  const hasConfig = Boolean(config.apiKey && config.authDomain && config.projectId && config.appId);
  const recipeCollectionName = "recipes";
  let auth = null;
  let db = null;

  function init() {
    if (!hasConfig || !window.firebase) return false;
    if (!window.firebase.apps.length) {
      window.firebase.initializeApp(config);
    }
    auth = window.firebase.auth();
    db = window.firebase.firestore();
    return true;
  }

  const enabled = init();

  function publicMemberFromUser(user, fullName) {
    return {
      uid: user.uid,
      fullName: fullName || user.displayName || "",
      email: user.email,
      firebase: true,
      createdAt: new Date().toISOString()
    };
  }

  function slugify(value = "") {
    return value
      .toString()
      .trim()
      .toLocaleLowerCase("tr-TR")
      .replace(/ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§/g, "c")
      .replace(/ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸/g, "g")
      .replace(/ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±/g, "i")
      .replace(/ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶/g, "o")
      .replace(/ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸/g, "s")
      .replace(/ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼/g, "u")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "tarif";
  }

  function cleanList(value) {
    if (Array.isArray(value)) {
      return value.map((item) => String(item || "").trim()).filter(Boolean);
    }
    if (typeof value === "string") {
      return value.split(/[\n,]/).map((item) => item.trim()).filter(Boolean);
    }
    return [];
  }

  function asNumber(value, fallback = 0) {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
  }
  function repairText(value = "") {
    let text = String(value || "").trim();
    if (!text) return "";
    for (let attempt = 0; attempt < 2; attempt += 1) {
      if (!/[ÃÅÄ]|â€™|â€œ|â€/.test(text)) break;
      try {
        text = decodeURIComponent(escape(text));
      } catch (error) {
        break;
      }
    }
    return text.trim();
  }

  function cleanCategoryValue(value = "") {
    return repairText(value);
  }

  function normalizeRecipe(recipe = {}, providedId = "") {
    const name = String(recipe.name || "").trim();
    if (!name) return null;

    const override = window.fitRecipeOverrides?.[name] || {};

    const normalized = {
      id: providedId || recipe.id || slugify(name),
      name,
      type: String(override.type || recipe.type || recipe.mealType || window.fitInferRecipeType?.({ ...recipe, ...override }) || "Ana yemek").trim(),
      category: String(override.category || recipe.category || recipe.type || "Genel").trim(),
      summary: String(recipe.summary || recipe.note || "").trim(),
      calories: asNumber(recipe.calories),
      protein: asNumber(recipe.protein),
      carbs: asNumber(recipe.carbs),
      fat: asNumber(recipe.fat),
      time: asNumber(recipe.time),
      color: String(recipe.color || "#dcebd5"),
      ingredients: cleanList(recipe.ingredients),
      steps: cleanList(recipe.steps),
      tags: cleanList(recipe.tags)
    };

    normalized.searchText = [
      normalized.name,
      normalized.type,
      normalized.category,
      normalized.summary,
      ...normalized.ingredients,
      ...normalized.tags
    ].join(" ").toLocaleLowerCase("tr-TR");

    return normalized;
  }

  function recipePayload(recipe, includeCreatedAt = false) {
    const payload = { ...recipe };
    delete payload.id;
    payload.updatedAt = window.firebase.firestore.FieldValue.serverTimestamp();
    if (includeCreatedAt) {
      payload.createdAt = window.firebase.firestore.FieldValue.serverTimestamp();
    }
    return payload;
  }

  function recipeSort(a, b) {
    const order = window.fitOrderedRecipeTypes || [];
    const typeDiff = order.indexOf(a.type) - order.indexOf(b.type);
    if (typeDiff !== 0) return typeDiff;
    return a.name.localeCompare(b.name, "tr");
  }

  async function createMember(email, password, fullName) {
    if (!enabled) return null;
    const credential = await auth.createUserWithEmailAndPassword(email, password);
    if (fullName) {
      await credential.user.updateProfile({ displayName: fullName });
    }
    const member = publicMemberFromUser(credential.user, fullName);
    await db.collection("users").doc(credential.user.uid).set({ member }, { merge: true });
    return member;
  }

  async function signIn(email, password) {
    if (!enabled) return null;
    const credential = await auth.signInWithEmailAndPassword(email, password);
    return publicMemberFromUser(credential.user);
  }

  async function saveProfile(profile) {
    if (!enabled || !auth.currentUser) return false;
    const member = publicMemberFromUser(auth.currentUser, profile.memberName);
    await db.collection("users").doc(auth.currentUser.uid).set({
      member,
      profile,
      updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    return true;
  }

  async function loadProfile() {
    if (!enabled || !auth.currentUser) return null;
    const snapshot = await db.collection("users").doc(auth.currentUser.uid).get();
    if (!snapshot.exists) return null;
    const data = snapshot.data() || {};
    if (data.member) localStorage.setItem("fitTariflerMember", JSON.stringify(data.member));
    if (data.profile) localStorage.setItem("fitTariflerProfile", JSON.stringify(data.profile));
    return data.profile || null;
  }

  async function loadRecipes() {
    if (!enabled || !db) return [];
    const snapshot = await db.collection(recipeCollectionName).get();
    return snapshot.docs
      .map((doc) => normalizeRecipe(doc.data() || {}, doc.id))
      .filter(Boolean)
      .sort(recipeSort);
  }

  async function seedRecipes(recipesToSeed = [], options = {}) {
    if (!enabled || !db) return [];
    const normalizedRecipes = recipesToSeed.map((recipe) => normalizeRecipe(recipe)).filter(Boolean);
    const uniqueById = [];
    const seen = new Set();

    normalizedRecipes.forEach((recipe) => {
      if (!recipe.id || seen.has(recipe.id)) return;
      seen.add(recipe.id);
      uniqueById.push(recipe);
    });

    if (!options.force) {
      const existing = await db.collection(recipeCollectionName).limit(1).get();
      if (!existing.empty) return loadRecipes();
    }

    const chunkSize = 350;
    for (let index = 0; index < uniqueById.length; index += chunkSize) {
      const batch = db.batch();
      uniqueById.slice(index, index + chunkSize).forEach((recipe) => {
        const ref = db.collection(recipeCollectionName).doc(recipe.id);
        batch.set(ref, recipePayload(recipe, true), { merge: true });
      });
      await batch.commit();
    }

    return loadRecipes();
  }

  async function saveRecipe(recipe) {
    if (!enabled || !db) return null;
    const normalized = normalizeRecipe(recipe);
    if (!normalized) return null;
    const ref = db.collection(recipeCollectionName).doc(normalized.id);
    const snapshot = await ref.get();
    await ref.set(recipePayload(normalized, !snapshot.exists), { merge: true });
    const updated = await ref.get();
    return normalizeRecipe(updated.data() || {}, updated.id);
  }

  async function deleteRecipe(recipeId) {
    if (!enabled || !db || !recipeId) return false;
    await db.collection(recipeCollectionName).doc(recipeId).delete();
    return true;
  }

  async function signOut() {
    if (!enabled || !auth.currentUser) return;
    await auth.signOut();
  }

  window.fitFirebase = {
    enabled,
    createMember,
    signIn,
    saveProfile,
    loadProfile,
    loadRecipes,
    seedRecipes,
    saveRecipe,
    deleteRecipe,
    signOut
  };
})();

