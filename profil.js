const profilePage = document.querySelector("#profile-page");
const profile = JSON.parse(localStorage.getItem("fitTariflerProfile") || "null");
const catalogRecipes = window.fitRecipeCatalog || [];
const recipeDetails = {
  "Tavuklu Kinoa Salatasi": {
    ingredients: ["120 g izgara tavuk", "80 g haslanmis kinoa", "Marul", "Salatalik", "Limonlu sos"],
    steps: ["Sebzeleri dogra.", "Kinoa ve tavugu ekle.", "Limonlu sosu gezdir.", "Karistirip soguk servis et."]
  },
  "Kabak Spagetti Tavuklu": {
    ingredients: ["2 kabak", "120 g tavuk gogsu", "Domates sosu", "Sarmisak", "Feslegen"],
    steps: ["Kabaklari ince seritler halinde kes.", "Tavugu tavada pisir.", "Domates sosunu ekle.", "Kabaklari son 3 dakika tavaya al."]
  },
  "Somon ve Firin Sebze": {
    ingredients: ["140 g somon", "Brokoli", "Kabak", "Havuc", "Limon", "Dereotu"],
    steps: ["Sebzeleri zeytinyagi ile harmanla.", "Somonu limon ve dereotu ile tatlandir.", "Hepsini firinda pisir.", "Sicak servis et."]
  },
  "Mercimekli Sebze Corbasi": {
    ingredients: ["Kirmizi mercimek", "Havuc", "Kabak", "Sogan", "Kimyon", "Zerdecal"],
    steps: ["Sebzeleri dogra ve tencerede cevir.", "Mercimek ve su ekle.", "Baharatlarla pisir.", "Blenderdan gecir."]
  },
  "Nohutlu Ton Baligi Kasesi": {
    ingredients: ["1 kutu ton baligi", "Haslanmis nohut", "Marul", "Misir", "Limon", "Maydanoz"],
    steps: ["Nohudu sudan gecir.", "Ton baligi ve sebzeleri kaseye al.", "Limon ve maydanoz ekle.", "Karistirip servis et."]
  },
  "Karnabahar Pilavi Tavuklu": {
    ingredients: ["Karnabahar", "120 g tavuk", "Bezelye", "Havuc", "Soya sosu", "Taze sogan"],
    steps: ["Karnabahari rondodan gecir.", "Tavugu pisir.", "Sebzeleri ekle.", "Karnabahari son 5 dakika tavada cevir."]
  },
  "Bulgurlu Yogurtlu Semizotu": {
    ingredients: ["Semizotu", "Haslanmis bulgur", "Suzme yogurt", "Nane", "Salatalik"],
    steps: ["Semizotunu yika ve ayikla.", "Yogurt, nane ve salataligi karistir.", "Bulguru ekle.", "Semizotu ile birlestir."]
  },
  "Protein Omlet Bowl": {
    ingredients: ["3 yumurta", "60 g lor peyniri", "Ispanak", "Cherry domates", "Zeytinyagi"],
    steps: ["Ispanagi tavada hafif sotele.", "Yumurtayi lor peyniriyle cirp.", "Karisimi tavaya al ve kisik ateste pisir.", "Domatesle servis et."]
  },
  "Peynirli Roka Salatasi": {
    ingredients: ["Roka", "60 g beyaz peynir", "Domates", "Ceviz", "Limon", "Zeytinyagi"],
    steps: ["Rokayi yika.", "Peynir ve domatesi ekle.", "Cevizi serp.", "Limonlu sosla karistir."]
  },
  "Hindi Kofteli Salata Tabagi": {
    ingredients: ["140 g hindi kiyma", "Marul", "Kirmizi lahana", "Salatalik", "Yogurtlu sos", "Kimyon"],
    steps: ["Hindi kiymayi baharatla yogur.", "Kucuk kofteler yap ve pisir.", "Sebzeleri tabaga al.", "Kofteleri ve yogurtlu sosu ekle."]
  }
};

const pantryRecipes = [
  {
    name: "Tavuklu Kapya Biber Havuclu Sote",
    note: "Dolabinda tavuk, biber ve havuc varsa pratik, proteinli bir gunluk tabak.",
    calories: 390,
    protein: 39,
    carbs: 24,
    fat: 15,
    time: 25,
    keywords: ["tavuk", "kapya", "biber", "havuc", "havuç", "sote"],
    pantryCore: ["tavuk", "biber", "havuc"],
    ingredients: ["120 g tavuk", "1 kapya biber", "1 havuc", "1 tatli kasigi zeytinyagi", "Karabiber", "Kekik"],
    steps: ["Tavugu kusbasi dogra ve tavada zeytinyagi ile pisir.", "Kapya biberi ve havucu ince dogra.", "Sebzeleri tavuga ekleyip 8-10 dakika sotele.", "Baharat ekleyip sicak servis et."]
  },
  {
    name: "Patates Bezelye Yemegi",
    note: "Dolabinda patates ve bezelye varsa etsiz, sade ve hafif bir sebze yemegi.",
    calories: 315,
    protein: 10,
    carbs: 48,
    fat: 9,
    time: 28,
    keywords: ["patates", "bezelye", "sebze", "etsiz"],
    pantryCore: ["patates", "bezelye"],
    ingredients: ["2 kucuk patates", "1 su bardagi bezelye", "1 kucuk sogan", "1 tatli kasigi zeytinyagi", "Domates sosu", "Karabiber"],
    steps: ["Patatesleri kup kup dogra.", "Sogani zeytinyaginda hafifce cevir.", "Patates ve bezelyeyi ekleyip uzerini gececek kadar su koy.", "Domates sosu ve baharat ekleyip patates yumusayana kadar pisir."]
  },
  {
    name: "Kiymali Patlican Kabak Sote",
    note: "Kiyma, patlican, kabak ve kapya biberle hazirlanan doyurucu bir tava yemegi.",
    calories: 455,
    protein: 34,
    carbs: 28,
    fat: 23,
    time: 32,
    keywords: ["kiyma", "kıyma", "patlican", "patlıcan", "kabak", "kapya", "biber", "sote"],
    pantryCore: ["kiyma", "patlican", "kabak", "biber"],
    ingredients: ["120 g kiyma", "1 patlican", "1 kabak", "1 kapya biber", "1 tatli kasigi zeytinyagi", "Karabiber", "Kekik"],
    steps: ["Patlicani, kabagi ve kapya biberi dogra.", "Kiymayi tavada suyunu cekene kadar pisir.", "Sebzeleri ekleyip kisik ateste yumusayana kadar sotele.", "Baharat ekleyip sicak servis et."]
  },
  {
    name: "Kiymali Patlican Patates Yemegi",
    note: "Dolabinda kiyma, patlican ve patates varsa tencerede yapabilecegin doyurucu bir ana yemek.",
    calories: 480,
    protein: 32,
    carbs: 42,
    fat: 22,
    time: 35,
    keywords: ["kiyma", "kıyma", "patlican", "patlıcan", "patates", "tencere", "yemek"],
    pantryCore: ["kiyma", "patlican", "patates"],
    ingredients: ["120 g kiyma", "1 patlican", "1 kucuk patates", "1 kucuk sogan", "Domates sosu", "1 tatli kasigi zeytinyagi", "Karabiber"],
    steps: ["Patlicani ve patatesi kup kup dogra.", "Sogani zeytinyaginda cevirip kiymayi ekle ve suyunu cekene kadar pisir.", "Patates ve patlicani tencereye al, domates sosu ve az su ekle.", "Sebzeler yumusayana kadar kisik ateste pisirip sicak servis et."]
  },
  {
    name: "Karnabahar Brokoli Firin",
    note: "Dolabinda karnabahar ve brokoli varsa hafif, doyurucu bir firin tabagi.",
    calories: 320,
    protein: 18,
    carbs: 26,
    fat: 14,
    time: 30,
    keywords: ["karnabahar", "karnibahar", "brokoli", "yogurt", "yumurta", "lor", "peynir"],
    pantryCore: ["karnabahar", "brokoli"],
    ingredients: ["Karnabahar", "Brokoli", "3 yemek kasigi suzme yogurt", "1 yumurta", "40 g lor peyniri", "1 tatli kasigi zeytinyagi"],
    steps: ["Karnabahar ve brokoliyi hafif hasla.", "Yogurt, yumurta, lor ve zeytinyagini karistir.", "Sebzeleri firin kabina al ve sosu uzerine gezdir.", "180 derecede 20 dakika pisir."]
  },
  {
    name: "Brokolili Yogurtlu Kase",
    note: "Brokoli, yogurt ve yumurta ile hizli bir gunluk tabak.",
    calories: 280,
    protein: 21,
    carbs: 18,
    fat: 12,
    time: 18,
    keywords: ["brokoli", "yogurt", "yumurta", "lor", "peynir"],
    pantryCore: ["brokoli", "yogurt"],
    ingredients: ["Brokoli", "Suzme yogurt", "1 haslanmis yumurta", "Nane", "Limon", "Az zeytinyagi"],
    steps: ["Brokoliyi buharda pisir.", "Yogurdu nane ve limonla karistir.", "Yumurtayi dilimle.", "Hepsini kaseye al ve az zeytinyagi ekle."]
  }
];

function renderRecipeDetail(food) {
  const details = recipeDetails[food.name] || food || { ingredients: ["Malzeme bilgisi yakinda eklenecek."], steps: ["Hazirlanis bilgisi yakinda eklenecek."] };
  return `
    <p class="eyebrow compact">Tarif detayi</p>
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
      <h3>Hazirlanis</h3>
      <ol>${details.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </div>
  `;
}

function showRecipeDetail(foodName) {
  const food = [...(profile.recommendations || []), ...pantryRecipes, ...catalogRecipes].find((item) => item.name === foodName);
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
  const pantryStaples = new Set(["g", "kg", "ml", "su", "bardagi", "yemek", "tatli", "kasigi", "kucuk", "buyuk", "az", "baharat", "karabiber", "kekik", "limon", "sos", "sosu", "zeytinyagi", "yesillik"]);
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
function labelGoal(goal) {
  const labels = {
    "weight-loss": "Kilo vermek",
    muscle: "Protein agirlikli beslenmek",
    balanced: "Dengeli beslenmek",
    "low-carb": "Karbonhidrati azaltmak"
  };
  const goals = Array.isArray(goal) ? goal : [goal].filter(Boolean);
  return goals.length ? goals.map((item) => labels[item] || item).join(", ") : "Belirtilmedi";
}

function labelActivity(activity) {
  return { low: "Az hareketli", medium: "Orta hareketli", high: "Cok hareketli" }[activity] || "Belirtilmedi";
}

function listOrEmpty(items, other) {
  const list = [...(items || [])];
  if (other) list.push(`Diger: ${other}`);
  return list.length ? list.join(", ") : "Belirtilmedi";
}

function renderRecipeCards(recommendations = []) {
  if (!recommendations.length) {
    return `<div class="empty">Bu profile uygun tarif bulamadik. Bilgileri guncelleyip tekrar analiz yapalim.</div>`;
  }

  return recommendations.map((food) => `
    <article class="suggestion-card profile-recipe-card" data-recipe-name="${food.name}">
      <h3>${food.name}</h3>
      <p>${food.note}</p>
      <div class="recipe-meta">
        <span>${food.calories} kcal</span>
        <span>${food.protein} g protein</span>
        <span>${food.carbs} g karbonhidrat</span>
        <span>${food.fat} g yag</span>
        <span>${food.time} dk</span>
      </div>
    </article>
  `).join("");
}

if (!profile) {
  profilePage.innerHTML = `
    <div class="member-results profile-empty">
      <p class="eyebrow compact">Profil bulunamadi</p>
      <h1>Once uyelik ve profil botunu tamamlayalim.</h1>
      <p>Profil sayfasi, uyelikten sonra doldurdugun bilgilere gore hazirlanir.</p>
      <a class="primary-link" href="uyelik.html">Uyelik sayfasina git</a>
    </div>
  `;
} else {
  const weeklyChange = localStorage.getItem("fitTariflerWeeklyChange") || "Henuz girilmedi";

  profilePage.innerHTML = `
    <section class="profile-dashboard">
      <div class="profile-main-panel">
        <div class="profile-hero-card compact-profile-hero">
          <p class="eyebrow compact">Kisisel yemek listesi</p>
          <h1>Bu haftanin sana uygun tarifleri</h1>
          <p>Hedeflerine, hassasiyetlerine ve yemeyi tercih etmedigin yiyeceklere gore hazirlanan liste.</p>
          <div class="profile-summary">
            <span>Hedef: ${labelGoal(profile.goal)}</span>
            <span>Gunluk hedef: ${profile.calorieTarget} kcal</span>
            <span>BKI: ${profile.bmi.toFixed(1)}</span>
            <span>Aktivite: ${labelActivity(profile.activity)}</span>
          </div>
          <p class="warning-note">Kronik rahatsizliklariniz veya alerjik reaksiyon riskleriniz olabilecegi icin, yemek tariflerini denemeden once lutfen doktorunuzla ya da diyetisyeninizle gorusunuz. Bu oneriler tibbi tavsiye yerine gecmez.</p>
        </div>

        <div class="profile-recommendations panel-block">
          <div class="section-title"><h2>Haftalik onerilen tarifler</h2></div>
          <div class="weekly-recipe-layout">
            <div class="suggestion-list weekly-recipe-list">
              ${renderRecipeCards(profile.recommendations)}
            </div>
            <aside class="recipe-detail-pane" id="recipe-detail-pane">
              <p class="eyebrow compact">Tarif detayi</p>
              <h2>Bir tarif sec</h2>
              <p>Soldaki haftalik tariflerden birine tiklayinca malzemeler ve hazirlanis burada gorunecek.</p>
            </aside>
          </div>
        </div>
      </div>

      <aside class="profile-side-panel">
        <section class="profile-mini-card">
          <p class="eyebrow compact">Profil</p>
          <h2>${profile.memberName}</h2>
          <p>${profile.email}</p>
          <p>Yas: ${profile.age || "-"}</p>
          <p>Boy: ${profile.height || "-"} cm</p>
          <p>Kilo: ${profile.weight || "-"} kg</p>
        </section>

        <section class="profile-mini-card weekly-card">
          <p class="eyebrow compact">Haftalik takip</p>
          <p class="weekly-value">Son giris: <strong id="weekly-change-value">${weeklyChange}</strong></p>
          <button class="secondary-link full-width" id="weekly-change-button" type="button">Haftalik kilo degisimini yaz</button>
          <form class="weekly-form hidden" id="weekly-form">
            <input id="weekly-change-input" type="text" placeholder="Ornek: -0.7 kg veya +0.3 kg" />
            <button class="primary-link full-width" type="submit">Kaydet ve listeyi yenile</button>
          </form>
        </section>

        <section class="profile-mini-card profile-accordions">
          <details>
            <summary>Kronik rahatsizliklar</summary>
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
          <a class="secondary-link full-width" href="tarifler.html">Tum tarifler</a>
          <button class="secondary-link full-width" id="new-analysis" type="button">Yeni analiz yap</button>
          <button class="secondary-link full-width" id="pantry-button" type="button">Dolap Asistani</button>
          <form class="pantry-form hidden" id="pantry-form">
            <label>Dolabinda neler var?
              <textarea id="pantry-input" placeholder="Ornek: tavuk, yogurt, kabak, yumurta"></textarea>
            </label>
            <button class="primary-link full-width" id="pantry-submit" type="submit">Gunluk tarif cikar</button>
          </form>
          <div class="pantry-result hidden" id="pantry-result"></div>
          <button class="secondary-link full-width danger-action" id="logout" type="button">Cikis yap</button>
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
    document.querySelector("#pantry-submit").textContent = "Gunluk tarifi tekrar cikar";
  });

  document.querySelector("#pantry-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#pantry-input").value;
    const result = document.querySelector("#pantry-result");
    const available = parsePantryInput(input);

    if (!available.length) {
      result.classList.remove("hidden");
      result.textContent = "Once dolabindaki malzemeleri yaz, sonra gunluk tarifi cikaralim.";
      return;
    }

    const matched = findPantryRecipe(available);

    result.classList.remove("hidden");
    result.innerHTML = matched
      ? `<button class="pantry-recipe-link" type="button" data-recipe-name="${matched.name}"><strong>Bugun icin onerim:</strong><br>${matched.name}<br><span>${matched.calories} kcal - ${matched.protein} g protein</span></button>`
      : "Elindeki malzemelere gore net bir eslesme bulamadim. Biraz daha malzeme yazmayi dene.";

    document.querySelector("#pantry-submit").textContent = "Gunluk tarifi tekrar cikar";

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
















