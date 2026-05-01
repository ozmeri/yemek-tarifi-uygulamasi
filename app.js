const recipes = [
  {
    name: "Protein Omlet Bowl",
    category: "Yüksek Protein",
    calories: 420,
    protein: 36,
    carbs: 18,
    fat: 22,
    time: 12,
    color: "#dcebd5",
    summary: "Güne tok ve dengeli başlamak için pratik omlet kasesi.",
    ingredients: ["3 yumurta", "60 g lor peyniri", "1 avuc ıspanak", "5 cherry domates", "1 tatlı kaşığı zeytinyağı"],
    steps: ["Ispanağı tavada hafif sotele.", "Yumurtayı lor peyniriyle çırp.", "Karışımı tavaya al ve kısık ateşte pişir.", "Domatesle servis et."],
    tags: ["kahvaltı", "tok tutar", "düşük karbonhidrat"]
  },
  {
    name: "Tavuklu Kinoa Salatası",
    category: "Yağ Yakımı",
    calories: 465,
    protein: 41,
    carbs: 32,
    fat: 14,
    time: 20,
    color: "#f3cf98",
    summary: "Öğlen için doyurucu, lifli ve protein ağırlıklı bir tabak.",
    ingredients: ["120 g izgara tavuk", "80 g haşlanmış kinoa", "Marul", "Salatalık", "Limonlu sos"],
    steps: ["Sebzeleri doğra.", "Kinoa ve tavuğu ekle.", "Limonlu sosu gezdir.", "Karıştırıp soğuk servis et."],
    tags: ["öğlen", "meal prep", "lifli"]
  },
  {
    name: "Somon ve Fırın Sebze",
    category: "Akdeniz",
    calories: 510,
    protein: 38,
    carbs: 24,
    fat: 28,
    time: 28,
    color: "#f1b08a",
    summary: "Sağlıklı yağ dengesi olan, akşam için güçlü bir tabak.",
    ingredients: ["140 g somon", "Brokoli", "Kabak", "Havuç", "Limon", "Dereotu"],
    steps: ["Sebzeleri zeytinyağı ile harmanla.", "Somonu limon ve dereotu ile tatlandır.", "Hepsini fırında pişir.", "Sıcak servis et."],
    tags: ["omega 3", "akşam", "doyurucu"]
  },
  {
    name: "Yoğurtlu Chia Kup",
    category: "Fit Tatlı",
    calories: 255,
    protein: 17,
    carbs: 19,
    fat: 11,
    time: 6,
    color: "#ead7f2",
    summary: "Tatlı krizini daha kontrollü geçirmek için hafif ara öğün.",
    ingredients: ["200 g süzme yoğurt", "1 yemek kaşığı chia", "Yarım muz", "Tarçın", "1 tatlı kaşığı fıstık ezmesi"],
    steps: ["Yoğurt ve chiayı karıştır.", "10 dakika beklet.", "Muz ve tarcin ekle.", "Fistik ezmesiyle tamamla."],
    tags: ["ara öğün", "şekersiz", "hızlı"]
  },
  {
    name: "Mercimekli Sebze Çorbasi",
    category: "Vejetaryen",
    calories: 310,
    protein: 18,
    carbs: 36,
    fat: 8,
    time: 25,
    color: "#f0c37d",
    summary: "Akşam icin sıcak, ekonomik ve doyurucu bir çorba.",
    ingredients: ["Kırmızı mercimek", "Havuç", "Kabak", "Soğan", "Kimyon", "Zerdecal"],
    steps: ["Sebzeleri doğra ve tencerede çevir.", "Mercimek ve su ekle.", "Baharatlarla pişir.", "Blenderdan geçir."],
    tags: ["çorba", "ekonomik", "lifli"]
  },
  {
    name: "Hindi Fümeli Tam Buğday Wrap",
    category: "Pratik",
    calories: 390,
    protein: 33,
    carbs: 29,
    fat: 13,
    time: 10,
    color: "#cfe4ee",
    summary: "Ofiste veya dışarıda kolay taşınabilen dengeli öğün.",
    ingredients: ["1 tam buğday lavaş", "90 g hindi fume", "Light labne", "Roka", "Salatalık", "Hardal"],
    steps: ["Lavaşın içine labne ve hardal sur.", "Hindi ve sebzeleri yerleştir.", "Sıkı sar.", "İki parçaya böl ve servis et."],
    tags: ["ofis", "tasima kolay", "hızlı"]
  },
  {
    name: "Nohutlu Ton Balığı Kasesi",
    category: "Yüksek Protein",
    calories: 445,
    protein: 39,
    carbs: 34,
    fat: 15,
    time: 11,
    color: "#d8e8c2",
    summary: "Ocak açmadan hazırlanan protein ve lif dengesi yüksek kase.",
    ingredients: ["1 kutu ton balığı", "4 yemek kaşığı haşlanmış nohut", "Marul", "Mısır", "Limon", "Maydanoz"],
    steps: ["Nohudu sudan geçir.", "Ton balığı ve sebzeleri kaseye al.", "Limon ve maydanoz ekle.", "Karıştırıp servis et."],
    tags: ["ocaksız", "öğlen", "lifli"]
  },
  {
    name: "Kabak Spagetti Tavuklu",
    category: "Düşük Karbonhidrat",
    calories: 360,
    protein: 37,
    carbs: 15,
    fat: 17,
    time: 22,
    color: "#c8e1b4",
    summary: "Makarna hissi veren ama daha hafif bir akşam alternatifi.",
    ingredients: ["2 kabak", "120 g tavuk göğsü", "Domates sosu", "Sarımsak", "Fesleğen"],
    steps: ["Kabaklari ince şeritler halinde kes.", "Tavuğu tavada pişir.", "Domates sosunu ekle.", "Kabaklari son 3 dakika tavaya al."],
    tags: ["akşam", "hafif", "düşük karbonhidrat"]
  },
  {
    name: "Yulafli Elma Pankek",
    category: "Fit Tatlı",
    calories: 335,
    protein: 19,
    carbs: 42,
    fat: 10,
    time: 18,
    color: "#f2d5a8",
    summary: "Tatlı kahvaltı isteyenler için daha kontrollü bir seçenek.",
    ingredients: ["1 yumurta", "4 yemek kaşığı yulaf", "Yarım elma", "Tarçın", "2 yemek kaşığı yoğurt"],
    steps: ["Yulafı rondodan geçir.", "Yumurta, elma ve tarcinla karıştır.", "Tavada iki tarafini pişir.", "Yoğurtla servis et."],
    tags: ["kahvaltı", "tatlı", "yulaf"]
  },
  {
    name: "Bulgurlu Yoğurtlu Semizotu",
    category: "Vejetaryen",
    calories: 285,
    protein: 15,
    carbs: 34,
    fat: 9,
    time: 14,
    color: "#d6edc9",
    summary: "Serin, ferah ve hafif bir öğlen tabağı.",
    ingredients: ["Semizotu", "3 yemek kaşığı haşlanmış bulgur", "Süzme yoğurt", "Nane", "Salatalık"],
    steps: ["Semizotunu yıka ve ayıkla.", "Yoğurt, nane ve salataligi karıştır.", "Bulguru ekle.", "Semizotu ile birleştir."],
    tags: ["ferah", "öğlen", "vejetaryen"]
  },
  {
    name: "Etli Mantar Sote",
    category: "Yüksek Protein",
    calories: 470,
    protein: 44,
    carbs: 16,
    fat: 24,
    time: 26,
    color: "#d8c6ad",
    summary: "Protein odakli, yanina salata ile tamamlanan doyurucu tabak.",
    ingredients: ["130 g yağsiz dana eti", "Mantar", "Biber", "Soğan", "Karabiber", "Kekik"],
    steps: ["Eti yüksek ateşte mühürle.", "Soğan ve biberi ekle.", "Mantarı ekleyip suyunu çektir.", "Baharatla servis et."],
    tags: ["akşam", "kas koruma", "doyurucu"]
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
    summary: "Dengeli yag ve protein iceren modern kahvaltı secenegi.",
    ingredients: ["1 dilim tam bugday ekmegi", "Yarım avokado", "1 yumurta", "Limon", "Pul biber"],
    steps: ["Ekmeği kızart.", "Avokadoyu limonla ez.", "Yumurtayı pişir.", "Hepsini üst üste koyup servis et."],
    tags: ["kahvaltı", "akdeniz", "tok tutar"]
  },
  {
    name: "Peynirli Roka Salatası",
    category: "Pratik",
    calories: 275,
    protein: 20,
    carbs: 12,
    fat: 16,
    time: 8,
    color: "#dbe7b8",
    summary: "Çok kısa sürede hazırlanan hafif ve keskin aromali salata.",
    ingredients: ["Roka", "60 g beyaz peynir", "Domates", "Ceviz", "Limon", "1 tatlı kaşığı zeytinyağı"],
    steps: ["Rokayı yıka.", "Peynir ve domatesi ekle.", "Cevizi serp.", "Limonlu sosla karıştır."],
    tags: ["8 dakika", "salata", "hafif"]
  },
  {
    name: "Karnabahar Pilavı Tavuklu",
    category: "Düşük Karbonhidrat",
    calories: 385,
    protein: 40,
    carbs: 18,
    fat: 16,
    time: 24,
    color: "#efe6c8",
    summary: "Pilav hissini koruyup karbonhidrati azaltmak isteyenlere.",
    ingredients: ["Karnabahar", "120 g tavuk", "Bezelye", "Havuç", "Soya sosu", "Taze soğan"],
    steps: ["Karnabaharı rondodan geçir.", "Tavuğu pişir.", "Sebzeleri ekle.", "Karnabaharı son 5 dakika tavada çevir."],
    tags: ["düşük karbonhidrat", "akşam", "doyurucu"]
  },
  {
    name: "Kakaolu Protein Topları",
    category: "Fit Tatlı",
    calories: 220,
    protein: 14,
    carbs: 21,
    fat: 9,
    time: 9,
    color: "#d6b6a8",
    summary: "Kahve yanina kontrollü, porsiyonluk tatlı alternatifi.",
    ingredients: ["3 yemek kaşığı yulaf", "1 yemek kaşığı kakao", "1 yemek kaşığı fıstık ezmesi", "2 yemek kaşığı yoğurt", "Tarçın"],
    steps: ["Tüm malzemeleri karıştır.", "Kıvam alana kadar yoğur.", "Küçük toplar yap.", "10 dakika buzdolabında beklet."],
    tags: ["tatlı", "ara öğün", "porsiyon"]
  },
  {
    name: "Hindi Köfteli Salata Tabağı",
    category: "Yağ Yakımı",
    calories: 430,
    protein: 43,
    carbs: 22,
    fat: 18,
    time: 30,
    color: "#efc0a6",
    summary: "Antrenman sonrası için protein ağırlıklı temiz tabak.",
    ingredients: ["140 g hindi kıyma", "Marul", "Kırmızı lahana", "Salatalık", "Yoğurtlu sos", "Kimyon"],
    steps: ["Hindi kıymayi baharatla yoğur.", "Küçük köfteler yap ve pişir.", "Sebzeleri tabağa al.", "Köfteleri ve yoğurtlu sosu ekle."],
    tags: ["antrenman", "protein", "salata"]
  }
];

recipes.push(...(window.fitRecipeCatalog || []));

const uniqueRecipes = [];
const seenRecipeNames = new Set();
for (const recipe of recipes) {
  const key = recipe.name.trim().toLocaleLowerCase("tr-TR");
  if (seenRecipeNames.has(key)) continue;
  seenRecipeNames.add(key);
  uniqueRecipes.push(recipe);
}
recipes.length = 0;
recipes.push(...uniqueRecipes);

function inferRecipeType(recipe) {
  const text = [recipe.name, recipe.category, recipe.summary, ...(recipe.ingredients || []), ...(recipe.tags || [])]
    .join(" ")
    .toLocaleLowerCase("tr-TR");

  const hasAny = (words) => words.some((item) => text.includes(item));
  const breakfastWords = ["kahvalti", "kahvaltı", "omlet", "tost", "yumurta", "menemen", "yulaf", "labne", "peynir", "avokado", "pankek", "bowl"];
  const soupWords = ["corba", "çorba", "soup"];
  const saladWords = ["salata", "roka", "semizotu", "marul", "yesillik"];
  const dessertWords = ["tatli", "tatlı", "muhallebi", "kup", "kurabiye", "kek", "puding", "brownie", "cheesecake", "topları", "toplari"];
  const snackWords = ["atistirmalik", "aperatif", "ara öğün", "ara ogun", "smoothie", "bar"];
  const mainMealWords = ["tavuk", "hindi", "somon", "balik", "kiyma", "köfte", "kofte", "sote", "firin", "fırın", "pilav", "makarna", "izgara", "ana yemek", "et"];

  const breakfastMatch = hasAny(breakfastWords);
  const soupMatch = hasAny(soupWords);
  const saladMatch = hasAny(saladWords);
  const dessertMatch = hasAny(dessertWords);
  const snackMatch = hasAny(snackWords);
  const mainMealMatch = hasAny(mainMealWords);

  if (soupMatch) return "Çorba";
  if (saladMatch && !breakfastMatch) return "Salata";
  if (dessertMatch && !breakfastMatch) return "Tatlı";
  if (breakfastMatch && !mainMealMatch && !saladMatch && !soupMatch && !dessertMatch) return "Kahvaltı";
  if (snackMatch || (recipe.calories <= 220 && recipe.protein <= 12 && !breakfastMatch && !saladMatch && !soupMatch && !dessertMatch)) return "Aperatif";
  if (mainMealMatch) return "Ana yemek";
  if (breakfastMatch) return "Kahvaltı";
  if (recipe.protein >= 22 || recipe.calories >= 360) return "Ana yemek";
  return "Aperatif";
}

recipes.forEach((recipe) => {
  recipe.type = inferRecipeType(recipe);
});

const orderedRecipeTypes = ['Ana yemek', 'Salata', 'Çorba', 'Kahvaltı', 'Aperatif', 'Tatlı'];
const categories = ['Tüm Tarifler', ...orderedRecipeTypes.filter((type) => recipes.some((recipe) => recipe.type === type))];

let selectedCategory = "Tüm Tarifler";
let selectedRecipe = recipes[0];

const searchInput = document.querySelector("#search");
const filters = document.querySelector("#filters");
const recipeList = document.querySelector("#recipe-list");
const recipeCount = document.querySelector("#recipe-count");
const recipeDetail = document.querySelector("#recipe-detail");
const activeCategoryLabel = document.querySelector("#active-category-label");
const searchSummary = document.querySelector("#search-summary");


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
  const selectedClass = recipe === selectedRecipe ? " selected" : "";
  return `
    <article class="recipe-card fade-in${selectedClass}" data-name="${recipe.name}" style="--card-color: ${recipe.color}">
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
  const searchValue = searchInput.value.trim();
  recipeCount.textContent = `${filteredRecipes.length} tarif bulundu`;
  searchSummary.textContent = searchValue
    ? `"${searchValue}" aramasına göre sonuçları görüyorsun.`
    : selectedCategory === "Tüm Tarifler"
      ? "Şu anda tüm tarifler listeleniyor."
      : `Şu anda ${selectedCategory.toLocaleLowerCase("tr-TR")} kategorisini görüyorsun.`;

  if (!filteredRecipes.length) {
    recipeList.innerHTML = `<div class="empty">Bu filtreyle tarif bulamadık. Aramayi kısaltmayi veya farkli kategori seçmeyi deneyelim.</div>`;
    return;
  }

  if (!filteredRecipes.includes(selectedRecipe)) {
    selectedRecipe = filteredRecipes[0];
  }

  if (selectedCategory !== "Tüm Tarifler") {
    recipeList.innerHTML = filteredRecipes.map(renderRecipeCard).join("");
    return;
  }

  const grouped = categories
    .filter((category) => category !== "Tüm Tarifler")
    .map((category) => ({
      category,
      recipes: filteredRecipes.filter((recipe) => recipe.type === category)
    }))
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









