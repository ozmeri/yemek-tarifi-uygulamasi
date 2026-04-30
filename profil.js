const profilePage = document.querySelector("#profile-page");
const profile = JSON.parse(localStorage.getItem("fitTariflerProfile") || "null");
const catalogRecipes = window.fitRecipeCatalog || [];
let generatedPantryRecipes = [];
let generatedDailyMeals = [];
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
    <p class="eyebrow compact">${food.mealType === "Ara öğün" ? "Öğün detayı" : "Tarif detayı"}</p>
    <h2>${food.name}</h2>
    <p>${food.note}</p>
    <div class="recipe-meta detail-meta-row">
      <span>${food.calories} kcal</span>
      <span>${food.protein} g protein</span>
      <span>${food.time} dk</span>
    </div>
    <div class="detail-section compact-detail-section">
      <h3>${food.mealType === "Ara öğün" ? "Tüketilecekler" : "Malzemeler"}</h3>
      <ul>${details.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="detail-section compact-detail-section">
      <h3>${food.mealType === "Ara öğün" ? "Nasıl tüketilir" : "Hazırlanış"}</h3>
      <ol>${details.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </div>
  `;
}

function showRecipeDetail(foodName) {
  const food = [...generatedDailyMeals, ...generatedPantryRecipes, ...(profile.filteredRecommendations || profile.recommendations || []), ...pantryRecipes, ...catalogRecipes].find((item) => item.name === foodName);
  if (!food || hasUserBlockedFood(food, profile.dietOther)) return;
  document.querySelector("#recipe-detail-pane").innerHTML = renderRecipeDetail(food);
}

function normalizeText(value) {
  return String(value || "")
    .toLocaleLowerCase("tr-TR")
    .replaceAll("ı", "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function splitBlockedFoods(value) {
  const ignoredWords = new Set(["ve", "veya", "ile", "ben", "bana", "yemem", "yemiyorum", "sevmem", "istemiyorum", "alerjim", "var", "yok", "asla", "hic"]);
  return normalizeText(value)
    .split(/[^a-z0-9]+/)
    .map((item) => item.trim())
    .filter((item) => item.length > 2 && !ignoredWords.has(item));
}

function recipeSearchText(food) {
  const details = recipeDetails[food.name] || food;
  return normalizeText([food.name, food.note, ...(details.ingredients || []), ...(food.ingredients || []), ...(food.tags || [])].join(" "));
}

function hasUserBlockedFood(food, dietOther) {
  const blockedFoods = splitBlockedFoods(dietOther);
  if (!blockedFoods.length) return false;
  const text = recipeSearchText(food);
  return blockedFoods.some((word) => text.includes(word));
}

function parsePantryInput(input) {
  const normalized = normalizeText(input);
  const commonWords = new Set(["ve", "ile", "var", "bir", "az", "tane", "adet", "elimde", "dolabimda", "dolabinda", "bunlar"]);
  const phraseMap = {
    "tam buday lavas": "tam_bugday_lavas",
    "tam bugday lavas": "tam_bugday_lavas",
    "tam buday ekmegi": "tam_bugday_ekmegi",
    "tam bugday ekmegi": "tam_bugday_ekmegi",
    "suzme yogurt": "suzme_yogurt",
    "kapya biber": "kapya_biber",
    "yesil biber": "yesil_biber",
    "kirmizi biber": "kirmizi_biber",
    "kirmizi lahana": "kirmizi_lahana",
    "mor lahana": "mor_lahana",
    "yesil fasulye": "yesil_fasulye",
    "ton baligi": "ton_baligi",
    "lor peyniri": "lor_peyniri",
    "tatli patates": "tatli_patates"
  };

  const prepared = Object.entries(phraseMap)
    .sort((a, b) => b[0].length - a[0].length)
    .reduce((result, [phrase, token]) => result.replaceAll(phrase, token), normalized);

  return prepared
    .split(/[^a-z0-9_]+/)
    .map((item) => item.trim().replaceAll("_", " "))
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
    "kapya biber": "biber",
    "yesil biber": "biber",
    "kirmizi biber": "biber",
    domates: "domates",
    patates: "patates",
    "tatli patates": "tatli patates",
    yogurt: "yogurt",
    "suzme yogurt": "yogurt",
    sogan: "sogan",
    "ton baligi": "ton",
    "lor peyniri": "peynir",
    "mor lahana": "lahana",
    "kirmizi lahana": "lahana",
    "yesil fasulye": "yesil fasulye",
    "tam buday lavas": "tam bugday lavas",
    "tam buday ekmegi": "tam bugday ekmegi"
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
    "tatli patates": "tatlı patates",
    havuc: "havuç",
    biber: "biber",
    bezelye: "bezelye",
    mantar: "mantar",
    ispanak: "ıspanak",
    domates: "domates",
    sogan: "soğan",
    nohut: "nohut",
    mercimek: "mercimek",
    fasulye: "fasulye",
    "yesil fasulye": "yeşil fasulye",
    "tam bugday lavas": "tam buğday lavaş",
    "tam bugday ekmegi": "tam buğday ekmeği"
  };
  return labels[term] || term;
}

function titleIngredient(term) {
  const label = displayIngredient(term);
  return label
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function proteinStyleTitle(term) {
  const labels = {
    sebze: "Sebzeli",
    kiyma: "Kıymalı",
    tavuk: "Tavuklu",
    hindi: "Hindili",
    yumurta: "Yumurtalı",
    balik: "Balıklı",
    ton: "Ton balıklı",
    somon: "Somonlu",
    yogurt: "Yoğurtlu",
    peynir: "Peynirli",
    nohut: "Nohutlu",
    mercimek: "Mercimekli",
    fasulye: "Fasulyeli"
  };
  return labels[term] || `${titleIngredient(term)}li`;
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
  const recipes = [...pantryRecipes, ...(profile.filteredRecommendations || profile.recommendations || []), ...catalogRecipes];
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
  const carbTerms = ["tam bugday lavas", "tam bugday ekmegi", "tatli patates", "patates", "bulgur", "kinoa", "yulaf", "esmer pirinc"];
  const proteins = uniqueItems.filter((item) => proteinTerms.includes(item));
  const carbsPantry = uniqueItems.filter((item) => carbTerms.includes(item));
  const vegetables = uniqueItems.filter((item) => !proteinTerms.includes(item) && !carbTerms.includes(item));
  const wrapBase = carbsPantry.find((item) => item === "tam bugday lavas" || item === "tam bugday ekmegi");
  const mainProtein = proteins[0] || "sebze";
  const mainItems = [...proteins, ...vegetables, ...carbsPantry];
  const displayItems = mainItems.map(displayIngredient);
  const vegetableTitle = vegetables.slice(0, 2).map(titleIngredient).join(" ");
  const carbTitle = carbsPantry.filter((item) => item !== wrapBase).slice(0, 1).map(titleIngredient).join(" ");
  const detailTitle = [vegetableTitle, carbTitle].filter(Boolean).join(" ");
  const proteinTitle = proteinStyleTitle(mainProtein);
  const method = wrapBase
    ? "Wrap"
    : proteins.length
      ? (carbsPantry.includes("patates") || carbsPantry.includes("tatli patates") || vegetables.includes("karnabahar") ? "Tencere Yemeği" : "Sote")
      : (vegetables.includes("karnabahar") || vegetables.includes("brokoli") ? "Fırın" : "Sebze Sote");
  const name = `${proteinTitle} ${detailTitle || "Dolap"} ${method}`.replace(/\s+/g, " ").trim();
  const calories = Math.min(680, 220 + proteins.length * 120 + vegetables.length * 40 + carbsPantry.length * 70);
  const protein = proteins.includes("kiyma") ? 30 : proteins.includes("tavuk") || proteins.includes("hindi") ? 36 : proteins.length ? 18 + proteins.length * 5 : 8;
  const carbs = carbsPantry.length * 18 + vegetables.length * 5 + (wrapBase ? 12 : 0);
  const fat = proteins.includes("kiyma") ? 22 : proteins.length ? 14 : 9;
  const ingredients = [...displayItems, "baharat", wrapBase ? "varsa yoğurtlu sos" : "varsa 1 tatlı kaşığı zeytinyağı"];
  const prepVegetables = vegetables.length ? `${vegetables.map(displayIngredient).join(", ")} malzemelerini doğra.` : "Sebzeleri hazırlayıp küçük parçalara ayır.";
  const cookProtein = mainProtein === "kiyma"
    ? "Kıymayı tavada suyunu çekene kadar pişir."
    : mainProtein === "tavuk" || mainProtein === "hindi"
      ? `${displayIngredient(mainProtein)} etini küçük parçalara ayırıp tavada pişir.`
      : proteins.length
        ? `${proteins.map(displayIngredient).join(", ")} malzemesini tavaya veya tencereye al.`
        : method.includes("Fırın")
          ? "Sebzeleri fırın kabına al."
          : "Sebzeleri tavaya al.";

  let combineStep = "Sebzeleri ekle, baharatla birlikte orta ateşte yumuşayana kadar sotele.";
  if (method.includes("Fırın")) {
    combineStep = "Tüm malzemeleri fırın kabına al, az zeytinyağı ve baharatla 180 derecede yumuşayana kadar pişir.";
  } else if (method.includes("Tencere")) {
    combineStep = "Sebzeleri ve karbonhidrat grubunu ekle, az su ilave et ve kısık ateşte yumuşayana kadar pişir.";
  } else if (method === "Wrap") {
    const wrapLabel = displayIngredient(wrapBase);
    combineStep = `${wrapLabel} içine pişen malzemeleri yerleştir, istersen yoğurtlu sos ekleyip sar.`;
  }

  return {
    name,
    note: `Dolabında yazdığın ${displayItems.join(", ")} ile ekstra ana malzeme gerektirmeden oluşturulan tarif.`,
    calories,
    protein,
    carbs,
    fat,
    time: method.includes("Fırın") ? 30 : method === "Wrap" ? 18 : 22,
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

function getTodayLabel() {
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date());
}

function getDaySeed() {
  const now = new Date();
  return Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 86400000);
}

function uniqueRecipesByName(recipes = []) {
  const seen = new Set();
  return recipes.filter((food) => {
    if (!food?.name || seen.has(food.name)) return false;
    seen.add(food.name);
    return true;
  });
}

function isBreakfastRecipe(food) {
  const text = getRecipeSearchText(food);
  return ["yumurta", "omlet", "peynir", "lor", "yogurt", "yulaf", "kahvalti"].some((item) => text.includes(item))
    || (food.calories <= 380 && food.protein >= 10 && food.carbs <= 35);
}

function isSnackRecipe(food) {
  const text = getRecipeSearchText(food);
  return ["yogurt", "kase", "salata", "roka", "semizotu", "corba", "smoothie"].some((item) => text.includes(item))
    || food.calories <= 320;
}

function pickRotatingRecipe(pool, seed, usedNames, fallbackPool = []) {
  const uniquePool = uniqueRecipesByName([...pool, ...fallbackPool]);
  const freshPool = uniquePool.filter((food) => !usedNames.has(food.name));
  const targetPool = freshPool.length ? freshPool : uniquePool;
  if (!targetPool.length) return null;
  const choice = targetPool[((seed % targetPool.length) + targetPool.length) % targetPool.length];
  usedNames.add(choice.name);
  return choice;
}

function profileTokenSet(...values) {
  return new Set(values
    .flatMap((value) => Array.isArray(value) ? value : [value])
    .map((item) => normalizeText(item))
    .flatMap((item) => item.split(/[^a-z0-9]+/))
    .filter((item) => item.length > 2));
}

function snackScore(snack, preferences) {
  let score = 0;

  if (preferences.goals.has("weight-loss")) {
    score += snack.calories <= 150 ? 4 : 1;
    score += snack.protein >= 6 ? 2 : 0;
  }
  if (preferences.goals.has("muscle")) {
    score += snack.protein >= 8 ? 4 : snack.protein >= 5 ? 2 : 0;
  }
  if (preferences.goals.has("low-carb")) {
    score += snack.carbs <= 10 ? 4 : snack.carbs <= 16 ? 2 : -2;
  }
  if (preferences.goals.has("balanced")) {
    score += snack.protein >= 4 ? 2 : 1;
  }
  if (preferences.conditions.has("diyabet") || preferences.conditions.has("insulin") || preferences.conditions.has("prediyabet")) {
    score += snack.carbs <= 12 ? 4 : snack.carbs <= 18 ? 1 : -4;
  }
  if (preferences.conditions.has("reflu") || preferences.conditions.has("gastrit") || preferences.conditions.has("ulser")) {
    score += snack.softOption ? 3 : -2;
    score += snack.acidicOption ? -4 : 0;
  }
  if (preferences.styles.has("vegan")) {
    score += snack.vegan ? 3 : -10;
  } else if (preferences.styles.has("vejetaryen")) {
    score += snack.vegetarian ? 2 : -10;
  }
  if (preferences.conditions.has("hipertansiyon")) {
    score += snack.lowSodium ? 2 : 0;
  }

  return score;
}

function buildSnackOptions() {
  const preferences = {
    goals: new Set(Array.isArray(profile.goal) ? profile.goal : [profile.goal].filter(Boolean)),
    conditions: profileTokenSet(profile.conditions, profile.conditionsOther),
    allergies: profileTokenSet(profile.allergies, profile.allergiesOther),
    diet: profileTokenSet(profile.diet, profile.dietOther)
  };
  preferences.styles = new Set([...preferences.diet, ...preferences.conditions]);

  const snacks = [
    {
      name: "Kefir ve Badem",
      note: "D???k kalorili, tok tutan pratik ara ???n.",
      calories: 165,
      protein: 9,
      carbs: 8,
      fat: 10,
      time: 2,
      mealType: "Ara ???n",
      ingredients: ["1 su barda?? kefir", "5 adet ?i? badem"],
      steps: ["Kefiri so?uk ?ekilde barda?a koy.", "Yan?na 5 adet ?i? badem ekleyip ara ???n olarak t?ket."],
      tags: ["ara ???n", "kefir", "badem"],
      vegetarian: true,
      lowSodium: true,
      hasDairy: true,
      hasNuts: true
    },
    {
      name: "Ye?il Elma",
      note: "Tek malzemeli, hafif ve h?zl? ara ???n se?ene?i.",
      calories: 72,
      protein: 0,
      carbs: 19,
      fat: 0,
      time: 1,
      mealType: "Ara ???n",
      ingredients: ["1 adet ye?il elma"],
      steps: ["Elmay? y?ka.", "Tek ba??na ara ???n olarak t?ket."],
      tags: ["ara ???n", "meyve", "hafif"],
      vegetarian: true,
      vegan: true,
      lowSodium: true,
      acidicOption: true
    },
    {
      name: "Yoğurt ve Tarçın",
      note: "Tatl? iste?ini daha kontroll? kar??layan hafif ara ???n.",
      calories: 118,
      protein: 8,
      carbs: 9,
      fat: 5,
      time: 2,
      mealType: "Ara ???n",
      ingredients: ["3 yemek kaşığı yoğurt", "1 çay kaşığı tarçın"],
      steps: ["Yoğurdu kaseye al.", "Üzerine tarçın ekleyip karıştırmadan veya karıştırarak tüket."],
      tags: ["ara öğün", "yoğurt", "hafif"],
      vegetarian: true,
      softOption: true,
      lowSodium: true,
      hasDairy: true
    },
    {
      name: "Salatal?k ve Ayran",
      note: "Tuzlu hafiflik isteyenler i?in serin ara ???n.",
      calories: 95,
      protein: 5,
      carbs: 8,
      fat: 4,
      time: 3,
      mealType: "Ara ???n",
      ingredients: ["1 k???k salatal?k", "1 bardak ayran"],
      steps: ["Salatal??? y?ka ve dilimle.", "Ayranla birlikte ara ???n olarak t?ket."],
      tags: ["ara ???n", "ayran", "salatal?k"],
      vegetarian: true,
      softOption: true,
      hasDairy: true
    },
    {
      name: "Muzun Yar?s? ve Ceviz",
      note: "Enerji d????? i?in k???k porsiyon dengeli ara ???n.",
      calories: 132,
      protein: 2,
      carbs: 15,
      fat: 7,
      time: 2,
      mealType: "Ara ???n",
      ingredients: ["Yar?m muz", "2 tam ceviz"],
      steps: ["Muzu dilimle.", "Yan?na 2 tam ceviz ekleyip k???k porsiyon ara ???n olarak t?ket."],
      tags: ["ara ???n", "muz", "ceviz"],
      vegetarian: true,
      vegan: true,
      softOption: true,
      lowSodium: true,
      hasNuts: true
    },
    {
      name: "Havuç Çubukları ve Yoğurt",
      note: "??t?r ve hafif bir ara ???n alternatifi.",
      calories: 104,
      protein: 5,
      carbs: 12,
      fat: 3,
      time: 4,
      mealType: "Ara ???n",
      ingredients: ["1 küçük havuç", "2 yemek kaşığı yoğurt"],
      steps: ["Havucu soyup çubuk şeklinde kes.", "Yoğurdu yanında dip sos gibi kullanarak tüket."],
      tags: ["ara öğün", "havuç", "yoğurt"],
      vegetarian: true,
      lowSodium: true,
      hasDairy: true
    },
    {
      name: "Çilek ve Sade Yoğurt",
      note: "Protein ve meyveyi hafif ?ekilde birle?tiren ara ???n.",
      calories: 126,
      protein: 7,
      carbs: 12,
      fat: 4,
      time: 3,
      mealType: "Ara ???n",
      ingredients: ["3 yemek kaşığı sade yoğurt", "4-5 adet çilek"],
      steps: ["Yoğurdu küçük kaseye al.", "Üzerine doğranmış çilek ekleyip tüket."],
      tags: ["ara öğün", "çilek", "yoğurt"],
      vegetarian: true,
      lowSodium: true,
      hasDairy: true
    },
    {
      name: "Ha?lanm?? Yumurta ve Salatal?k",
      note: "Protein a??rl?kl?, tok tutan ara ???n se?ene?i.",
      calories: 142,
      protein: 9,
      carbs: 4,
      fat: 9,
      time: 4,
      mealType: "Ara ???n",
      ingredients: ["1 ha?lanm?? yumurta", "1 k???k salatal?k"],
      steps: ["Yumurtay? ha?lay?p soy.", "Salatal?kla birlikte ara ???n olarak t?ket."],
      tags: ["ara ???n", "yumurta", "protein"],
      vegetarian: true,
      lowSodium: true
    },
    {
      name: "Leblebi ve Bitki Çayı",
      note: "Sade, ekonomik ve kontroll? porsiyon ara ???n.",
      calories: 109,
      protein: 5,
      carbs: 17,
      fat: 2,
      time: 2,
      mealType: "Ara ???n",
      ingredients: ["2 yemek kaşığı leblebi", "1 kupa şekersiz bitki çayı"],
      steps: ["Leblebiyi küçük porsiyon halinde hazırla.", "Yanında şekersiz bitki çayı ile tüket."],
      tags: ["ara ???n", "leblebi", "hafif"],
      vegetarian: true,
      vegan: true,
      lowSodium: true
    },
    {
      name: "Avokado Dilimleri",
      note: "D???k karbonhidrat odakl? hafif ara ???n.",
      calories: 128,
      protein: 2,
      carbs: 6,
      fat: 11,
      time: 3,
      mealType: "Ara ???n",
      ingredients: ["Yar?m k???k avokado", "Bir tutam limonsuz baharat"],
      steps: ["Avokadoyu dilimle.", "?stersen ?ok az baharat ekleyip k???k porsiyon halinde t?ket."],
      tags: ["ara ???n", "avokado", "d???k karbonhidrat"],
      vegetarian: true,
      vegan: true,
      lowSodium: true,
      softOption: true
    },
    {
      name: "Armut Dilimleri",
      note: "Mideyi yormayan meyve bazl? hafif ara ???n.",
      calories: 86,
      protein: 1,
      carbs: 22,
      fat: 0,
      time: 2,
      mealType: "Ara ???n",
      ingredients: ["1 k???k armut"],
      steps: ["Armutu y?ka ve dilimle.", "Tek ba??na hafif ara ???n olarak t?ket."],
      tags: ["ara ???n", "meyve", "armut"],
      vegetarian: true,
      vegan: true,
      softOption: true,
      lowSodium: true
    }
  ];

  return snacks
    .filter((snack) => !hasUserBlockedFood(snack, profile.dietOther))
    .filter((snack) => {
      if ((preferences.allergies.has("sut") || preferences.allergies.has("laktoz") || preferences.diet.has("laktoz")) && snack.hasDairy) {
        return false;
      }
      if ((preferences.allergies.has("kuruyemis") || preferences.allergies.has("badem") || preferences.allergies.has("ceviz") || preferences.allergies.has("fistik")) && snack.hasNuts) {
        return false;
      }
      if (preferences.styles.has("vegan") && !snack.vegan) {
        return false;
      }
      if (preferences.styles.has("vejetaryen") && !snack.vegetarian) {
        return false;
      }
      return true;
    })
    .sort((a, b) => snackScore(b, preferences) - snackScore(a, preferences));
}

function buildDailyMealPlan(recommendations = []) {
  const safePool = uniqueRecipesByName([
    ...recommendations,
    ...catalogRecipes.filter((food) => !hasUserBlockedFood(food, profile.dietOther))
  ]);

  if (!safePool.length) return [];

  const breakfastPool = safePool.filter(isBreakfastRecipe);
  const snackPool = buildSnackOptions();
  const lightPool = safePool.filter((food) => food.calories <= 380);
  const mainMealPool = safePool.filter((food) => !isSnackRecipe(food) && !isBreakfastRecipe(food) && (food.protein >= 15 || food.calories >= 340));
  const dinnerPool = mainMealPool.filter((food) => food.calories >= 320 || food.protein >= 20);
  const usedNames = new Set();
  const usedSnackNames = new Set();
  const seed = getDaySeed();

  const mealDefinitions = [
    { key: "breakfast", label: "Sabah", time: "08:00", helper: "Güne dengeli bir başlangıç", pool: breakfastPool, fallback: lightPool, offset: 0, kind: "meal" },
    { key: "snack-1", label: "Ara öğün", time: "10:30", helper: "Sabah sonrası küçük ve hafif atıştırmalık", pool: snackPool, fallback: snackPool, offset: 2, kind: "snack" },
    { key: "lunch", label: "Öğle", time: "13:00", helper: "Günün ana enerjisi", pool: mainMealPool, fallback: safePool, offset: 4, kind: "meal" },
    { key: "snack-2", label: "Ara öğün", time: "16:00", helper: "Öğleden sonra açlığını bastıran hafif seçenek", pool: snackPool, fallback: snackPool, offset: 6, kind: "snack" },
    { key: "dinner", label: "Akşam", time: "19:00", helper: "Günü tamamlayan ana öğün", pool: dinnerPool, fallback: mainMealPool, offset: 8, kind: "meal" },
    { key: "snack-3", label: "Ara öğün", time: "21:30", helper: "Geceyi ağırlaştırmayan küçük kapanış", pool: snackPool, fallback: snackPool, offset: 10, kind: "snack" }
  ];

  return mealDefinitions.map((meal) => ({
    ...meal,
    recipe: meal.kind === "snack"
      ? pickRotatingRecipe(meal.pool, seed + meal.offset, usedSnackNames, meal.fallback || snackPool)
      : pickRotatingRecipe(meal.pool, seed + meal.offset, usedNames, meal.fallback || safePool)
  })).filter((meal) => meal.recipe);
}

function renderDailyMealCards(plan = []) {
  if (!plan.length) {
    return `<div class="empty">Bu profile uygun günlük menü bulamadık. Bilgileri güncelleyip tekrar analiz yapalim.</div>`;
  }

  return plan.map((item) => `
    <article class="suggestion-card profile-meal-card" data-recipe-name="${item.recipe.name}">
      <p class="eyebrow compact">${item.label} · ${item.time}</p>
      <h3>${item.recipe.name}</h3>
      <p>${item.helper}</p>
      <div class="recipe-meta">
        <span>${item.recipe.calories} kcal</span>
        <span>${item.recipe.protein} g protein</span>
        <span>${item.recipe.carbs} g karbonhidrat</span>
        <span>${item.recipe.fat} g yağ</span>
        <span>${item.recipe.time} dk</span>
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
  profile.filteredRecommendations = (profile.recommendations || []).filter((food) => !hasUserBlockedFood(food, profile.dietOther));
  const dailyMealPlan = buildDailyMealPlan(profile.filteredRecommendations);
  generatedDailyMeals = dailyMealPlan.map((item) => item.recipe);

  profilePage.innerHTML = `
    <section class="profile-dashboard">
      <div class="profile-main-panel">
        <div class="profile-hero-card compact-profile-hero">
          <p class="eyebrow compact">Kişisel yemek listesi</p>
          <h1>Bugünün sana uygun öğün planı</h1>
          <p>Hedeflerine, hassasiyetlerine ve yemeyi tercih etmediğin yiyeceklere göre hazırlanan günlük menü.</p>
          <div class="profile-summary">
            <span>Hedef: ${labelGoal(profile.goal)}</span>
            <span>Günlük hedef: ${profile.calorieTarget} kcal</span>
            <span>BKI: ${profile.bmi.toFixed(1)}</span>
            <span>Aktivite: ${labelActivity(profile.activity)}</span>
            <span>Tarih: ${getTodayLabel()}</span>
          </div>
          <p class="warning-note">Kronik rahatsızlıklariniz veya alerjik reaksiyon riskleriniz olabileceği için, yemek tariflerini denemeden önce lütfen doktorunuzla ya da diyetisyeninizle görüşünüz. Bu öneriler tibbi tavsiye yerine geçmez.</p>
        </div>

        <div class="profile-recommendations panel-block">
          <div class="section-title"><h2>Günlük öğün planı</h2></div>
          <div class="weekly-recipe-layout">
            <div class="suggestion-list weekly-recipe-list">
              ${renderDailyMealCards(dailyMealPlan)}
            </div>
            <aside class="recipe-detail-pane" id="recipe-detail-pane">
              <p class="eyebrow compact">Tarif detayı</p>
              <h2>Bir öğün seç</h2>
              <p>Soldaki günlük öğünlerden birine tıklayınca malzemeler ve hazırlanış burada görünecek.</p>
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

  document.querySelectorAll(".profile-meal-card").forEach((card) => {
    card.addEventListener("click", () => showRecipeDetail(card.dataset.recipeName));
  });

  if (dailyMealPlan.length) {
    showRecipeDetail(dailyMealPlan[0].recipe.name);
  }

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



























