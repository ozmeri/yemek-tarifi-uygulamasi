const adminStatus = document.querySelector("#admin-status");
const adminCount = document.querySelector("#admin-count");
const adminSearch = document.querySelector("#admin-search");
const adminRecipeList = document.querySelector("#admin-recipe-list");
const recipeForm = document.querySelector("#recipe-admin-form");
const deleteButton = document.querySelector("#delete-recipe");
const resetButton = document.querySelector("#reset-form");
const seedButton = document.querySelector("#seed-recipes");
const formTitle = document.querySelector("#admin-form-title");

let recipes = [];
let selectedRecipeId = "";

const fields = {
  id: document.querySelector("#recipe-id"),
  name: document.querySelector("#recipe-name"),
  type: document.querySelector("#recipe-type"),
  category: document.querySelector("#recipe-category"),
  time: document.querySelector("#recipe-time"),
  calories: document.querySelector("#recipe-calories"),
  protein: document.querySelector("#recipe-protein"),
  carbs: document.querySelector("#recipe-carbs"),
  fat: document.querySelector("#recipe-fat"),
  summary: document.querySelector("#recipe-summary"),
  ingredients: document.querySelector("#recipe-ingredients"),
  steps: document.querySelector("#recipe-steps"),
  tags: document.querySelector("#recipe-tags")
};

function setStatus(message) {
  adminStatus.textContent = message;
}

function parseLines(value) {
  return value.split("\n").map((item) => item.trim()).filter(Boolean);
}

function parseTags(value) {
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function fillForm(recipe = null) {
  if (!recipe) {
    recipeForm.reset();
    fields.id.value = "";
    formTitle.textContent = "Yeni tarif ekle";
    deleteButton.disabled = true;
    selectedRecipeId = "";
    return;
  }

  selectedRecipeId = recipe.id;
  fields.id.value = recipe.id;
  fields.name.value = recipe.name || "";
  fields.type.value = recipe.type || "Ana yemek";
  fields.category.value = recipe.category || "";
  fields.time.value = recipe.time || 0;
  fields.calories.value = recipe.calories || 0;
  fields.protein.value = recipe.protein || 0;
  fields.carbs.value = recipe.carbs || 0;
  fields.fat.value = recipe.fat || 0;
  fields.summary.value = recipe.summary || "";
  fields.ingredients.value = (recipe.ingredients || []).join("\n");
  fields.steps.value = (recipe.steps || []).join("\n");
  fields.tags.value = (recipe.tags || []).join(", ");
  formTitle.textContent = `${recipe.name} düzenleniyor`;
  deleteButton.disabled = false;
}

function renderRecipeList() {
  const query = adminSearch.value.trim().toLocaleLowerCase("tr-TR");
  const filtered = recipes.filter((recipe) => {
    const searchText = [recipe.name, recipe.type, recipe.category, recipe.summary, ...(recipe.tags || [])].join(" ").toLocaleLowerCase("tr-TR");
    return !query || searchText.includes(query);
  });

  adminCount.textContent = `${filtered.length} tarif`;

  if (!filtered.length) {
    adminRecipeList.innerHTML = `<div class="empty">Bu aramayla eşleşen tarif bulamadık.</div>`;
    return;
  }

  adminRecipeList.innerHTML = filtered.map((recipe) => `
    <article class="admin-recipe-row ${recipe.id === selectedRecipeId ? "selected" : ""}" data-id="${recipe.id}">
      <div>
        <strong>${recipe.name}</strong>
        <p>${recipe.type} · ${recipe.category} · ${recipe.calories} kcal</p>
      </div>
      <span>${recipe.time} dk</span>
    </article>
  `).join("");
}

async function refreshRecipes() {
  if (!window.fitFirebase?.enabled) {
    setStatus("Firebase bağlantısı bulunamadı.");
    return;
  }
  setStatus("Tarifler Firestore'dan yükleniyor...");
  recipes = await window.fitFirebase.loadRecipes();
  renderRecipeList();
  setStatus(`${recipes.length} tarif Firestore'dan yüklendi.`);
}

seedButton.addEventListener("click", async () => {
  if (!window.fitFirebase?.enabled) return;
  setStatus("Hazır tarifler Firestore'a yazılıyor. İlk yükleme biraz sürebilir...");
  await window.fitFirebase.seedRecipes(window.fitDefaultRecipes || []);
  await refreshRecipes();
});

recipeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!window.fitFirebase?.enabled) return;

  const recipe = {
    id: fields.id.value.trim(),
    name: fields.name.value.trim(),
    type: fields.type.value,
    category: fields.category.value.trim() || fields.type.value,
    time: Number(fields.time.value),
    calories: Number(fields.calories.value),
    protein: Number(fields.protein.value),
    carbs: Number(fields.carbs.value),
    fat: Number(fields.fat.value),
    summary: fields.summary.value.trim(),
    ingredients: parseLines(fields.ingredients.value),
    steps: parseLines(fields.steps.value),
    tags: parseTags(fields.tags.value),
    color: "#dcebd5"
  };

  setStatus("Tarif kaydediliyor...");
  const saved = await window.fitFirebase.saveRecipe(recipe);
  fillForm(saved);
  await refreshRecipes();
  setStatus(`${saved.name} kaydedildi.`);
});

deleteButton.addEventListener("click", async () => {
  if (!selectedRecipeId || !window.fitFirebase?.enabled) return;
  const activeRecipe = recipes.find((recipe) => recipe.id === selectedRecipeId);
  if (!activeRecipe) return;
  setStatus(`${activeRecipe.name} siliniyor...`);
  await window.fitFirebase.deleteRecipe(selectedRecipeId);
  fillForm(null);
  await refreshRecipes();
});

resetButton.addEventListener("click", () => {
  fillForm(null);
  renderRecipeList();
  setStatus("Form temizlendi.");
});

adminSearch.addEventListener("input", renderRecipeList);

adminRecipeList.addEventListener("click", (event) => {
  const row = event.target.closest(".admin-recipe-row");
  if (!row) return;
  const recipe = recipes.find((item) => item.id === row.dataset.id);
  if (!recipe) return;
  fillForm(recipe);
  renderRecipeList();
});

refreshRecipes();