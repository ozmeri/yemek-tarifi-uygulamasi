const profilePage = document.querySelector("#profile-page");
const profile = JSON.parse(localStorage.getItem("fitTariflerProfile") || "null");
let catalogRecipes = window.fitDefaultRecipes || window.fitRecipeCatalog || [];
let generatedPantryRecipes = [];
let generatedDailyMeals = [];
const recipeDetails = {
  "Tavuklu Kinoa Salatası": {
    ingredients: ["120 g izgara tavuk", "80 g ha�Ylanmı�Y kinoa", "Marul", "Salatalık", "Limonlu sos"],
    steps: ["Sebzeleri do�Yra.", "Kinoa ve tavu�Yu ekle.", "Limonlu sosu gezdir.", "Karı�Ytırıp so�Yuk servis et."]
  },
  "Kabak Spagetti Tavuklu": {
    ingredients: ["2 kabak", "120 g tavuk gö�Ysü", "Domates sosu", "Sarımsak", "Fesle�Yen"],
    steps: ["Kabaklari ince �Yeritler halinde kes.", "Tavu�Yu tavada pi�Yir.", "Domates sosunu ekle.", "Kabaklari son 3 dakika tavaya al."]
  },
  "Somon ve Fırın Sebze": {
    ingredients: ["140 g somon", "Brokoli", "Kabak", "Havuç", "Limon", "Dereotu"],
    steps: ["Sebzeleri zeytinyağı ile harmanla.", "Somonu limon ve dereotu ile tatlandır.", "Hepsini fırında pi�Yir.", "Sıcak servis et."]
  },
  "Mercimekli Sebze �?orbasi": {
    ingredients: ["Kırmızı mercimek", "Havuç", "Kabak", "So�Yan", "Kimyon", "Zerdecal"],
    steps: ["Sebzeleri do�Yra ve tencerede çevir.", "Mercimek ve su ekle.", "Baharatlarla pi�Yir.", "Blenderdan geçir."]
  },
  "Nohutlu Ton Balı�Yı Kasesi": {
    ingredients: ["1 kutu ton balı�Yı", "Ha�Ylanmı�Y nohut", "Marul", "Mısır", "Limon", "Maydanoz"],
    steps: ["Nohudu sudan geçir.", "Ton balı�Yı ve sebzeleri kaseye al.", "Limon ve maydanoz ekle.", "Karı�Ytırıp servis et."]
  },
  "Karnabahar Pilavı Tavuklu": {
    ingredients: ["Karnabahar", "120 g tavuk", "Bezelye", "Havuç", "Soya sosu", "Taze so�Yan"],
    steps: ["Karnabaharı rondodan geçir.", "Tavu�Yu pi�Yir.", "Sebzeleri ekle.", "Karnabaharı son 5 dakika tavada çevir."]
  },
  "Bulgurlu Yo�Yurtlu Semizotu": {
    ingredients: ["Semizotu", "Ha�Ylanmı�Y bulgur", "Süzme yoğurt", "Nane", "Salatalık"],
    steps: ["Semizotunu yıka ve ayıkla.", "Yo�Yurt, nane ve salataligi karı�Ytır.", "Bulguru ekle.", "Semizotu ile birle�Ytir."]
  },
  "Protein Omlet Bowl": {
    ingredients: ["3 yumurta", "60 g lor peyniri", "Ispanak", "Cherry domates", "Zeytinyağı"],
    steps: ["Ispana�Yı tavada hafif sotele.", "Yumurtayı lor peyniriyle çırp.", "Karı�Yımı tavaya al ve kısık ate�Yte pi�Yir.", "Domatesle servis et."]
  },
  "Peynirli Roka Salatası": {
    ingredients: ["Roka", "60 g beyaz peynir", "Domates", "Ceviz", "Limon", "Zeytinyağı"],
    steps: ["Rokayı yıka.", "Peynir ve domatesi ekle.", "Cevizi serp.", "Limonlu sosla karı�Ytır."]
  },
  "Hindi Köfteli Salata Taba�Yı": {
    ingredients: ["140 g hindi kıyma", "Marul", "Kırmızı lahana", "Salatalık", "Yo�Yurtlu sos", "Kimyon"],
    steps: ["Hindi kıymayı baharatla yo�Yur.", "Küçük köfteler yap ve pi�Yir.", "Sebzeleri taba�Ya al.", "Köfteleri ve yoğurtlu sosu ekle."]
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
    ingredients: ["120 g tavuk", "1 kapya biber", "1 havuç", "1 tatlı ka�Yı�Yı zeytinyağı", "Karabiber", "Kekik"],
    steps: ["Tavu�Yu ku�Yba�Yı do�Yra ve tavada zeytinyağı ile pi�Yir.", "Kapya biberi ve havuçu ince do�Yra.", "Sebzeleri tavu�Ya ekleyip 8-10 dakika sotele.", "Baharat ekleyip sıcak servis et."]
  },
  {
    name: "Patates Bezelye Yeme�Yi",
    note: "Dolabında patates ve bezelye varsa etsiz, sade ve hafif bir sebze yeme�Yi.",
    calories: 315,
    protein: 10,
    carbs: 48,
    fat: 9,
    time: 28,
    keywords: ["patates", "bezelye", "sebze", "etsiz"],
    pantryCore: ["patates", "bezelye"],
    ingredients: ["2 küçük patates", "1 su bardagi bezelye", "1 küçük so�Yan", "1 tatlı ka�Yı�Yı zeytinyağı", "Domates sosu", "Karabiber"],
    steps: ["Patatesleri küp küp do�Yra.", "So�Yanı zeytinyağında hafifçe çevir.", "Patates ve bezelyeyi ekleyip uzerini gececek kadar su koy.", "Domates sosu ve baharat ekleyip patates yumu�Yayana kadar pi�Yir."]
  },
  {
    name: "Kıymalı Patlıcan Kabak Sote",
    note: "Kıyma, patlıcan, kabak ve kapya biberle hazırlanan doyurucu bir tava yeme�Yi.",
    calories: 455,
    protein: 34,
    carbs: 28,
    fat: 23,
    time: 32,
    keywords: ["kıyma", "kıyma", "patlıcan", "patlıcan", "kabak", "kapya", "biber", "sote"],
    pantryCore: ["kıyma", "patlıcan", "kabak", "biber"],
    ingredients: ["120 g kıyma", "1 patlıcan", "1 kabak", "1 kapya biber", "1 tatlı ka�Yı�Yı zeytinyağı", "Karabiber", "Kekik"],
    steps: ["Patlıcanı, kaba�Yı ve kapya biberi do�Yra.", "Kıymayı tavada suyunu çekene kadar pi�Yir.", "Sebzeleri ekleyip kısık ate�Yte yumu�Yayana kadar sotele.", "Baharat ekleyip sıcak servis et."]
  },
  {
    name: "Kıymalı Patlıcan Patates Yeme�Yi",
    note: "Dolabında kıyma, patlıcan ve patates varsa tencerede yapabilece�Yin doyurucu bir ana yemek.",
    calories: 480,
    protein: 32,
    carbs: 42,
    fat: 22,
    time: 35,
    keywords: ["kıyma", "kıyma", "patlıcan", "patlıcan", "patates", "tencere", "yemek"],
    pantryCore: ["kıyma", "patlıcan", "patates"],
    ingredients: ["120 g kıyma", "1 patlıcan", "1 küçük patates", "1 küçük so�Yan", "Domates sosu", "1 tatlı ka�Yı�Yı zeytinyağı", "Karabiber"],
    steps: ["Patlıcanı ve patatesi küp küp do�Yra.", "So�Yanı zeytinyağında çevirip kıymayı ekle ve suyunu cekene kadar pi�Yir.", "Patates ve patlıcani tencereye al, domates sosu ve az su ekle.", "Sebzeler yumu�Yayana kadar kısık ate�Yte pi�Yirip sıcak servis et."]
  },
  {
    name: "Karnabahar Brokoli Fırın",
    note: "Dolabında karnabahar ve brokoli varsa hafif, doyurucu bir fırın taba�Yı.",
    calories: 320,
    protein: 18,
    carbs: 26,
    fat: 14,
    time: 30,
    keywords: ["karnabahar", "karnibahar", "brokoli", "yoğurt", "yumurta", "lor", "peynir"],
    pantryCore: ["karnabahar", "brokoli"],
    ingredients: ["Karnabahar", "Brokoli", "3 yemek ka�Yı�Yı süzme yoğurt", "1 yumurta", "40 g lor peyniri", "1 tatlı ka�Yı�Yı zeytinyağı"],
    steps: ["Karnabahar ve brokoliyi hafif ha�Yla.", "Yo�Yurt, yumurta, lor ve zeytinyağını karı�Ytır.", "Sebzeleri fırın kabına al ve sosu üzerine gezdir.", "180 derecede 20 dakika pi�Yir."]
  },
  {
    name: "Brokolili Yo�Yurtlu Kase",
    note: "Brokoli, yoğurt ve yumurta ile hızlı bir günlük tabak.",
    calories: 280,
    protein: 21,
    carbs: 18,
    fat: 12,
    time: 18,
    keywords: ["brokoli", "yoğurt", "yumurta", "lor", "peynir"],
    pantryCore: ["brokoli", "yoğurt"],
    ingredients: ["Brokoli", "Süzme yoğurt", "1 ha�Ylanmı�Y yumurta", "Nane", "Limon", "Az zeytinyağı"],
    steps: ["Brokoliyi buharda pi�Yir.", "Yo�Yurdu nane ve limonla karı�Ytır.", "Yumurtayı dilimle.", "Hepsini kaseye al ve az zeytinyağı ekle."]
  }
];

function renderRecipeDetail(food) {
  const details = recipeDetails[food.name] || food || { ingredients: ["Malzeme bilgisi yakinda eklenecek."], steps: ["Hazırlanı�Y bilgisi yakinda eklenecek."] };
  return `
    <p class="eyebrow compact">${food.mealType === "Ara öğün" ? "�-�Yün detayı" : "Tarif detayı"}</p>
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
      <h3>${food.mealType === "Ara öğün" ? "Nasıl tüketilir" : "Hazırlanı�Y"}</h3>
      <ol>${details.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
    </div>
  `;
}

function showRecipeDetail(foodName) {
  const food = [...generatedDailyMeals, ...generatedPantryRecipes, ...(profile.filteredRecommendations || profile.recommendations || []), ...pantryRecipes, ...catalogRecipes].find((item) => item.name === foodName);
  if (!food || hasProfileConflict(food)) return;
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

function foodMetaTokens(food) {
  return profileTokenSet(
    food?.allergens || [],
    food?.avoidFor || [],
    food?.tags || [],
    food?.keywords || [],
    food?.ingredients || [],
    recipeDetails[food?.name]?.ingredients || []
  );
}

function expandRestrictionTokens(tokens, groups) {
  const aliases = {
    dairy: ['dairy', 'sut', 'laktoz', 'yogurt', 'ayran', 'kefir', 'peynir'],
    laktoz: ['laktoz', 'dairy', 'sut', 'yogurt', 'ayran', 'kefir', 'peynir'],
    egg: ['egg', 'yumurta'],
    yumurta: ['yumurta', 'egg'],
    fish: ['fish', 'balik', 'somon', 'ton'],
    balik: ['balik', 'fish', 'somon', 'ton'],
    nuts: ['nuts', 'kuruyemis', 'badem', 'ceviz', 'fistik'],
    kuruyemis: ['kuruyemis', 'nuts', 'badem', 'ceviz', 'fistik'],
    peanut: ['peanut', 'fistik'],
    gluten: ['gluten', 'bugday', 'lavas', 'ekmek', 'makarna'],
    soy: ['soy', 'soya'],
    sesame: ['sesame', 'susam'],
    tomato: ['tomato', 'domates'],
    strawberry: ['strawberry', 'cilek'],
    cocoa: ['cocoa', 'kakao'],
    honey: ['honey', 'bal'],
    corn: ['corn', 'misir'],
    legume: ['legume', 'baklagil', 'nohut', 'mercimek', 'fasulye'],
    hypertension: ['hypertension', 'hipertansiyon', 'tansiyon'],
    reflux: ['reflux', 'reflu'],
    gastritis: ['gastritis', 'gastrit'],
    ulcer: ['ulcer', 'ulser'],
    ibs: ['ibs', 'bagirsak'],
    celiac: ['celiac', 'colyak', 'gluten'],
    gout: ['gout', 'gut'],
    cholesterol: ['cholesterol', 'kolesterol'],
    vegetarian: ['vegetarian', 'vejetaryen'],
    vejetaryen: ['vejetaryen', 'vegetarian'],
    vegan: ['vegan'],
    'no-red-meat': ['no-red-meat', 'kirmizi', 'et', 'dana'],
    'no-chicken': ['no-chicken', 'tavuk', 'hindi'],
    'no-fish': ['no-fish', 'fish', 'balik', 'somon', 'ton']
  };

  const expanded = new Set(tokens);
  [...tokens].forEach((token) => {
    (aliases[token] || []).forEach((item) => expanded.add(item));
  });

  groups.forEach((group) => group.forEach((item) => expanded.add(item)));
  return expanded;
}

function hasProfileConflict(food) {
  if (!profile || !food) return false;

  const text = recipeSearchText(food);
  const metaTokens = foodMetaTokens(food);
  const allergyTokens = expandRestrictionTokens(profileTokenSet(profile.allergies, profile.allergiesOther), []);
  const conditionTokens = expandRestrictionTokens(profileTokenSet(profile.conditions, profile.conditionsOther), []);
  const dietTokens = expandRestrictionTokens(profileTokenSet(profile.diet, profile.dietOther), []);

  const matchesTokens = (tokens) => [...tokens].some((token) => text.includes(token) || metaTokens.has(token));

  if (hasUserBlockedFood(food, profile.dietOther)) return true;
  if (matchesTokens(allergyTokens)) return true;
  if (food.avoidFor && matchesTokens(conditionTokens)) return true;

  if ((conditionTokens.has('reflux') || conditionTokens.has('reflu') || conditionTokens.has('gastritis') || conditionTokens.has('gastrit') || conditionTokens.has('ulcer') || conditionTokens.has('ulser')) && food.acidicOption) {
    return true;
  }

  if ((conditionTokens.has('hypertension') || conditionTokens.has('hipertansiyon')) && food.highSodium) {
    return true;
  }

  if ((allergyTokens.has('dairy') || allergyTokens.has('sut') || allergyTokens.has('laktoz') || dietTokens.has('laktoz')) && (food.hasDairy || matchesTokens(new Set(['dairy', 'sut', 'laktoz', 'yogurt', 'ayran', 'kefir', 'peynir'])))) {
    return true;
  }

  if ((allergyTokens.has('nuts') || allergyTokens.has('kuruyemis') || allergyTokens.has('badem') || allergyTokens.has('ceviz') || allergyTokens.has('fistik')) && (food.hasNuts || matchesTokens(new Set(['nuts', 'kuruyemis', 'badem', 'ceviz', 'fistik'])))) {
    return true;
  }

  if ((allergyTokens.has('egg') || allergyTokens.has('yumurta')) && matchesTokens(new Set(['egg', 'yumurta']))) {
    return true;
  }

  if ((allergyTokens.has('fish') || allergyTokens.has('balik') || allergyTokens.has('somon') || allergyTokens.has('ton')) && matchesTokens(new Set(['fish', 'balik', 'somon', 'ton']))) {
    return true;
  }

  if (dietTokens.has('vegan') && !food.vegan && matchesTokens(new Set(['tavuk', 'hindi', 'kiyma', 'et', 'balik', 'somon', 'ton', 'yumurta', 'sut', 'yogurt', 'peynir', 'ayran', 'kefir']))) {
    return true;
  }

  if ((dietTokens.has('vegetarian') || dietTokens.has('vejetaryen')) && matchesTokens(new Set(['tavuk', 'hindi', 'kiyma', 'et', 'balik', 'somon', 'ton']))) {
    return true;
  }

  if (dietTokens.has('no-chicken') && matchesTokens(new Set(['tavuk', 'hindi']))) {
    return true;
  }

  if (dietTokens.has('no-fish') && matchesTokens(new Set(['balik', 'somon', 'ton']))) {
    return true;
  }

  if (dietTokens.has('no-red-meat') && matchesTokens(new Set(['kirmizi', 'dana', 'et', 'kiyma']))) {
    return true;
  }

  return false;
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
    ton: "ton balı�Yı",
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
    sogan: "so�Yan",
    nohut: "nohut",
    mercimek: "mercimek",
    fasulye: "fasulye",
    "yesil fasulye": "ye�Yil fasulye",
    "tam bugday lavas": "tam bu�Yday lava�Y",
    "tam bugday ekmegi": "tam bu�Yday ekme�Yi"
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
    yogurt: "Yo�Yurtlu",
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
  const pantryStaples = new Set(["g", "kg", "ml", "su", "bardagi", "yemek", "tatlı", "ka�Yı�Yı", "küçük", "buyuk", "az", "baharat", "karabiber", "kekik", "limon", "sos", "sosu", "zeytinyağı", "yesillik"]);
  return [...new Set((details.ingredients || [])
    .flatMap((item) => normalizeText(item).split(/[^a-z0-9]+/))
    .filter((item) => item.length > 2 && !pantryStaples.has(item)))];
}

function findPantryRecipe(available) {
  const normalizedAvailable = available.map(normalizeText);
  const recipes = [...pantryRecipes, ...(profile.filteredRecommendations || profile.recommendations || []), ...catalogRecipes].filter((food) => !hasProfileConflict(food));
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
      ? (carbsPantry.includes("patates") || carbsPantry.includes("tatli patates") || vegetables.includes("karnabahar") ? "Tencere Yeme�Yi" : "Sote")
      : (vegetables.includes("karnabahar") || vegetables.includes("brokoli") ? "Fırın" : "Sebze Sote");
  const name = `${proteinTitle} ${detailTitle || "Dolap"} ${method}`.replace(/\s+/g, " ").trim();
  const calories = Math.min(680, 220 + proteins.length * 120 + vegetables.length * 40 + carbsPantry.length * 70);
  const protein = proteins.includes("kiyma") ? 30 : proteins.includes("tavuk") || proteins.includes("hindi") ? 36 : proteins.length ? 18 + proteins.length * 5 : 8;
  const carbs = carbsPantry.length * 18 + vegetables.length * 5 + (wrapBase ? 12 : 0);
  const fat = proteins.includes("kiyma") ? 22 : proteins.length ? 14 : 9;
  const ingredients = [...displayItems, "baharat", wrapBase ? "varsa yoğurtlu sos" : "varsa 1 tatlı ka�Yı�Yı zeytinyağı"];
  const prepVegetables = vegetables.length ? `${vegetables.map(displayIngredient).join(", ")} malzemelerini do�Yra.` : "Sebzeleri hazırlayıp küçük parçalara ayır.";
  const cookProtein = mainProtein === "kiyma"
    ? "Kıymayı tavada suyunu çekene kadar pi�Yir."
    : mainProtein === "tavuk" || mainProtein === "hindi"
      ? `${displayIngredient(mainProtein)} etini küçük parçalara ayırıp tavada pi�Yir.`
      : proteins.length
        ? `${proteins.map(displayIngredient).join(", ")} malzemesini tavaya veya tencereye al.`
        : method.includes("Fırın")
          ? "Sebzeleri fırın kabına al."
          : "Sebzeleri tavaya al.";

  let combineStep = "Sebzeleri ekle, baharatla birlikte orta ate�Yte yumu�Yayana kadar sotele.";
  if (method.includes("Fırın")) {
    combineStep = "Tüm malzemeleri fırın kabına al, az zeytinyağı ve baharatla 180 derecede yumu�Yayana kadar pi�Yir.";
  } else if (method.includes("Tencere")) {
    combineStep = "Sebzeleri ve karbonhidrat grubunu ekle, az su ilave et ve kısık ate�Yte yumu�Yayana kadar pi�Yir.";
  } else if (method === "Wrap") {
    const wrapLabel = displayIngredient(wrapBase);
    combineStep = `${wrapLabel} içine pi�Yen malzemeleri yerle�Ytir, istersen yoğurtlu sos ekleyip sar.`;
  }

  return {
    name,
    note: `Dolabında yazdı�Yın ${displayItems.join(", ")} ile ekstra ana malzeme gerektirmeden olu�Yturulan tarif.`,
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
    muscle: "Protein a�Yırlıklı beslenmek",
    balanced: "Dengeli beslenmek",
    "low-carb": "Karbonhidratı azaltmak"
  };
  const goals = Array.isArray(goal) ? goal : [goal].filter(Boolean);
  return goals.length ? goals.map((item) => labels[item] || item).join(", ") : "Belirtilmedi";
}

function labelActivity(activity) {
  return { low: "Az hareketli", medium: "Orta hareketli", high: "�?ok hareketli" }[activity] || "Belirtilmedi";
}

function listOrEmpty(items, other) {
  const list = [...(items || [])];
  if (other) list.push(`Di�Yer: ${other}`);
  return list.length ? list.join(", ") : "Belirtilmedi";
}

function getTodayLabel() {
  return new Intl.DateTimeFormat("tr-TR", { day: "numeric", month: "long", year: "numeric" }).format(new Date());
}

function calculateProfileBmi(weight, height) {
  const safeHeight = Number(height) || 0;
  const safeWeight = Number(weight) || 0;
  if (!safeHeight || !safeWeight) return 0;
  const meters = safeHeight / 100;
  return safeWeight / (meters * meters);
}

function estimateProfileCalories(weight, height, age, goals, activity) {
  const goalList = Array.isArray(goals) ? goals : [goals].filter(Boolean);
  const base = 10 * (Number(weight) || 0) + 6.25 * (Number(height) || 0) - 5 * (Number(age) || 0);
  const activityBonus = activity === "high" ? 520 : activity === "medium" ? 320 : 160;
  let goalAdjust = 0;
  if (goalList.includes("weight-loss")) goalAdjust -= 300;
  if (goalList.includes("muscle")) goalAdjust += 220;
  if (goalList.includes("low-carb")) goalAdjust -= 150;
  return Math.round(base + activityBonus + goalAdjust);
}

function parseWeeklyWeightEntry(value, currentWeight) {
  const text = String(value || "").trim().replace(",", ".");
  const numeric = Number(text.replace(/[^0-9+\-.]/g, ""));
  if (!Number.isFinite(numeric)) return null;
  if (/^[+-]/.test(text)) {
    const nextWeight = Number(currentWeight) + numeric;
    return nextWeight > 0 ? Number(nextWeight.toFixed(1)) : null;
  }
  return numeric > 0 ? Number(numeric.toFixed(1)) : null;
}

function getWeeklySeedOffset() {
  const weeklyValue = localStorage.getItem("fitTariflerWeeklyChange") || "";
  return Array.from(weeklyValue).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function getDaySeed() {
  const now = new Date();
  const baseSeed = Math.floor(new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 86400000);
  return baseSeed + getWeeklySeedOffset();
}

function canonicalRecipeName(value) {
  return String(value || "")
    .toLocaleLowerCase("tr-TR")
    .replace(/\s+\d+$/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function uniqueRecipesByName(recipes = []) {
  const seen = new Set();
  return recipes.filter((food) => {
    const key = canonicalRecipeName(food?.name);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function hasRecipeKeyword(text, words) {
  return words.some((item) => text.includes(item));
}

function isSoupRecipe(food) {
  const text = getRecipeSearchText(food);
  return hasRecipeKeyword(text, ["corba", "çorba", "soup"]);
}

function isSaladRecipe(food) {
  const text = getRecipeSearchText(food);
  return hasRecipeKeyword(text, ["salata", "roka", "semizotu", "marul", "yesillik"]);
}

function isDessertRecipe(food) {
  const text = getRecipeSearchText(food);
  return hasRecipeKeyword(text, ["tatli", "tatlı", "muhallebi", "kup", "kek", "kurabiye", "puding", "brownie", "cheesecake"]);
}

function isBreakfastRecipe(food) {
  const text = getRecipeSearchText(food);
  const breakfastWords = ["yumurta", "omlet", "peynir", "lor", "yogurt", "yulaf", "kahvalti", "tost", "pankek", "labne", "avokado", "menemen"];
  const mainMealWords = ["tavuk", "hindi", "somon", "balik", "kiyma", "kofte", "sote", "firin", "pilav", "makarna", "et"];
  return hasRecipeKeyword(text, breakfastWords)
    && !hasRecipeKeyword(text, mainMealWords)
    && !isSoupRecipe(food)
    && !isSaladRecipe(food);
}

function isSnackRecipe(food) {
  const text = getRecipeSearchText(food);
  const snackWords = ["ara ö�Yün", "ara ogun", "atistirmalik", "aperatif", "smoothie", "bar", "top", "kup"];
  return hasRecipeKeyword(text, snackWords)
    || (food.calories <= 220
      && food.protein <= 12
      && !isBreakfastRecipe(food)
      && !isSoupRecipe(food)
      && !isSaladRecipe(food)
      && !isDessertRecipe(food));
}

function isMainMealRecipe(food) {
  const text = getRecipeSearchText(food);
  const mainMealWords = ["tavuk", "hindi", "somon", "balik", "kiyma", "kofte", "sote", "firin", "fırın", "pilav", "makarna", "izgara", "ana yemek", "et"];
  return !isBreakfastRecipe(food)
    && !isSnackRecipe(food)
    && !isSaladRecipe(food)
    && !isDessertRecipe(food)
    && !isSoupRecipe(food)
    && (hasRecipeKeyword(text, mainMealWords) || food.protein >= 22 || food.calories >= 360);
}

function pickRotatingRecipe(pool, seed, usedNames, fallbackPool = []) {
  const uniquePool = uniqueRecipesByName([...pool, ...fallbackPool]);
  const freshPool = uniquePool.filter((food) => !usedNames.has(canonicalRecipeName(food.name)));
  const targetPool = freshPool.length ? freshPool : uniquePool;
  if (!targetPool.length) return null;
  const choice = targetPool[((seed % targetPool.length) + targetPool.length) % targetPool.length];
  usedNames.add(canonicalRecipeName(choice.name));
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
      note: "Dü�Yük kalorili, tok tutan pratik ara ö�Yün.",
      calories: 165,
      protein: 9,
      carbs: 8,
      fat: 10,
      time: 2,
      mealType: "Ara öğün",
      ingredients: ["1 su barda�Yı kefir", "5 adet çi�Y badem"],
      steps: ["Kefiri so�Yuk �Yekilde barda�Ya koy.", "Yanına 5 adet çi�Y badem ekleyip ara ö�Yün olarak tüket."],
      tags: ["ara ö�Yün", "kefir", "badem"],
      vegetarian: true,
      lowSodium: true,
      hasDairy: true,
      hasNuts: true
    },
    {
      name: "Ye�Yil Elma",
      note: "Tek malzemeli, hafif ve hızlı ara ö�Yün seçene�Yi.",
      calories: 72,
      protein: 0,
      carbs: 19,
      fat: 0,
      time: 1,
      mealType: "Ara öğün",
      ingredients: ["1 adet ye�Yil elma"],
      steps: ["Elmayı yıka.", "Tek ba�Yına ara ö�Yün olarak tüket."],
      tags: ["ara ö�Yün", "meyve", "hafif"],
      vegetarian: true,
      vegan: true,
      lowSodium: true,
      acidicOption: true
    },
    {
      name: "Yo�Yurt ve Tarçın",
      note: "Tatlı iste�Yini daha kontrollü kar�Yılayan hafif ara ö�Yün.",
      calories: 118,
      protein: 8,
      carbs: 9,
      fat: 5,
      time: 2,
      mealType: "Ara öğün",
      ingredients: ["3 yemek ka�Yı�Yı yoğurt", "1 çay ka�Yı�Yı tarçın"],
      steps: ["Yo�Yurdu kaseye al.", "�ozerine tarçın ekleyip karı�Ytırmadan veya karı�Ytırarak tüket."],
      tags: ["ara ö�Yün", "yoğurt", "hafif"],
      vegetarian: true,
      softOption: true,
      lowSodium: true,
      hasDairy: true
    },
    {
      name: "Salatalık ve Ayran",
      note: "Tuzlu hafiflik isteyenler için serin ara ö�Yün.",
      calories: 95,
      protein: 5,
      carbs: 8,
      fat: 4,
      time: 3,
      mealType: "Ara öğün",
      ingredients: ["1 küçük salatalık", "1 bardak ayran"],
      steps: ["Salatalı�Yı yıka ve dilimle.", "Ayranla birlikte ara ö�Yün olarak tüket."],
      tags: ["ara ö�Yün", "ayran", "salatalık"],
      vegetarian: true,
      softOption: true,
      hasDairy: true
    },
    {
      name: "Muzun Yarısı ve Ceviz",
      note: "Enerji dü�Yü�Yü için küçük porsiyon dengeli ara ö�Yün.",
      calories: 132,
      protein: 2,
      carbs: 15,
      fat: 7,
      time: 2,
      mealType: "Ara öğün",
      ingredients: ["Yarım muz", "2 tam ceviz"],
      steps: ["Muzu dilimle.", "Yanına 2 tam ceviz ekleyip küçük porsiyon ara ö�Yün olarak tüket."],
      tags: ["ara ö�Yün", "muz", "ceviz"],
      vegetarian: true,
      vegan: true,
      softOption: true,
      lowSodium: true,
      hasNuts: true
    },
    {
      name: "Havuç �?ubukları ve Yo�Yurt",
      note: "�?ıtır ve hafif bir ara ö�Yün alternatifi.",
      calories: 104,
      protein: 5,
      carbs: 12,
      fat: 3,
      time: 4,
      mealType: "Ara öğün",
      ingredients: ["1 küçük havuç", "2 yemek ka�Yı�Yı yoğurt"],
      steps: ["Havucu soyup çubuk �Yeklinde kes.", "Yo�Yurdu yanında dip sos gibi kullanarak tüket."],
      tags: ["ara ö�Yün", "havuç", "yoğurt"],
      vegetarian: true,
      lowSodium: true,
      hasDairy: true
    },
    {
      name: "�?ilek ve Sade Yo�Yurt",
      note: "Protein ve meyveyi hafif �Yekilde birle�Ytiren ara ö�Yün.",
      calories: 126,
      protein: 7,
      carbs: 12,
      fat: 4,
      time: 3,
      mealType: "Ara öğün",
      ingredients: ["3 yemek ka�Yı�Yı sade yoğurt", "4-5 adet çilek"],
      steps: ["Yo�Yurdu küçük kaseye al.", "�ozerine do�Yranmı�Y çilek ekleyip tüket."],
      tags: ["ara ö�Yün", "çilek", "yoğurt"],
      vegetarian: true,
      lowSodium: true,
      hasDairy: true
    },
    {
      name: "Ha�Ylanmı�Y Yumurta ve Salatalık",
      note: "Protein a�Yırlıklı, tok tutan ara ö�Yün seçene�Yi.",
      calories: 142,
      protein: 9,
      carbs: 4,
      fat: 9,
      time: 4,
      mealType: "Ara öğün",
      ingredients: ["1 ha�Ylanmı�Y yumurta", "1 küçük salatalık"],
      steps: ["Yumurtayı ha�Ylayıp soy.", "Salatalıkla birlikte ara ö�Yün olarak tüket."],
      tags: ["ara ö�Yün", "yumurta", "protein"],
      vegetarian: true,
      lowSodium: true
    },
    {
      name: "Leblebi ve Bitki �?ayı",
      note: "Sade, ekonomik ve kontrollü porsiyon ara ö�Yün.",
      calories: 109,
      protein: 5,
      carbs: 17,
      fat: 2,
      time: 2,
      mealType: "Ara öğün",
      ingredients: ["2 yemek ka�Yı�Yı leblebi", "1 kupa �Yekersiz bitki çayı"],
      steps: ["Leblebiyi küçük porsiyon halinde hazırla.", "Yanında �Yekersiz bitki çayı ile tüket."],
      tags: ["ara ö�Yün", "leblebi", "hafif"],
      vegetarian: true,
      vegan: true,
      lowSodium: true
    },
    {
      name: "Avokado Dilimleri",
      note: "Dü�Yük karbonhidrat odaklı hafif ara ö�Yün.",
      calories: 128,
      protein: 2,
      carbs: 6,
      fat: 11,
      time: 3,
      mealType: "Ara öğün",
      ingredients: ["Yarım küçük avokado", "Bir tutam limonsuz baharat"],
      steps: ["Avokadoyu dilimle.", "İstersen çok az baharat ekleyip küçük porsiyon halinde tüket."],
      tags: ["ara ö�Yün", "avokado", "dü�Yük karbonhidrat"],
      vegetarian: true,
      vegan: true,
      lowSodium: true,
      softOption: true
    },
    {
      name: "Armut Dilimleri",
      note: "Mideyi yormayan meyve bazlı hafif ara ö�Yün.",
      calories: 86,
      protein: 1,
      carbs: 22,
      fat: 0,
      time: 2,
      mealType: "Ara öğün",
      ingredients: ["1 küçük armut"],
      steps: ["Armutu yıka ve dilimle.", "Tek ba�Yına hafif ara ö�Yün olarak tüket."],
      tags: ["ara ö�Yün", "meyve", "armut"],
      vegetarian: true,
      vegan: true,
      softOption: true,
      lowSodium: true
    }
  ];

  return snacks
    .filter((snack) => !hasProfileConflict(snack))
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
    ...catalogRecipes.filter((food) => !hasProfileConflict(food))
  ]);

  if (!safePool.length) return [];

  const breakfastPool = safePool.filter(isBreakfastRecipe);
  const snackPool = buildSnackOptions();
  const mainMealPool = safePool.filter(isMainMealRecipe);
  const lunchPool = mainMealPool.filter((food) => !isSoupRecipe(food));
  const dinnerPool = mainMealPool.filter((food) => !isSoupRecipe(food) && (food.calories >= 320 || food.protein >= 20));
  const usedNames = new Set();
  const usedSnackNames = new Set();
  const seed = getDaySeed();

  const mealDefinitions = [
    { key: "breakfast", label: "Sabah", time: "08:00", helper: "Güne dengeli bir başlangıç", pool: breakfastPool, fallback: breakfastPool, offset: 0, kind: "meal" },
    { key: "snack-1", label: "Ara öğün", time: "10:30", helper: "Sabah sonrası küçük ve hafif atıştırmalık", pool: snackPool, fallback: snackPool, offset: 2, kind: "snack" },
    { key: "lunch", label: "Öğle", time: "13:00", helper: "Günün ana enerjisi", pool: lunchPool, fallback: mainMealPool, offset: 4, kind: "meal" },
    { key: "snack-2", label: "Ara öğün", time: "16:00", helper: "Öğleden sonra açlığını bastıran hafif seçenek", pool: snackPool, fallback: snackPool, offset: 6, kind: "snack" },
    { key: "dinner", label: "Akşam", time: "19:00", helper: "Günü tamamlayan ana ö�Yün", pool: dinnerPool, fallback: mainMealPool, offset: 8, kind: "meal" },
    { key: "snack-3", label: "Ara öğün", time: "21:30", helper: "Geceyi ağırlaştırmayan küçük kapanı�Y", pool: snackPool, fallback: snackPool, offset: 10, kind: "snack" }
  ];

  return mealDefinitions.map((meal) => ({
    ...meal,
    recipe: meal.kind === "snack"
      ? pickRotatingRecipe(meal.pool, seed + meal.offset, usedSnackNames, meal.fallback || snackPool)
      : pickRotatingRecipe(meal.pool, seed + meal.offset, usedNames, meal.fallback || mainMealPool)
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

function hasBrokenProfileRecipeData(recipeList = []) {
  return recipeList.some((recipe) => /Ã|Å|Ä|\uFFFD/.test(JSON.stringify(recipe)));
}
async function hydrateCatalogRecipes() {
  const fallbackRecipes = window.fitDefaultRecipes || window.fitRecipeCatalog || [];

  if (window.fitFirebase?.enabled && typeof window.fitFirebase.loadRecipes === "function") {
    try {
      let remoteRecipes = await window.fitFirebase.loadRecipes();
      const shouldRepair = !remoteRecipes.length || hasBrokenProfileRecipeData(remoteRecipes);
      if (shouldRepair && fallbackRecipes.length && typeof window.fitFirebase.seedRecipes === "function") {
        await window.fitFirebase.seedRecipes(fallbackRecipes, { force: true });
        remoteRecipes = await window.fitFirebase.loadRecipes();
      }
      if (remoteRecipes.length) {
        catalogRecipes = remoteRecipes;
        return;
      }
    } catch (error) {
      console.error("Profil için tarifler Firestore'dan yüklenemedi, yerel katalog kullanılacak.", error);
    }
  }

  catalogRecipes = fallbackRecipes;
}

(async function initProfilePage() {
  await hydrateCatalogRecipes();
if (!profile) {
  profilePage.innerHTML = `
    <div class="member-results profile-empty">
      <p class="eyebrow compact">Profil bulunamadı</p>
      <h1>Önce üyelik ve profil formunu tamamlayalım.</h1>
      <p>Profil sayfası, üyelikten sonra doldurduğun bilgilere göre hazırlanır.</p>
      <a class="primary-link" href="uyelik.html">Üyelik sayfasına git</a>
    </div>
  `;
} else {
  const weeklyChange = localStorage.getItem("fitTariflerWeeklyChange") || "Henüz girilmedi";
  profile.filteredRecommendations = (profile.recommendations || []).filter((food) => !hasProfileConflict(food));
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
          <p class="warning-note">Kronik rahatsızlıklarınız veya alerjik reaksiyon riskleriniz olabileceği için, yemek tariflerini denemeden önce lütfen doktorunuzla ya da diyetisyeninizle görüşünüz. Bu öneriler tıbbi tavsiye yerine geçmez.</p>
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
              <p>Soldaki günlük ö�Yünlerden birine tıklayınca malzemeler ve hazırlanış burada görünecek.</p>
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

  document.querySelector("#weekly-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const value = document.querySelector("#weekly-change-input").value.trim();
    if (!value) return;

    const nextWeight = parseWeeklyWeightEntry(value, profile.weight);
    if (!nextWeight) return;

    profile.weight = nextWeight;
    profile.bmi = calculateProfileBmi(profile.weight, profile.height);
    profile.calorieTarget = estimateProfileCalories(profile.weight, profile.height, profile.age, profile.goal, profile.activity);

    localStorage.setItem("fitTariflerWeeklyChange", value);
    localStorage.setItem("fitTariflerProfile", JSON.stringify(profile));

    if (window.fitFirebase?.enabled && typeof window.fitFirebase.saveProfile === "function") {
      try {
        await window.fitFirebase.saveProfile(profile);
      } catch (error) {
        console.error("Haftalık takip profili kaydedilemedi.", error);
      }
    }

    document.querySelector("#weekly-change-value").textContent = value;
    document.querySelector("#weekly-form").classList.add("hidden");
    window.location.reload();
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

  const handleSecureLogout = async (event) => {
    event?.preventDefault();
    if (window.fitFirebase?.enabled) {
      await window.fitFirebase.signOut();
    }
    localStorage.removeItem("fitTariflerMember");
    localStorage.removeItem("fitTariflerProfile");
    localStorage.removeItem("fitTariflerWeeklyChange");
    window.location.href = "index.html";
  };

  document.querySelector("#logout")?.addEventListener("click", handleSecureLogout);
  document.querySelector("#secure-logout-link")?.addEventListener("click", handleSecureLogout);
}
})();


