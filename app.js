const orderedRecipeTypes = window.fitOrderedRecipeTypes || ["Ana yemek", "Salata", "\u00c7orba", "Kahvalt\u0131", "Aperatif", "Tatl\u0131"];
const defaultRecipes = (window.fitDefaultRecipes || []).map((recipe) => ({ ...recipe }));
const fallbackColors = ["#dcebd5", "#f3cf98", "#f1b08a", "#ead7f2", "#cfe4ee", "#d8e8c2"];
const brokenTextPattern = /Ãƒ|Ã…|Ã„|ï¿½/;

let recipes = [];
let categories = ["T\u00fcm Tarifler"];
let selectedCategory = "T\u00fcm Tarifler";
let selectedRecipe = null;

const searchInput = document.querySelector("#search");
const filters = document.querySelector("#filters");
const recipeList = document.querySelector("#recipe-list");
const recipeCount = document.querySelector("#recipe-count");
const recipeDetail = document.querySelector("#recipe-detail");
const activeCategoryLabel = document.querySelector("#active-category-label");
const searchSummary = document.querySelector("#search-summary");

function ensureRecipeShape(recipe, index = 0) {
  const override = window.fitRecipeOverrides?.[recipe.name] || {};
  const inferredType = window.fitInferRecipeType?.({ ...recipe, ...override }) || recipe.type || "Ana yemek";
  const type = override.type || inferredType;

  return {
    ...recipe,
    ...override,
    id: recipe.id || `tarif-${index + 1}`,
    type,
    category: override.category || recipe.category || type,
    summary: recipe.summary || "Tarif \u00f6zeti yak\u0131nda eklenecek.",
    calories: Number(recipe.calories) || 0,
    protein: Number(recipe.protein) || 0,
    carbs: Number(recipe.carbs) || 0,
    fat: Number(recipe.fat) || 0,
    time: Number(recipe.time) || 0,
    color: recipe.color || fallbackColors[index % fallbackColors.length],
    ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients : [],
    steps: Array.isArray(recipe.steps) ? recipe.steps : [],
    tags: Array.isArray(recipe.tags) ? recipe.tags : []
  };
}

function buildRecipeState(sourceRecipes = []) {
  recipes = sourceRecipes.map((recipe, index) => ensureRecipeShape(recipe, index));
  categories = ["T\u00fcm Tarifler", ...orderedRecipeTypes.filter((type) => recipes.some((recipe) => recipe.type === type))];
  selectedCategory = "T\u00fcm Tarifler";
  selectedRecipe = recipes[0] || null;
}

function hasBrokenRecipeData(recipeList = []) {
  return recipeList.some((recipe) => brokenTextPattern.test(JSON.stringify(recipe)));
}

function isCategoryCoverageWeak(recipeList = []) {
  const normalized = recipeList.map((recipe, index) => ensureRecipeShape(recipe, index));
  return orderedRecipeTypes.some((type) => !normalized.some((recipe) => recipe.type === type));
}

function hasMisplacedCoreRecipes(recipeList = []) {
  const normalized = recipeList.map((recipe, index) => ensureRecipeShape(recipe, index));
  return normalized.some((recipe) => {
    const name = String(recipe.name || "").toLocaleLowerCase("tr-TR");
    if ((name.includes("çorba") || name.includes("corba") || name.includes("soup")) && recipe.type !== "Çorba") return true;
    if (name.includes("protein omlet bowl") && recipe.type !== "Kahvaltı") return true;
    return false;
  });
}

function renderFilters() {
  activeCategoryLabel.textContent = selectedCategory;
  filters.innerHTML = categories
    .map((category) => {
      const activeClass = category === selectedCategory ? " active" : "";
      return `<button class="filter-button${activeClass}" data-category="${category}">${category}</button>`;
    })
    .join("");
}

function getFilteredRecipes() {
  const search = searchInput.value.trim().toLocaleLowerCase("tr-TR");

  return recipes.filter((recipe) => {
    const matchesCategory = selectedCategory === "T\u00fcm Tarifler" || recipe.type === selectedCategory;
    const searchableText = [recipe.name, recipe.type, recipe.category, recipe.summary, ...recipe.ingredients, ...recipe.tags].join(" ").toLocaleLowerCase("tr-TR");
    const matchesSearch = !search || searchableText.includes(search);
    return matchesCategory && matchesSearch;
  });
}

function renderRecipeCard(recipe) {
  const selectedClass = recipe?.id === selectedRecipe?.id ? " selected" : "";
  return `
    <article class="recipe-card fade-in${selectedClass}" data-id="${recipe.id}" style="--card-color: ${recipe.color}">
      <div class="recipe-tags">
        <span class="pill">${recipe.type}</span>
        <span class="pill">${recipe.category}</span>
        <span class="pill">${recipe.time} dk</span>
      </div>
      <h3>${recipe.name}</h3>
      <p>${recipe.summary}</p>
      <div class="recipe-meta">
        <span>${recipe.calories} kcal</span>
        <span>${recipe.protein} g protein</span>
        <span>${recipe.carbs} g karbonhidrat</span>
      </div>
    </article>
  `;
}

function renderRecipes() {
  const filteredRecipes = getFilteredRecipes();
  recipeList.classList.toggle("single-category-grid", selectedCategory !== "T\u00fcm Tarifler");
  const searchValue = searchInput.value.trim();
  recipeCount.textContent = `${filteredRecipes.length} tarif bulundu`;
  searchSummary.textContent = searchValue
    ? `"${searchValue}" aramas\u0131na g\u00f6re sonu\u00e7lar\u0131 g\u00f6r\u00fcyorsun.`
    : selectedCategory === "T\u00fcm Tarifler"
      ? "\u015eu anda t\u00fcm tarifler listeleniyor."
      : `\u015eu anda ${selectedCategory.toLocaleLowerCase("tr-TR")} kategorisini g\u00f6r\u00fcyorsun.`;

  if (!filteredRecipes.length) {
    recipeList.innerHTML = `<div class="empty">Bu filtreyle tarif bulamad\u0131k. Aramay\u0131 k\u0131saltmay\u0131 veya farkl\u0131 kategori se\u00e7meyi deneyelim.</div>`;
    return;
  }

  if (!filteredRecipes.some((recipe) => recipe.id === selectedRecipe?.id)) {
    selectedRecipe = filteredRecipes[0];
  }

  if (selectedCategory !== "T\u00fcm Tarifler") {
    recipeList.innerHTML = filteredRecipes.map(renderRecipeCard).join("");
    return;
  }

  const grouped = orderedRecipeTypes
    .map((category) => ({ category, recipes: filteredRecipes.filter((recipe) => recipe.type === category) }))
    .filter((group) => group.recipes.length);

  recipeList.innerHTML = grouped
    .map((group) => `
      <section class="recipe-group-block">
        <div class="section-title recipe-group-title">
          <div>
            <p class="eyebrow compact">Kategori</p>
            <h3>${group.category}</h3>
          </div>
          <span>${group.recipes.length} tarif</span>
        </div>
        <div class="recipe-group-grid">
          ${group.recipes.map(renderRecipeCard).join("")}
        </div>
      </section>
    `)
    .join("");
}

function renderDetail() {
  if (!selectedRecipe) {
    recipeDetail.innerHTML = `
      <div class="detail-hero">
        <div class="detail-meta"><span class="pill">Tarif detay\u0131</span></div>
        <h2>Bir tarif se\u00e7</h2>
      </div>
      <p>Soldaki tariflerden birine t\u0131klay\u0131nca malzemeler ve haz\u0131rlan\u0131\u015f burada a\u00e7\u0131lacak.</p>
    `;
    return;
  }

  recipeDetail.style.setProperty("--detail-color", selectedRecipe.color);
  recipeDetail.innerHTML = `
    <div class="detail-hero">
      <div class="detail-meta">
        <span class="pill">${selectedRecipe.type}</span>
        <span class="pill">${selectedRecipe.category}</span>
        <span class="pill">${selectedRecipe.calories} kcal</span>
        <span class="pill">${selectedRecipe.time} dk</span>
      </div>
      <h2>${selectedRecipe.name}</h2>
    </div>
    <p>${selectedRecipe.summary}</p>

    <div class="detail-section">
      <h3>Makrolar</h3>
      <ul>
        <li>Protein: ${selectedRecipe.protein} g</li>
        <li>Karbonhidrat: ${selectedRecipe.carbs} g</li>
        <li>Ya\u011f: ${selectedRecipe.fat} g</li>
      </ul>
    </div>

    <div class="detail-section">
      <h3>Malzemeler</h3>
      <ul>${selectedRecipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="detail-section">
      <h3>Haz\u0131rlama</h3>
      <ol>${selectedRecipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </div>

    <div class="detail-section">
      <h3>Etiketler</h3>
      <div class="detail-meta">${selectedRecipe.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}</div>
    </div>
  `;
}

function renderApp() {
  renderFilters();
  renderRecipes();
  renderDetail();
}

function showLoadingState(message) {
  recipeList.innerHTML = `<div class="empty">${message}</div>`;
  recipeDetail.innerHTML = `<div class="detail-hero"><h2>Tarifler haz\u0131rlan\u0131yor</h2></div><p>${message}</p>`;
  recipeCount.textContent = "";
  searchSummary.textContent = message;
}

async function loadRecipeSource() {
  const firebaseApi = window.fitFirebase;
  if (firebaseApi?.enabled && typeof firebaseApi.loadRecipes === "function") {
    try {
      let remoteRecipes = await firebaseApi.loadRecipes();
      const shouldRepair = !remoteRecipes.length || hasBrokenRecipeData(remoteRecipes) || isCategoryCoverageWeak(remoteRecipes) || hasMisplacedCoreRecipes(remoteRecipes);

      if (shouldRepair && defaultRecipes.length && typeof firebaseApi.seedRecipes === "function") {
        showLoadingState("Tarif katalo\u011fu onar\u0131l\u0131yor. Bu i\u015flem birka\u00e7 saniye s\u00fcrebilir.");
        await firebaseApi.seedRecipes(defaultRecipes, { force: true });
        remoteRecipes = await firebaseApi.loadRecipes();
      }

      if (remoteRecipes.length) {
        return remoteRecipes;
      }
    } catch (error) {
      console.error("Firestore tarifleri y\u00fcklenemedi, yerel katalog kullan\u0131lacak.", error);
    }
  }
  return defaultRecipes;
}

async function bootRecipes() {
  showLoadingState("Tarifler y\u00fckleniyor...");
  const loadedRecipes = await loadRecipeSource();
  buildRecipeState(loadedRecipes);
  renderApp();
}

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  selectedCategory = button.dataset.category;
  renderApp();
});

recipeList.addEventListener("click", (event) => {
  const card = event.target.closest(".recipe-card");
  if (!card) return;
  selectedRecipe = recipes.find((recipe) => recipe.id === card.dataset.id) || selectedRecipe;
  renderApp();
});

searchInput.addEventListener("input", renderApp);

bootRecipes();
