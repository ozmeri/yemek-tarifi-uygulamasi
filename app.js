const recipes = [
  {
    name: "Protein Omlet Bowl",
    category: "Yuksek Protein",
    calories: 420,
    protein: 36,
    carbs: 18,
    fat: 22,
    time: 12,
    color: "#dcebd5",
    summary: "Gune tok ve dengeli baslamak icin pratik omlet kasesi.",
    ingredients: ["3 yumurta", "60 g lor peyniri", "1 avuc ispanak", "5 cherry domates", "1 tatli kasigi zeytinyagi"],
    steps: ["Ispanagi tavada hafif sotele.", "Yumurtayi lor peyniriyle cirp.", "Karisimi tavaya al ve kisik ateste pisir.", "Domatesle servis et."],
    tags: ["kahvalti", "tok tutar", "dusuk karbonhidrat"]
  },
  {
    name: "Tavuklu Kinoa Salatasi",
    category: "Yag Yakimi",
    calories: 465,
    protein: 41,
    carbs: 32,
    fat: 14,
    time: 20,
    color: "#f3cf98",
    summary: "Oglen icin doyurucu, lifli ve protein agirlikli bir tabak.",
    ingredients: ["120 g izgara tavuk", "80 g haslanmis kinoa", "Marul", "Salatalik", "Limonlu sos"],
    steps: ["Sebzeleri dogra.", "Kinoa ve tavugu ekle.", "Limonlu sosu gezdir.", "Karistirip soguk servis et."],
    tags: ["oglen", "meal prep", "lifli"]
  },
  {
    name: "Somon ve Firin Sebze",
    category: "Akdeniz",
    calories: 510,
    protein: 38,
    carbs: 24,
    fat: 28,
    time: 28,
    color: "#f1b08a",
    summary: "Saglikli yag dengesi olan, aksam icin guclu bir tabak.",
    ingredients: ["140 g somon", "Brokoli", "Kabak", "Havuc", "Limon", "Dereotu"],
    steps: ["Sebzeleri zeytinyagi ile harmanla.", "Somonu limon ve dereotu ile tatlandir.", "Hepsini firinda pisir.", "Sicak servis et."],
    tags: ["omega 3", "aksam", "doyurucu"]
  },
  {
    name: "Yogurtlu Chia Kup",
    category: "Fit Tatli",
    calories: 255,
    protein: 17,
    carbs: 19,
    fat: 11,
    time: 6,
    color: "#ead7f2",
    summary: "Tatli krizini daha kontrollu gecirmek icin hafif ara ogun.",
    ingredients: ["200 g suzme yogurt", "1 yemek kasigi chia", "Yarim muz", "Tarcin", "1 tatli kasigi fistik ezmesi"],
    steps: ["Yogurt ve chiayi karistir.", "10 dakika beklet.", "Muz ve tarcin ekle.", "Fistik ezmesiyle tamamla."],
    tags: ["ara ogun", "sekersiz", "hizli"]
  },
  {
    name: "Mercimekli Sebze Corbasi",
    category: "Vejetaryen",
    calories: 310,
    protein: 18,
    carbs: 36,
    fat: 8,
    time: 25,
    color: "#f0c37d",
    summary: "Aksam icin sicak, ekonomik ve doyurucu bir corba.",
    ingredients: ["Kirmizi mercimek", "Havuc", "Kabak", "Sogan", "Kimyon", "Zerdecal"],
    steps: ["Sebzeleri dogra ve tencerede cevir.", "Mercimek ve su ekle.", "Baharatlarla pisir.", "Blenderdan gecir."],
    tags: ["corba", "ekonomik", "lifli"]
  },
  {
    name: "Hindi Fumeli Tam Bugday Wrap",
    category: "Pratik",
    calories: 390,
    protein: 33,
    carbs: 29,
    fat: 13,
    time: 10,
    color: "#cfe4ee",
    summary: "Ofiste veya disarida kolay tasinabilen dengeli ogun.",
    ingredients: ["1 tam bugday lavas", "90 g hindi fume", "Light labne", "Roka", "Salatalik", "Hardal"],
    steps: ["Lavasin icine labne ve hardal sur.", "Hindi ve sebzeleri yerlestir.", "Siki sar.", "Iki parcaya bol ve servis et."],
    tags: ["ofis", "tasima kolay", "hizli"]
  },
  {
    name: "Nohutlu Ton Baligi Kasesi",
    category: "Yuksek Protein",
    calories: 445,
    protein: 39,
    carbs: 34,
    fat: 15,
    time: 11,
    color: "#d8e8c2",
    summary: "Ocak acmadan hazirlanan protein ve lif dengesi yuksek kase.",
    ingredients: ["1 kutu ton baligi", "4 yemek kasigi haslanmis nohut", "Marul", "Misir", "Limon", "Maydanoz"],
    steps: ["Nohudu sudan gecir.", "Ton baligi ve sebzeleri kaseye al.", "Limon ve maydanoz ekle.", "Karistirip servis et."],
    tags: ["ocaksiz", "oglen", "lifli"]
  },
  {
    name: "Kabak Spagetti Tavuklu",
    category: "Dusuk Karbonhidrat",
    calories: 360,
    protein: 37,
    carbs: 15,
    fat: 17,
    time: 22,
    color: "#c8e1b4",
    summary: "Makarna hissi veren ama daha hafif bir aksam alternatifi.",
    ingredients: ["2 kabak", "120 g tavuk gogsu", "Domates sosu", "Sarmisak", "Feslegen"],
    steps: ["Kabaklari ince seritler halinde kes.", "Tavugu tavada pisir.", "Domates sosunu ekle.", "Kabaklari son 3 dakika tavaya al."],
    tags: ["aksam", "hafif", "dusuk karbonhidrat"]
  },
  {
    name: "Yulafli Elma Pankek",
    category: "Fit Tatli",
    calories: 335,
    protein: 19,
    carbs: 42,
    fat: 10,
    time: 18,
    color: "#f2d5a8",
    summary: "Tatli kahvalti isteyenler icin daha kontrollu bir secenek.",
    ingredients: ["1 yumurta", "4 yemek kasigi yulaf", "Yarim elma", "Tarcin", "2 yemek kasigi yogurt"],
    steps: ["Yulafi rondodan gecir.", "Yumurta, elma ve tarcinla karistir.", "Tavada iki tarafini pisir.", "Yogurtla servis et."],
    tags: ["kahvalti", "tatli", "yulaf"]
  },
  {
    name: "Bulgurlu Yogurtlu Semizotu",
    category: "Vejetaryen",
    calories: 285,
    protein: 15,
    carbs: 34,
    fat: 9,
    time: 14,
    color: "#d6edc9",
    summary: "Serin, ferah ve hafif bir oglen tabagi.",
    ingredients: ["Semizotu", "3 yemek kasigi haslanmis bulgur", "Süzme yogurt", "Nane", "Salatalik"],
    steps: ["Semizotunu yika ve ayikla.", "Yogurt, nane ve salataligi karistir.", "Bulguru ekle.", "Semizotu ile birlestir."],
    tags: ["ferah", "oglen", "vejetaryen"]
  },
  {
    name: "Etli Mantar Sote",
    category: "Yuksek Protein",
    calories: 470,
    protein: 44,
    carbs: 16,
    fat: 24,
    time: 26,
    color: "#d8c6ad",
    summary: "Protein odakli, yanina salata ile tamamlanan doyurucu tabak.",
    ingredients: ["130 g yagsiz dana eti", "Mantar", "Biber", "Sogan", "Karabiber", "Kekik"],
    steps: ["Eti yuksek ateste muhurle.", "Sogan ve biberi ekle.", "Mantari ekleyip suyunu cektir.", "Baharatla servis et."],
    tags: ["aksam", "kas koruma", "doyurucu"]
  },
  {
    name: "Avokadolu Yumurta Tostu",
    category: "Akdeniz",
    calories: 405,
    protein: 22,
    carbs: 31,
    fat: 22,
    time: 13,
    color: "#cfe6bf",
    summary: "Dengeli yag ve protein iceren modern kahvalti secenegi.",
    ingredients: ["1 dilim tam bugday ekmegi", "Yarim avokado", "1 yumurta", "Limon", "Pul biber"],
    steps: ["Ekmegi kizart.", "Avokadoyu limonla ez.", "Yumurtayi pisir.", "Hepsini ust uste koyup servis et."],
    tags: ["kahvalti", "akdeniz", "tok tutar"]
  },
  {
    name: "Peynirli Roka Salatasi",
    category: "Pratik",
    calories: 275,
    protein: 20,
    carbs: 12,
    fat: 16,
    time: 8,
    color: "#dbe7b8",
    summary: "Cok kisa surede hazirlanan hafif ve keskin aromali salata.",
    ingredients: ["Roka", "60 g beyaz peynir", "Domates", "Ceviz", "Limon", "1 tatli kasigi zeytinyagi"],
    steps: ["Rokayi yika.", "Peynir ve domatesi ekle.", "Cevizi serp.", "Limonlu sosla karistir."],
    tags: ["8 dakika", "salata", "hafif"]
  },
  {
    name: "Karnabahar Pilavi Tavuklu",
    category: "Dusuk Karbonhidrat",
    calories: 385,
    protein: 40,
    carbs: 18,
    fat: 16,
    time: 24,
    color: "#efe6c8",
    summary: "Pilav hissini koruyup karbonhidrati azaltmak isteyenlere.",
    ingredients: ["Karnabahar", "120 g tavuk", "Bezelye", "Havuc", "Soya sosu", "Taze sogan"],
    steps: ["Karnabahari rondodan gecir.", "Tavugu pisir.", "Sebzeleri ekle.", "Karnabahari son 5 dakika tavada cevir."],
    tags: ["dusuk karbonhidrat", "aksam", "doyurucu"]
  },
  {
    name: "Kakaolu Protein Toplari",
    category: "Fit Tatli",
    calories: 220,
    protein: 14,
    carbs: 21,
    fat: 9,
    time: 9,
    color: "#d6b6a8",
    summary: "Kahve yanina kontrollu, porsiyonluk tatli alternatifi.",
    ingredients: ["3 yemek kasigi yulaf", "1 yemek kasigi kakao", "1 yemek kasigi fistik ezmesi", "2 yemek kasigi yogurt", "Tarcin"],
    steps: ["Tum malzemeleri karistir.", "Kivam alana kadar yogur.", "Kucuk toplar yap.", "10 dakika buzdolabinda beklet."],
    tags: ["tatli", "ara ogun", "porsiyon"]
  },
  {
    name: "Hindi Kofteli Salata Tabagi",
    category: "Yag Yakimi",
    calories: 430,
    protein: 43,
    carbs: 22,
    fat: 18,
    time: 30,
    color: "#efc0a6",
    summary: "Antrenman sonrasi icin protein agirlikli temiz tabak.",
    ingredients: ["140 g hindi kiyma", "Marul", "Kirmizi lahana", "Salatalik", "Yogurtlu sos", "Kimyon"],
    steps: ["Hindi kiymayi baharatla yogur.", "Kucuk kofteler yap ve pisir.", "Sebzeleri tabaga al.", "Kofteleri ve yogurtlu sosu ekle."],
    tags: ["antrenman", "protein", "salata"]
  }
];

recipes.push(...(window.fitRecipeCatalog || []));

const categories = ["Tum Tarifler", ...new Set(recipes.map((recipe) => recipe.category))];

let selectedCategory = "Tum Tarifler";
let selectedRecipe = recipes[0];

const searchInput = document.querySelector("#search");
const filters = document.querySelector("#filters");
const recipeList = document.querySelector("#recipe-list");
const recipeCount = document.querySelector("#recipe-count");
const recipeDetail = document.querySelector("#recipe-detail");
const totalRecipes = document.querySelector("#total-recipes");
const avgCalories = document.querySelector("#avg-calories");
const avgProtein = document.querySelector("#avg-protein");

function renderStats() {
  const calorieAverage = Math.round(recipes.reduce((sum, recipe) => sum + recipe.calories, 0) / recipes.length);
  const proteinAverage = Math.round(recipes.reduce((sum, recipe) => sum + recipe.protein, 0) / recipes.length);

  totalRecipes.textContent = recipes.length;
  avgCalories.textContent = calorieAverage;
  avgProtein.textContent = `${proteinAverage}g`;
}

function renderFilters() {
  filters.innerHTML = categories
    .map((category) => {
      const activeClass = category === selectedCategory ? " active" : "";
      return `<button class="filter-button${activeClass}" data-category="${category}">${category}</button>`;
    })
    .join("");
}

function getFilteredRecipes() {
  const search = searchInput.value.trim().toLowerCase();

  return recipes.filter((recipe) => {
    const matchesCategory = selectedCategory === "Tum Tarifler" || recipe.category === selectedCategory;
    const searchableText = [recipe.name, recipe.category, recipe.summary, ...recipe.ingredients, ...recipe.tags].join(" ").toLowerCase();
    const matchesSearch = !search || searchableText.includes(search);

    return matchesCategory && matchesSearch;
  });
}

function renderRecipes() {
  const filteredRecipes = getFilteredRecipes();
  recipeCount.textContent = `${filteredRecipes.length} tarif bulundu`;

  if (!filteredRecipes.length) {
    recipeList.innerHTML = `<div class="empty">Bu filtreyle tarif bulamadik. Aramayi kisaltmayi veya farkli kategori secmeyi deneyelim.</div>`;
    return;
  }

  if (!filteredRecipes.includes(selectedRecipe)) {
    selectedRecipe = filteredRecipes[0];
  }

  recipeList.innerHTML = filteredRecipes
    .map((recipe) => {
      const selectedClass = recipe === selectedRecipe ? " selected" : "";
      return `
        <article class="recipe-card fade-in${selectedClass}" data-name="${recipe.name}" style="--card-color: ${recipe.color}">
          <div class="recipe-tags">
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
    })
    .join("");
}

function renderDetail() {
  recipeDetail.style.setProperty("--detail-color", selectedRecipe.color);
  recipeDetail.innerHTML = `
    <div class="detail-hero">
      <div class="detail-meta">
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
        <li>Yag: ${selectedRecipe.fat} g</li>
      </ul>
    </div>

    <div class="detail-section">
      <h3>Malzemeler</h3>
      <ul>${selectedRecipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="detail-section">
      <h3>Hazirlama</h3>
      <ol>${selectedRecipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </div>

    <div class="detail-section">
      <h3>Etiketler</h3>
      <div class="detail-meta">${selectedRecipe.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}</div>
    </div>
  `;
}

function renderApp() {
  renderStats();
  renderFilters();
  renderRecipes();
  renderDetail();
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

  selectedRecipe = recipes.find((recipe) => recipe.name === card.dataset.name) || selectedRecipe;
  renderApp();
});

searchInput.addEventListener("input", renderApp);

renderApp();


