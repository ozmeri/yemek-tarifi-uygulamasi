const profilePage = document.querySelector("#profile-page");
const profile = JSON.parse(localStorage.getItem("fitTariflerProfile") || "null");
const catalogRecipes = window.fitRecipeCatalog || [];
let generatedPantryRecipes = [];
const recipeDetails = {
  "Tavuklu Kinoa Salatası": {
    ingredients: ["120 g izgara tavuk", "80 g haşlanmış kinoa", "Marul", "Salatalık", "Limonlu sos"],
    steps: ["Sebzeleri doğra.", "Kinoa ve tavuğu ekle.", "Limonlu sosu gezdir.", "Karıştırıp soğuk servis et."]
  },
  "Kabak Spagetti Tavuklu": {
    ingredients: ["2 kabak", "120 g tavuk göğsü", "Domates sosu", "Sarımsak", "Fesleğen"],
    steps: ["Kabaklari ince şeritler halinde kes.", "Tavuğu tavada pişir.", "Domates sosunu ekle.", "Kabaklari son 3 dakika tavaya al."]
  },
  "Somon ve Fırın Sebze": {
    ingredients: ["140 g somon", "Brokoli", "Kabak", "Havuç", "Limon", "Dereotu"],
    steps: ["Sebzeleri zeytinyağı ile harmanla.", "Somonu limon ve dereotu ile tatlandır.", "Hepsini fırında pişir.", "Sıcak servis et."]
  },
  "Mercimekli Sebze Çorbasi": {
    ingredients: ["Kırmızı mercimek", "Havuç", "Kabak", "Soğan", "Kimyon", "Zerdecal"],
    steps: ["Sebzeleri doğra ve tencerede çevir.", "Mercimek ve su ekle.", "Baharatlarla pişir.", "Blenderdan geçir."]
  },
  "Nohutlu Ton Balığı Kasesi": {
    ingredients: ["1 kutu ton balığı", "Haşlanmış nohut", "Marul", "Mısır", "Limon", "Maydanoz"],
    steps: ["Nohudu sudan geçir.", "Ton balığı ve sebzeleri kaseye al.", "Limon ve maydanoz ekle.", "Karıştırıp servis et."]
  },
  "Karnabahar Pilavı Tavuklu": {
    ingredients: ["Karnabahar", "120 g tavuk", "Bezelye", "Havuç", "Soya sosu", "Taze soğan"],
    steps: ["Karnabaharı rondodan geçir.", "Tavuğu pişir.", "Sebzeleri ekle.", "Karnabaharı son 5 dakika tavada çevir."]
  },
  "Bulgurlu Yoğurtlu Semizotu": {
    ingredients: ["Semizotu", "Haşlanmış bulgur", "Süzme yoğurt", "Nane", "Salatalık"],
    steps: ["Semizotunu yıka ve ayıkla.", "Yoğurt, nane ve salataligi karıştır.", "Bulguru ekle.", "Semizotu ile birleştir."]
  },
  "Protein Omlet Bowl": {
    ingredients: ["3 yumurta", "60 g lor peyniri", "Ispanak", "Cherry domates", "Zeytinyağı"],
    steps: ["Ispanağı tavada hafif sotele.", "Yumurtayı lor peyniriyle çırp.", "Karışımı tavaya al ve kısık ateşte pişir.", "Domatesle servis et."]
  },
  "Peynirli Roka Salatası": {
    ingredients: ["Roka", "60 g beyaz peynir", "Domates", "Ceviz", "Limon", "Zeytinyağı"],
    steps: ["Rokayı yıka.", "Peynir ve domatesi ekle.", "Cevizi serp.", "Limonlu sosla karıştır."]
  },
  "Hindi Köfteli Salata Tabağı": {
    ingredients: ["140 g hindi kıyma", "Marul", "Kırmızı lahana", "Salatalık", "Yoğurtlu sos", "Kimyon"],
    steps: ["Hindi kıymayı baharatla yoğur.", "Küçük köfteler yap ve pişir.", "Sebzeleri tabağa al.", "Köfteleri ve yoğurtlu sosu ekle."]
  }
};

const pantryRecipes = [
  {
    name: "Tavuklu Kapya Biber Havuçlu Sote",
    note: "Dolabında tavuk, biber ve havuç varsa pratik, proteinli bir günlük tabak.",
    calories: 390,
    protein: 39,
    carbs: 24,
    fat: 15,
    time: 25,
    keywords: ["tavuk", "kapya", "biber", "havuç", "havuç", "sote"],
    pantryCore: ["tavuk", "biber", "havuç"],
    ingredients: ["120 g tavuk", "1 kapya biber", "1 havuç", "1 tatlı kaşığı zeytinyağı", "Karabiber", "Kekik"],
    steps: ["Tavuğu kuşbaşı doğra ve tavada zeytinyağı ile pişir.", "Kapya biberi ve havuçu ince doğra.", "Sebzeleri tavuğa ekleyip 8-10 dakika sotele.", "Baharat ekleyip sıcak servis et."]
  },
  {
    name: "Patates Bezelye Yemeği",
    note: "Dolabında patates ve bezelye varsa etsiz, sade ve hafif bir sebze yemeği.",
    calories: 315,
    protein: 10,
    carbs: 48,
    fat: 9,
    time: 28,
    keywords: ["patates", "bezelye", "sebze", "etsiz"],
    pantryCore: ["patates", "bezelye"],
    ingredients: ["2 küçük patates", "1 su bardagi bezelye", "1 küçük soğan", "1 tatlı kaşığı zeytinyağı", "Domates sosu", "Karabiber"],
    steps: ["Patatesleri küp küp doğra.", "Soğanı zeytinyağında hafifçe çevir.", "Patates ve bezelyeyi ekleyip uzerini gececek kadar su koy.", "Domates sosu ve baharat ekleyip patates yumuşayana kadar pişir."]
  },
  {
    name: "Kıymalı Patlıcan Kabak Sote",
    note: "Kıyma, patlıcan, kabak ve kapya biberle hazırlanan doyurucu bir tava yemeği.",
    calories: 455,
    protein: 34,
    carbs: 28,
    fat: 23,
    time: 32,
    keywords: ["kıyma", "kıyma", "patlıcan", "patlıcan", "kabak", "kapya", "biber", "sote"],
    pantryCore: ["kıyma", "patlıcan", "kabak", "biber"],
    ingredients: ["120 g kıyma", "1 patlıcan", "1 kabak", "1 kapya biber", "1 tatlı kaşığı zeytinyağı", "Karabiber", "Kekik"],
    steps: ["Patlıcanı, kabağı ve kapya biberi doğra.", "Kıymayı tavada suyunu çekene kadar pişir.", "Sebzeleri ekleyip kısık ateşte yumuşayana kadar sotele.", "Baharat ekleyip sıcak servis et."]
  },
  {
    name: "Kıymalı Patlıcan Patates Yemeği",
    note: "Dolabında kıyma, patlıcan ve patates varsa tencerede yapabileceğin doyurucu bir ana yemek.",
    calories: 480,
    protein: 32,
    carbs: 42,
    fat: 22,
    time: 35,
    keywords: ["kıyma", "kıyma", "patlıcan", "patlıcan", "patates", "tencere", "yemek"],
    pantryCore: ["kıyma", "patlıcan", "patates"],
    ingredients: ["120 g kıyma", "1 patlıcan", "1 küçük patates", "1 küçük soğan", "Domates sosu", "1 tatlı kaşığı zeytinyağı", "Karabiber"],
    steps: ["Patlıcanı ve patatesi küp küp doğra.", "Soğanı zeytinyağında çevirip kıymayı ekle ve suyunu cekene kadar pişir.", "Patates ve patlıcani tencereye al, domates sosu ve az su ekle.", "Sebzeler yumuşayana kadar kısık ateşte pişirip sıcak servis et."]
  },
  {
    name: "Karnabahar Brokoli Fırın",
    note: "Dolabında karnabahar ve brokoli varsa hafif, doyurucu bir fırın tabağı.",
    calories: 320,
    protein: 18,
    carbs: 26,
    fat: 14,
    time: 30,
    keywords: ["karnabahar", "karnibahar", "brokoli", "yoğurt", "yumurta", "lor", "peynir"],
    pantryCore: ["karnabahar", "brokoli"],
    ingredients: ["Karnabahar", "Brokoli", "3 yemek kaşığı süzme yoğurt", "1 yumurta", "40 g lor peyniri", "1 tatlı kaşığı zeytinyağı"],
    steps: ["Karnabahar ve brokoliyi hafif haşla.", "Yoğurt, yumurta, lor ve zeytinyağını karıştır.", "Sebzeleri fırın kabına al ve sosu üzerine gezdir.", "180 derecede 20 dakika pişir."]
  },
  {
    name: "Brokolili Yoğurtlu Kase",
    note: "Brokoli, yoğurt ve yumurta ile hızlı bir günlük tabak.",
    calories: 280,
    protein: 21,
    carbs: 18,
    fat: 12,
    time: 18,
    keywords: ["brokoli", "yoğurt", "yumurta", "lor", "peynir"],
    pantryCore: ["brokoli", "yoğurt"],
    ingredients: ["Brokoli", "Süzme yoğurt", "1 haşlanmış yumurta", "Nane", "Limon", "Az zeytinyağı"],
    steps: ["Brokoliyi buharda pişir.", "Yoğurdu nane ve limonla karıştır.", "Yumurtayı dilimle.", "Hepsini kaseye al ve az zeytinyağı ekle."]
  }
];

function renderRecipeDetail(food) {
  const details = recipeDetails[food.name] || food || { ingredients: ["Malzeme bilgisi yakinda eklenecek."], steps: ["Hazırlanış bilgisi yakinda eklenecek."] };
  return `
    <p class="eyebrow compact">Tarif detayı</p>
    <h2>${food.name}</h2>
    <p>${food.note}</p>
    <div class="recipe-meta detail-meta-row">
      <span>${food.calories} kcal</span>
      <span>${food.protein} g protein</span>
      <span>${food.time} dk</span>
    </div>
    <div class="detail-section compact-detail-section">
      <h3>Malzemeler</h3>
      <ul>${details.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="detail-section compact-detail-section">
      <h3>Hazırlanış</h3>
      <ol>${details.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </div>
  `;
}

function showRecipeDetail(foodName) {
  const food = [...generatedPantryRecipes, ...(profile.recommendations || []), ...pantryRecipes, ...catalogRecipes].find((item) => item.name === foodName);
  if (!food) return;
  document.querySelector("#recipe-detail-pane").innerHTML = renderRecipeDetail(food);
}

function normalizeText(value) {
  return String(value || "")
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function parsePantryInput(input) {
  const normalized = normalizeText(input);
  const commonWords = new Set(["ve", "ile", "var", "bir", "az", "tane", "adet", "elimde", "dolabimda", "dolabinda", "bunlar"]);
  return normalized
    .split(/[^a-z0-9]+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 2 && !commonWords.has(item));
}
function normalizePantryTerm(term) {
  const aliases = {
    karnibahar: "karnabahar",
    karnabaharli: "karnabahar",
    kiyma: "kiyma",
    patlican: "patlican",
    havuc: "havuc",
    kapya: "biber",
    yesil: "biber",
    kirmizi: "biber",
    domates: "domates",
    patates: "patates",
    yogurt: "yogurt",
    sogan: "sogan"
  };
  return aliases[term] || term;
}

function displayIngredient(term) {
  const labels = {
    kiyma: "kıyma",
    tavuk: "tavuk",
    hindi: "hindi",
    yumurta: "yumurta",
    balik: "balık",
    ton: "ton balığı",
    somon: "somon",
    yogurt: "yoğurt",
    peynir: "peynir",
    karnabahar: "karnabahar",
    brokoli: "brokoli",
    kabak: "kabak",
    patlican: "patlıcan",
    patates: "patates",
    havuc: "havuç",
    biber: "biber",
    bezelye: "bezelye",
    mantar: "mantar",
    ispanak: "ıspanak",
    domates: "domates",
    sogan: "soğan",
    nohut: "nohut",
    mercimek: "mercimek",
    fasulye: "fasulye"
  };
  return labels[term] || term;
}

function titleIngredient(term) {
  const label = displayIngredient(term);
  return label.charAt(0).toUpperCase() + label.slice(1);
}
function getRecipeSearchText(food) {
  const details = recipeDetails[food.name] || food;
  const keywords = food.keywords || [];
  return normalizeText([
    food.name,
    food.note,
    ...(details.ingredients || []),
    ...keywords
  ].join(" "));
}

function getRecipeCoreTerms(food) {
  if (food.pantryCore) return food.pantryCore.map(normalizeText);
  const details = recipeDetails[food.name] || food;
  const pantryStaples = new Set(["g", "kg", "ml", "su", "bardagi", "yemek", "tatlı", "kaşığı", "küçük", "buyuk", "az", "baharat", "karabiber", "kekik", "limon", "sos", "sosu", "zeytinyağı", "yesillik"]);
  return [...new Set((details.ingredients || [])
    .flatMap((item) => normalizeText(item).split(/[^a-z0-9]+/))
    .filter((item) => item.length > 2 && !pantryStaples.has(item)))];
}

function findPantryRecipe(available) {
  const normalizedAvailable = available.map(normalizeText);
  const recipes = [...pantryRecipes, ...(profile.recommendations || []), ...catalogRecipes];
  const scored = recipes
    .map((food) => {
      const coreTerms = getRecipeCoreTerms(food);
      const matchedItems = coreTerms.filter((term) => normalizedAvailable.some((item) => item === term || term.includes(item) || item.includes(term)));
      const missingItems = coreTerms.filter((term) => !matchedItems.includes(term));
      const isSpecialPantryRecipe = Boolean(food.pantryCore);
      const hasEnoughMatch = isSpecialPantryRecipe
        ? missingItems.length === 0
        : matchedItems.length >= 2 && missingItems.length <= 1;
      return { food, score: matchedItems.length - missingItems.length, hasEnoughMatch };
    })
    .filter((item) => item.hasEnoughMatch)
    .sort((a, b) => b.score - a.score);

  return scored[0]?.food || null;
}

function buildPantryRecipe(available) {
  const uniqueItems = [...new Set(available.map(normalizePantryTerm))];
  const proteinTerms = ["kiyma", "tavuk", "hindi", "yumurta", "balik", "somon", "ton", "yogurt", "peynir", "nohut", "mercimek", "fasulye"];
  const proteins = uniqueItems.filter((item) => proteinTerms.includes(item));
  const vegetables = uniqueItems.filter((item) => !proteinTerms.includes(item));
  const mainProtein = proteins[0] || "sebze";
  const mainItems = [...proteins, ...vegetables];
  const displayItems = mainItems.map(displayIngredient);
  const vegetableTitle = vegetables.slice(0, 3).map(titleIngredient).join(" ");
  const proteinTitle = mainProtein === "sebze" ? "Sebzeli" : `${titleIngredient(mainProtein)}li`;
  const method = proteins.length ? (vegetables.includes("patates") || vegetables.includes("karnabahar") ? "Tencere Yemeği" : "Sote") : (vegetables.includes("karnabahar") || vegetables.includes("brokoli") ? "Fırın" : "Sebze Sote");
  const name = `${proteinTitle} ${vegetableTitle || "Dolap"} ${method}`.replace(/\s+/g, " ").trim();
  const calories = Math.min(620, 240 + proteins.length * 120 + vegetables.length * 45 + (vegetables.includes("patates") ? 90 : 0));
  const protein = proteins.includes("kiyma") ? 30 : proteins.includes("tavuk") || proteins.includes("hindi") ? 36 : proteins.length ? 18 + proteins.length * 5 : 8;
  const carbs = vegetables.includes("patates") ? 42 : 16 + vegetables.length * 6;
  const fat = proteins.includes("kiyma") ? 22 : proteins.length ? 14 : 9;
  const ingredients = [...displayItems, "az su", "baharat", "varsa 1 tatlı kaşığı zeytinyağı"];
  const prepVegetables = vegetables.length ? `${vegetables.map(displayIngredient).join(", ")} malzemelerini doğra.` : "Sebzeleri doğra.";
  const cookProtein = mainProtein === "kiyma"
    ? "Kıymayı tavada suyunu çekene kadar pişir."
    : mainProtein === "tavuk" || mainProtein === "hindi"
      ? `${displayIngredient(mainProtein)} etini küçük parçalara ayırip tavada pişir.`
      : proteins.length
        ? `${proteins.map(displayIngredient).join(", ")} malzemesini tavaya veya tencereye al.`
        : "Sebzeleri tavaya veya fırın kabına al.";
  const combineStep = method.includes("Fırın")
    ? "Tüm malzemeleri fırın kabına al, az zeytinyağı ve baharatla 180 derecede yumuşayana kadar pişir."
    : method.includes("Tencere")
      ? "Sebzeleri ekle, az su ilave et ve kısık ateşte yumuşayana kadar pişir."
      : "Sebzeleri ekle, baharatla birlikte orta ateşte yumuşayana kadar sotele.";

  return {
    name,
    note: `Dolabında yazdığın ${displayItems.join(", ")} ile ekstra ana malzeme gerektirmeden oluşturulan tarif.`,
    calories,
    protein,
    carbs,
    fat,
    time: method.includes("Fırın") ? 30 : 22,
    pantryCore: uniqueItems,
    ingredients,
    steps: [prepVegetables, cookProtein, combineStep, "Tadım yapıp sıcak servis et."]
  };
}
function labelGoal(goal) {
  const labels = {
    "weight-loss": "Kilo vermek",
    muscle: "Protein ağırlıklı beslenmek",
    balanced: "Dengeli beslenmek",
    "low-carb": "Karbonhidratı azaltmak"
  };
  const goals = Array.isArray(goal) ? goal : [goal].filter(Boolean);
  return goals.length ? goals.map((item) => labels[item] || item).join(", ") : "Belirtilmedi";
}

function labelActivity(activity) {
  return { low: "Az hareketli", medium: "Orta hareketli", high: "Çok hareketli" }[activity] || "Belirtilmedi";
}

function listOrEmpty(items, other) {
  const list = [...(items || [])];
  if (other) list.push(`Diğer: ${other}`);
  return list.length ? list.join(", ") : "Belirtilmedi";
}

function renderRecipeCards(recommendations = []) {
  if (!recommendations.length) {
    return `<div class="empty">Bu profile uygun tarif bulamadık. Bilgileri güncelleyip tekrar analiz yapalim.</div>`;
  }

  return recommendations.map((food) => `
    <article class="suggestion-card profile-recipe-card" data-recipe-name="${food.name}">
      <h3>${food.name}</h3>
      <p>${food.note}</p>
      <div class="recipe-meta">
        <span>${food.calories} kcal</span>
        <span>${food.protein} g protein</span>
        <span>${food.carbs} g karbonhidrat</span>
        <span>${food.fat} g yağ</span>
        <span>${food.time} dk</span>
      </div>
    </article>
  `).join("");
}

if (!profile) {
  profilePage.innerHTML = `
    <div class="member-results profile-empty">
      <p class="eyebrow compact">Profil bulunamadı</p>
      <h1>Önce üyelik ve profil botunu tamamlayalım.</h1>
      <p>Profil sayfası, üyelikten sonra doldurduğun bilgilere göre hazırlanır.</p>
      <a class="primary-link" href="uyelik.html">Üyelik sayfasına git</a>
    </div>
  `;
} else {
  const weeklyChange = localStorage.getItem("fitTariflerWeeklyChange") || "Henüz girilmedi";

  profilePage.innerHTML = `
    <section class="profile-dashboard">
      <div class="profile-main-panel">
        <div class="profile-hero-card compact-profile-hero">
          <p class="eyebrow compact">Kişisel yemek listesi</p>
          <h1>Bu haftanın sana uygun tarifleri</h1>
          <p>Hedeflerine, hassasiyetlerine ve yemeyi tercih etmediğin yiyeceklere göre hazırlanan liste.</p>
          <div class="profile-summary">
            <span>Hedef: ${labelGoal(profile.goal)}</span>
            <span>Günlük hedef: ${profile.calorieTarget} kcal</span>
            <span>BKI: ${profile.bmi.toFixed(1)}</span>
            <span>Aktivite: ${labelActivity(profile.activity)}</span>
          </div>
          <p class="warning-note">Kronik rahatsızlıklariniz veya alerjik reaksiyon riskleriniz olabileceği için, yemek tariflerini denemeden önce lütfen doktorunuzla ya da diyetisyeninizle görüşünüz. Bu öneriler tibbi tavsiye yerine geçmez.</p>
        </div>

        <div class="profile-recommendations panel-block">
          <div class="section-title"><h2>Haftalık önerilen tarifler</h2></div>
          <div class="weekly-recipe-layout">
            <div class="suggestion-list weekly-recipe-list">
              ${renderRecipeCards(profile.recommendations)}
            </div>
            <aside class="recipe-detail-pane" id="recipe-detail-pane">
              <p class="eyebrow compact">Tarif detayı</p>
              <h2>Bir tarif seç</h2>
              <p>Soldaki haftalık tariflerden birine tıklayınca malzemeler ve hazırlanış burada görünecek.</p>
            </aside>
          </div>
        </div>
      </div>

      <aside class="profile-side-panel">
        <section class="profile-mini-card">
          <p class="eyebrow compact">Profil</p>
          <h2>${profile.memberName}</h2>
          <p>${profile.email}</p>
          <p>Yaş: ${profile.age || "-"}</p>
          <p>Boy: ${profile.height || "-"} cm</p>
          <p>Kilo: ${profile.weight || "-"} kg</p>
        </section>

        <section class="profile-mini-card weekly-card">
          <p class="eyebrow compact">Haftalık takip</p>
          <p class="weekly-value">Son giriş: <strong id="weekly-change-value">${weeklyChange}</strong></p>
          <button class="secondary-link full-width" id="weekly-change-button" type="button">Haftalık kilo değişimini yaz</button>
          <form class="weekly-form hidden" id="weekly-form">
            <input id="weekly-change-input" type="text" placeholder="Örnek: -0.7 kg veya +0.3 kg" />
            <button class="primary-link full-width" type="submit">Kaydet ve listeyi yenile</button>
          </form>
        </section>

        <section class="profile-mini-card profile-accordions">
          <details>
            <summary>Kronik rahatsızlıklar</summary>
            <p>${listOrEmpty(profile.conditions, profile.conditionsOther)}</p>
          </details>
          <details>
            <summary>Alerjiler</summary>
            <p>${listOrEmpty(profile.allergies, profile.allergiesOther)}</p>
          </details>
          <details>
            <summary>Yemedikleri</summary>
            <p>${listOrEmpty(profile.diet, profile.dietOther)}</p>
          </details>
        </section>

        <section class="profile-actions">
          <a class="secondary-link full-width" href="tarifler.html">Tüm tarifler</a>
          <button class="secondary-link full-width" id="new-analysis" type="button">Yeni analiz yap</button>
          <button class="secondary-link full-width" id="pantry-button" type="button">Dolap Asistanı</button>
          <form class="pantry-form hidden" id="pantry-form">
            <label>Dolabında neler var?
              <textarea id="pantry-input" placeholder="Örnek: tavuk, yoğurt, kabak, yumurta"></textarea>
            </label>
            <button class="primary-link full-width" id="pantry-submit" type="submit">Günlük tarif çıkar</button>
          </form>
          <div class="pantry-result hidden" id="pantry-result"></div>
          <button class="secondary-link full-width danger-action" id="logout" type="button">Çıkış yap</button>
        </section>
      </aside>
    </section>
  `;

  document.querySelectorAll(".profile-recipe-card").forEach((card) => {
    card.addEventListener("click", () => showRecipeDetail(card.dataset.recipeName));
  });

  document.querySelector("#pantry-result").addEventListener("click", (event) => {
    const button = event.target.closest(".pantry-recipe-link");
    if (!button) return;
    showRecipeDetail(button.dataset.recipeName);
  });

  document.querySelector("#weekly-change-button").addEventListener("click", () => {
    document.querySelector("#weekly-form").classList.toggle("hidden");
  });

  document.querySelector("#weekly-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const value = document.querySelector("#weekly-change-input").value.trim();
    if (!value) return;
    localStorage.setItem("fitTariflerWeeklyChange", value);
    document.querySelector("#weekly-change-value").textContent = value;
    document.querySelector("#weekly-form").classList.add("hidden");
  });


  document.querySelector("#pantry-button").addEventListener("click", () => {
    document.querySelector("#pantry-form").classList.toggle("hidden");
  });

  document.querySelector("#pantry-input").addEventListener("input", () => {
    const result = document.querySelector("#pantry-result");
    result.classList.add("hidden");
    result.innerHTML = "";
    document.querySelector("#pantry-submit").textContent = "Günlük tarifi tekrar çıkar";
  });

  document.querySelector("#pantry-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#pantry-input").value;
    const result = document.querySelector("#pantry-result");
    const available = parsePantryInput(input);

    if (!available.length) {
      result.classList.remove("hidden");
      result.textContent = "Önce dolabındaki malzemeleri yaz, sonra günlük tarifi çıkaralım.";
      return;
    }

    const matched = findPantryRecipe(available) || buildPantryRecipe(available);
    generatedPantryRecipes = matched ? [matched] : [];

    result.classList.remove("hidden");
    result.innerHTML = matched
      ? `<button class="pantry-recipe-link" type="button" data-recipe-name="${matched.name}"><strong>Bugün için önerim:</strong><br>${matched.name}<br><span>${matched.calories} kcal - ${matched.protein} g protein</span></button>`
      : "Elindeki malzemelere göre net bir eşleşme bulamadım. Biraz daha malzeme yazmayı dene.";

    document.querySelector("#pantry-submit").textContent = "Günlük tarifi tekrar çıkar";

    if (matched) {
      showRecipeDetail(matched.name);
    }
  });
  document.querySelector("#new-analysis").addEventListener("click", () => {
    sessionStorage.setItem("startProfileWizard", "1");
    window.location.href = "uyelik.html";
  });

  document.querySelector("#logout").addEventListener("click", async () => {
    if (window.fitFirebase?.enabled) {
      await window.fitFirebase.signOut();
    }
    localStorage.removeItem("fitTariflerMember");
    localStorage.removeItem("fitTariflerProfile");
    localStorage.removeItem("fitTariflerWeeklyChange");
    window.location.href = "index.html";
  });
}

















