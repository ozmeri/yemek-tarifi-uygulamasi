const orderedRecipeTypes = window.fitOrderedRecipeTypes || ["Ana yemek", "Salata", "Çorba", "Kahvaltı", "Aperatif", "Tatlı"];
const defaultRecipes = (window.fitDefaultRecipes || []).map((recipe) => ({ ...recipe }));
const fallbackColors = ["#dcebd5", "#f3cf98", "#f1b08a", "#ead7f2", "#cfe4ee", "#d8e8c2"];

let recipes = [];
let categories = ["Tüm Tarifler"];
let selectedCategory = "Tüm Tarifler";
let selectedRecipe = null;

const searchInput = document.querySelector("#search");
const filters = document.querySelector("#filters");
const recipeList = document.querySelector("#recipe-list");
const recipeCount = document.querySelector("#recipe-count");
const recipeDetail = document.querySelector("#recipe-detail");
const activeCategoryLabel = document.querySelector("#active-category-label");
const searchSummary = document.querySelector("#search-summary");

function ensureRecipeShape(recipe, index = 0) {
  const type = recipe.type || window.fitInferRecipeType?.(recipe) || "Ana yemek";
  return {
    ...recipe,
    id: recipe.id || `tarif-${index + 1}`,
    type,
    category: recipe.category || type,
    summary: recipe.summary || "Tarif özeti yakında eklenecek.",
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
  categories = ["Tüm Tarifler", ...orderedRecipeTypes.filter((type) => recipes.some((recipe) => recipe.type === type))];
  selectedCategory = "Tüm Tarifler";
  selectedRecipe = recipes[0] || null;
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
    const matchesCategory = selectedCategory === "Tüm Tarifler" || recipe.type === selectedCategory;
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
  recipeList.classList.toggle("single-category-grid", selectedCategory !== "Tüm Tarifler");
  const searchValue = searchInput.value.trim();
  recipeCount.textContent = `${filteredRecipes.length} tarif bulundu`;
  searchSummary.textContent = searchValue
    ? `"${searchValue}" aramasına göre sonuçları görüyorsun.`
    : selectedCategory === "Tüm Tarifler"
      ? "Şu anda tüm tarifler listeleniyor."
      : `Şu anda ${selectedCategory.toLocaleLowerCase("tr-TR")} kategorisini görüyorsun.`;

  if (!filteredRecipes.length) {
    recipeList.innerHTML = `<div class="empty">Bu filtreyle tarif bulamadık. Aramayı kısaltmayı veya farklı kategori seçmeyi deneyelim.</div>`;
    return;
  }

  if (!filteredRecipes.some((recipe) => recipe.id === selectedRecipe?.id)) {
    selectedRecipe = filteredRecipes[0];
  }

  if (selectedCategory !== "Tüm Tarifler") {
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
        <div class="detail-meta"><span class="pill">Tarif detayı</span></div>
        <h2>Bir tarif seç</h2>
      </div>
      <p>Soldaki tariflerden birine tıklayınca malzemeler ve hazırlanış burada açılacak.</p>
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
        <li>Yağ: ${selectedRecipe.fat} g</li>
      </ul>
    </div>

    <div class="detail-section">
      <h3>Malzemeler</h3>
      <ul>${selectedRecipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="detail-section">
      <h3>Hazırlama</h3>
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
  recipeDetail.innerHTML = `<div class="detail-hero"><h2>Tarifler hazırlanıyor</h2></div><p>${message}</p>`;
  recipeCount.textContent = "";
  searchSummary.textContent = message;
}

async function loadRecipeSource() {
  const firebaseApi = window.fitFirebase;
  if (firebaseApi?.enabled && typeof firebaseApi.loadRecipes === "function") {
    try {
      let remoteRecipes = await firebaseApi.loadRecipes();
      if (!remoteRecipes.length && defaultRecipes.length && typeof firebaseApi.seedRecipes === "function") {
        showLoadingState("Tarif kataloğu ilk kez hazırlanıyor. Bu işlem birkaç saniye sürebilir.");
        await firebaseApi.seedRecipes(defaultRecipes);
        remoteRecipes = await firebaseApi.loadRecipes();
      }
      if (remoteRecipes.length) {
        return remoteRecipes;
      }
    } catch (error) {
      console.error("Firestore tarifleri yüklenemedi, yerel katalog kullanılacak.", error);
    }
  }
  return defaultRecipes;
}

async function bootRecipes() {
  showLoadingState("Tarifler yükleniyor...");
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