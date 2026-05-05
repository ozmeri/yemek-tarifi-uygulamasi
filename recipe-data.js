(function () {
  const baseRecipes = [
    {
      name: "Protein Omlet Bowl",
      category: "Y\u00fcksek Protein",
      calories: 420,
      protein: 36,
      carbs: 18,
      fat: 22,
      time: 12,
      color: "#dcebd5",
      summary: "G\u00fcne tok ve dengeli ba\u015flamak i\u00e7in pratik omlet kasesi.",
      ingredients: ["3 yumurta", "60 g lor peyniri", "1 avu\u00e7 \u0131spanak", "5 cherry domates", "1 tatl\u0131 ka\u015f\u0131\u011f\u0131 zeytinya\u011f\u0131"],
      steps: ["Ispana\u011f\u0131 tavada hafif\u00e7e sotele.", "Yumurtay\u0131 lor peyniriyle \u00e7\u0131rp.", "Kar\u0131\u015f\u0131m\u0131 tavaya al ve k\u0131s\u0131k ate\u015fte pi\u015fir.", "Domatesle birlikte servis et."],
      tags: ["kahvalt\u0131", "tok tutar", "d\u00fc\u015f\u00fck karbonhidrat"]
    },
    {
      name: "Tavuklu Kinoa Salatas\u0131",
      category: "Ya\u011f Yak\u0131m\u0131",
      calories: 465,
      protein: 41,
      carbs: 32,
      fat: 14,
      time: 20,
      color: "#f3cf98",
      summary: "\u00d6\u011fle i\u00e7in doyurucu, lifli ve protein a\u011f\u0131rl\u0131kl\u0131 bir tabak.",
      ingredients: ["120 g \u0131zgara tavuk", "80 g ha\u015flanm\u0131\u015f kinoa", "marul", "salatal\u0131k", "limonlu sos"],
      steps: ["Sebzeleri do\u011fra.", "Kinoay\u0131 ve tavu\u011fu ekle.", "Limonlu sosu gezdir.", "Kar\u0131\u015ft\u0131r\u0131p so\u011fuk servis et."],
      tags: ["\u00f6\u011flen", "meal prep", "lifli"]
    },
    {
      name: "Somon ve F\u0131r\u0131n Sebze",
      category: "Akdeniz",
      calories: 510,
      protein: 38,
      carbs: 24,
      fat: 28,
      time: 28,
      color: "#f1b08a",
      summary: "Sa\u011fl\u0131kl\u0131 ya\u011f dengesi olan, ak\u015fam i\u00e7in g\u00fc\u00e7l\u00fc bir tabak.",
      ingredients: ["140 g somon", "brokoli", "kabak", "havu\u00e7", "limon", "dereotu"],
      steps: ["Sebzeleri zeytinya\u011f\u0131 ile harmanla.", "Somonu limon ve dereotu ile tatland\u0131r.", "Hepsini f\u0131r\u0131nda pi\u015fir.", "S\u0131cak servis et."],
      tags: ["omega 3", "ak\u015fam", "doyurucu"]
    },
    {
      name: "Yo\u011furtlu Chia Kup",
      category: "Fit Tatl\u0131",
      calories: 255,
      protein: 17,
      carbs: 19,
      fat: 11,
      time: 6,
      color: "#ead7f2",
      summary: "Tatl\u0131 krizini daha kontroll\u00fc ge\u00e7irmek i\u00e7in hafif ara \u00f6\u011f\u00fcn.",
      ingredients: ["200 g s\u00fczme yo\u011furt", "1 yemek ka\u015f\u0131\u011f\u0131 chia", "yar\u0131m muz", "tar\u00e7\u0131n", "1 tatl\u0131 ka\u015f\u0131\u011f\u0131 f\u0131st\u0131k ezmesi"],
      steps: ["Yo\u011furt ve chiay\u0131 kar\u0131\u015ft\u0131r.", "10 dakika dinlendir.", "Muz ve tar\u00e7\u0131n\u0131 ekle.", "F\u0131st\u0131k ezmesiyle tamamla."],
      tags: ["ara \u00f6\u011f\u00fcn", "\u015fekersiz", "h\u0131zl\u0131"]
    },
    {
      name: "Mercimekli Sebze \u00c7orbas\u0131",
      category: "Vejetaryen",
      calories: 310,
      protein: 18,
      carbs: 36,
      fat: 8,
      time: 25,
      color: "#f0c37d",
      summary: "Ak\u015fam i\u00e7in s\u0131cak, ekonomik ve doyurucu bir \u00e7orba.",
      ingredients: ["k\u0131rm\u0131z\u0131 mercimek", "havu\u00e7", "kabak", "so\u011fan", "kimyon", "zerde\u00e7al"],
      steps: ["Sebzeleri do\u011fra ve tencerede \u00e7evir.", "Mercimek ve suyu ekle.", "Baharatlarla pi\u015fir.", "Blenderdan ge\u00e7irip servis et."],
      tags: ["\u00e7orba", "ekonomik", "lifli"]
    },
    {
      name: "Hindi F\u00fcmeli Tam Bu\u011fday Wrap",
      category: "Pratik",
      calories: 390,
      protein: 33,
      carbs: 29,
      fat: 13,
      time: 10,
      color: "#cfe4ee",
      summary: "Ofiste veya d\u0131\u015far\u0131da kolay ta\u015f\u0131nabilen dengeli \u00f6\u011f\u00fcn.",
      ingredients: ["1 tam bu\u011fday lava\u015f", "90 g hindi f\u00fcme", "light labne", "roka", "salatal\u0131k", "hardal"],
      steps: ["Lava\u015f\u0131n i\u00e7ine labne ve hardal s\u00fcr.", "Hindi ve sebzeleri yerle\u015ftir.", "S\u0131k\u0131ca sar.", "\u0130ki par\u00e7aya b\u00f6lerek servis et."],
      tags: ["ofis", "ta\u015f\u0131mas\u0131 kolay", "h\u0131zl\u0131"]
    },
    {
      name: "Nohutlu Ton Bal\u0131\u011f\u0131 Kasesi",
      category: "Y\u00fcksek Protein",
      calories: 445,
      protein: 39,
      carbs: 34,
      fat: 15,
      time: 11,
      color: "#d8e8c2",
      summary: "Ocak a\u00e7madan haz\u0131rlanan protein ve lif dengesi y\u00fcksek kase.",
      ingredients: ["1 kutu ton bal\u0131\u011f\u0131", "4 yemek ka\u015f\u0131\u011f\u0131 ha\u015flanm\u0131\u015f nohut", "marul", "m\u0131s\u0131r", "limon", "maydanoz"],
      steps: ["Nohudu sudan ge\u00e7ir.", "Ton bal\u0131\u011f\u0131 ve sebzeleri kaseye al.", "Limon ve maydanoz ekle.", "Kar\u0131\u015ft\u0131r\u0131p servis et."],
      tags: ["ocaks\u0131z", "\u00f6\u011flen", "lifli"]
    },
    {
      name: "Kabak Spagetti Tavuklu",
      category: "D\u00fc\u015f\u00fck Karbonhidrat",
      calories: 360,
      protein: 37,
      carbs: 15,
      fat: 17,
      time: 22,
      color: "#c8e1b4",
      summary: "Makarna hissi veren ama daha hafif bir ak\u015fam alternatifi.",
      ingredients: ["2 kabak", "120 g tavuk g\u00f6\u011fs\u00fc", "domates sosu", "sar\u0131msak", "fesle\u011fen"],
      steps: ["Kabaklar\u0131 ince \u015feritler halinde kes.", "Tavu\u011fu tavada pi\u015fir.", "Domates sosunu ekle.", "Kabaklar\u0131 son 3 dakika tavaya al."],
      tags: ["ak\u015fam", "hafif", "d\u00fc\u015f\u00fck karbonhidrat"]
    },
    {
      name: "Yulafl\u0131 Elma Pankek",
      category: "Fit Tatl\u0131",
      calories: 335,
      protein: 19,
      carbs: 42,
      fat: 10,
      time: 18,
      color: "#f2d5a8",
      summary: "Tatl\u0131 kahvalt\u0131 isteyenler i\u00e7in daha kontroll\u00fc bir se\u00e7enek.",
      ingredients: ["1 yumurta", "4 yemek ka\u015f\u0131\u011f\u0131 yulaf", "yar\u0131m elma", "tar\u00e7\u0131n", "2 yemek ka\u015f\u0131\u011f\u0131 yo\u011furt"],
      steps: ["Yulaf\u0131 rondodan ge\u00e7ir.", "Yumurta, elma ve tar\u00e7\u0131nla kar\u0131\u015ft\u0131r.", "Tavada iki taraf\u0131n\u0131 pi\u015fir.", "Yo\u011furtla servis et."],
      tags: ["kahvalt\u0131", "tatl\u0131", "yulaf"]
    },
    {
      name: "Bulgurlu Yo\u011furtlu Semizotu",
      category: "Vejetaryen",
      calories: 285,
      protein: 15,
      carbs: 34,
      fat: 9,
      time: 14,
      color: "#d6edc9",
      summary: "Serin, ferah ve hafif bir \u00f6\u011fle taba\u011f\u0131.",
      ingredients: ["semizotu", "3 yemek ka\u015f\u0131\u011f\u0131 ha\u015flanm\u0131\u015f bulgur", "s\u00fczme yo\u011furt", "nane", "salatal\u0131k"],
      steps: ["Semizotunu y\u0131ka ve ay\u0131kla.", "Yo\u011furt, nane ve salatal\u0131\u011f\u0131 kar\u0131\u015ft\u0131r.", "Bulguru ekle.", "Semizotu ile birle\u015ftir."],
      tags: ["ferah", "\u00f6\u011flen", "vejetaryen"]
    },
    {
      name: "Etli Mantar Sote",
      category: "Y\u00fcksek Protein",
      calories: 470,
      protein: 44,
      carbs: 16,
      fat: 24,
      time: 26,
      color: "#d8c6ad",
      summary: "Protein odakl\u0131, yan\u0131na salata ile tamamlanan doyurucu tabak.",
      ingredients: ["130 g ya\u011fs\u0131z dana eti", "mantar", "biber", "so\u011fan", "karabiber", "kekik"],
      steps: ["Eti y\u00fcksek ate\u015fte m\u00fch\u00fcrle.", "So\u011fan ve biberi ekle.", "Mantar\u0131 ekleyip suyunu \u00e7ektir.", "Baharatlarla servis et."],
      tags: ["ak\u015fam", "kas koruma", "doyurucu"]
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
      summary: "Dengeli ya\u011f ve protein i\u00e7eren modern kahvalt\u0131 se\u00e7ene\u011fi.",
      ingredients: ["1 dilim tam bu\u011fday ekme\u011fi", "yar\u0131m avokado", "1 yumurta", "limon", "pul biber"],
      steps: ["Ekme\u011fi k\u0131zart.", "Avokadoyu limonla ez.", "Yumurtay\u0131 pi\u015fir.", "Hepsini \u00fcst \u00fcste koyup servis et."],
      tags: ["kahvalt\u0131", "akdeniz", "tok tutar"]
    },
    {
      name: "Peynirli Roka Salatas\u0131",
      category: "Pratik",
      calories: 275,
      protein: 20,
      carbs: 12,
      fat: 16,
      time: 8,
      color: "#dbe7b8",
      summary: "\u00c7ok k\u0131sa s\u00fcrede haz\u0131rlanan hafif ve keskin aromal\u0131 salata.",
      ingredients: ["roka", "60 g beyaz peynir", "domates", "ceviz", "limon", "1 tatl\u0131 ka\u015f\u0131\u011f\u0131 zeytinya\u011f\u0131"],
      steps: ["Rokay\u0131 y\u0131ka.", "Peynir ve domatesi ekle.", "Cevizi serp.", "Limonlu sosla kar\u0131\u015ft\u0131r."],
      tags: ["8 dakika", "salata", "hafif"]
    },
    {
      name: "Karnabahar Pilav\u0131 Tavuklu",
      category: "D\u00fc\u015f\u00fck Karbonhidrat",
      calories: 385,
      protein: 40,
      carbs: 18,
      fat: 16,
      time: 24,
      color: "#efe6c8",
      summary: "Pilav hissini koruyup karbonhidrat\u0131 azaltmak isteyenlere.",
      ingredients: ["karnabahar", "120 g tavuk", "bezelye", "havu\u00e7", "soya sosu", "taze so\u011fan"],
      steps: ["Karnabahar\u0131 rondodan ge\u00e7ir.", "Tavu\u011fu pi\u015fir.", "Sebzeleri ekle.", "Karnabahar\u0131 son 5 dakika tavada \u00e7evir."],
      tags: ["d\u00fc\u015f\u00fck karbonhidrat", "ak\u015fam", "doyurucu"]
    },
    {
      name: "Kakaolu Protein Toplar\u0131",
      category: "Fit Tatl\u0131",
      calories: 220,
      protein: 14,
      carbs: 21,
      fat: 9,
      time: 9,
      color: "#d6b6a8",
      summary: "Kahve yan\u0131na kontroll\u00fc, porsiyonluk tatl\u0131 alternatifi.",
      ingredients: ["3 yemek ka\u015f\u0131\u011f\u0131 yulaf", "1 yemek ka\u015f\u0131\u011f\u0131 kakao", "1 yemek ka\u015f\u0131\u011f\u0131 f\u0131st\u0131k ezmesi", "2 yemek ka\u015f\u0131\u011f\u0131 yo\u011furt", "tar\u00e7\u0131n"],
      steps: ["T\u00fcm malzemeleri kar\u0131\u015ft\u0131r.", "K\u0131vam alana kadar yo\u011fur.", "K\u00fc\u00e7\u00fck toplar yap.", "10 dakika buzdolab\u0131nda beklet."],
      tags: ["tatl\u0131", "ara \u00f6\u011f\u00fcn", "porsiyon"]
    },
    {
      name: "Hindi K\u00f6fteli Salata Taba\u011f\u0131",
      category: "Ya\u011f Yak\u0131m\u0131",
      calories: 430,
      protein: 43,
      carbs: 22,
      fat: 18,
      time: 30,
      color: "#efc0a6",
      summary: "Antrenman sonras\u0131 i\u00e7in protein a\u011f\u0131rl\u0131kl\u0131 temiz tabak.",
      ingredients: ["140 g hindi k\u0131yma", "marul", "k\u0131rm\u0131z\u0131 lahana", "salatal\u0131k", "yo\u011furtlu sos", "kimyon"],
      steps: ["Hindi k\u0131ymay\u0131 baharatla yo\u011fur.", "K\u00fc\u00e7\u00fck k\u00f6fteler yap ve pi\u015fir.", "Sebzeleri taba\u011fa al.", "K\u00f6fteleri ve yo\u011furtlu sosu ekle."],
      tags: ["antrenman", "protein", "salata"]
    }
  ];

  const orderedRecipeTypes = ["Ana yemek", "Salata", "\u00c7orba", "Kahvalt\u0131", "Tatl\u0131"];

  const recipeOverrides = {
    "Protein Omlet Bowl": { type: "Kahvalt\u0131", category: "Kahvalt\u0131" }
  };

  function slugify(value = "") {
    return value
      .toString()
      .trim()
      .toLocaleLowerCase("tr-TR")
      .replace(/\u00e7/g, "c")
      .replace(/\u011f/g, "g")
      .replace(/\u0131/g, "i")
      .replace(/\u00f6/g, "o")
      .replace(/\u015f/g, "s")
      .replace(/\u00fc/g, "u")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "tarif";
  }

  function inferRecipeType(recipe) {
    const nameText = String(recipe.name || "").toLocaleLowerCase("tr-TR");
    const text = [recipe.name, recipe.category, recipe.summary, ...(recipe.tags || [])].join(" ").toLocaleLowerCase("tr-TR");
    const tags = (recipe.tags || []).map((item) => String(item).toLocaleLowerCase("tr-TR"));
    const hasAny = (words) => words.some((item) => text.includes(item));
    const hasTag = (words) => words.some((item) => tags.some((tag) => tag.includes(item)));

    const breakfastWords = ["kahvalt\u0131", "kahvalti", "omlet", "tost", "yumurta", "menemen", "yulaf", "labne", "peynir", "lor", "avokado", "pankek", "granola", "m\u00fcsli", "musli", "bowl"];
    const soupWords = ["\u00e7orba", "corba", "soup"];
    const saladWords = ["salata", "roka", "semizotu", "marul", "ye\u015fillik", "yesillik"];
    const dessertWords = ["tatl\u0131", "tatli", "muhallebi", "kup", "kurabiye", "kek", "puding", "brownie", "cheesecake"];
    const snackWords = ["ara \u00f6\u011f\u00fcn", "ara ogun", "at\u0131\u015ft\u0131rmal\u0131k", "atistirmalik", "aperatif", "smoothie", "bar", "toplar\u0131", "toplari", "kefir", "meyve"];
    const mainMealWords = ["tavuk", "hindi", "somon", "bal\u0131k", "balik", "k\u0131yma", "kiyma", "k\u00f6fte", "kofte", "sote", "f\u0131r\u0131n", "firin", "pilav", "makarna", "\u0131zgara", "izgara", "ana yemek", "et", "g\u00fcve\u00e7", "guvec"];

    if (hasTag(["kahvalt\u0131", "kahvalti"])) return "Kahvalt\u0131";
    if (hasTag(["salata"])) return "Salata";
    if (hasTag(["\u00e7orba", "corba"])) return "\u00c7orba";
    if (hasTag(["tatl\u0131", "tatli"])) return "Tatl\u0131";
    if (hasTag(["ara \u00f6\u011f\u00fcn", "ara ogun", "aperatif", "at\u0131\u015ft\u0131rmal\u0131k", "atistirmalik"])) return "Ana yemek";
    if (nameText.includes("\u00e7orba") || nameText.includes("corba") || nameText.includes("soup")) return "\u00c7orba";
    if (nameText.includes("kahvalt\u0131") || nameText.includes("kahvalti") || nameText.includes("omlet")) return "Kahvalt\u0131";

    const breakfastMatch = hasAny(breakfastWords);
    const soupMatch = hasAny(soupWords);
    const saladMatch = hasAny(saladWords);
    const dessertMatch = hasAny(dessertWords);
    const snackMatch = hasAny(snackWords);
    const mainMealMatch = hasAny(mainMealWords);

    if (soupMatch) return "\u00c7orba";
    if (saladMatch && !breakfastMatch) return "Salata";
    if (dessertMatch && !breakfastMatch) return "Tatl\u0131";
    if (breakfastMatch) return "Kahvalt\u0131";
    if (snackMatch || (recipe.calories <= 220 && recipe.protein <= 12 && !saladMatch && !soupMatch && !dessertMatch)) return "Ana yemek";
    if (mainMealMatch) return "Ana yemek";
    if (recipe.protein >= 22 || recipe.calories >= 360) return "Ana yemek";
    return "Ana yemek";
  }

  function normalizeRecipe(recipe, index = 0) {
    const override = recipeOverrides[recipe.name] || {};
    const type = override.type || inferRecipeType(recipe);
    return {
      ...recipe,
      ...override,
      id: recipe.id || slugify(recipe.name) || `tarif-${index + 1}`,
      type,
      category: override.category || recipe.category || type,
      color: recipe.color || ["#dcebd5", "#f3cf98", "#f1b08a", "#ead7f2", "#cfe4ee", "#d8e8c2"][index % 6],
      ingredients: Array.isArray(recipe.ingredients) ? recipe.ingredients : [],
      steps: Array.isArray(recipe.steps) ? recipe.steps : [],
      tags: Array.isArray(recipe.tags) ? recipe.tags : []
    };
  }

  function prepareRecipeCollection(extraRecipes = []) {
    const merged = [...baseRecipes, ...extraRecipes].map((recipe, index) => normalizeRecipe({ ...recipe }, index));
    const uniqueRecipes = [];
    const seenRecipeNames = new Set();

    merged.forEach((recipe) => {
      const key = recipe.name.trim().toLocaleLowerCase("tr-TR");
      if (!key || seenRecipeNames.has(key)) return;
      seenRecipeNames.add(key);
      uniqueRecipes.push(recipe);
    });

    return uniqueRecipes;
  }

  window.fitRecipeOverrides = recipeOverrides;
  window.fitBaseRecipes = baseRecipes;
  window.fitInferRecipeType = inferRecipeType;
  window.fitPrepareRecipeCollection = prepareRecipeCollection;
  window.fitOrderedRecipeTypes = orderedRecipeTypes;
  window.fitDefaultRecipes = prepareRecipeCollection(window.fitRecipeCatalog || []);
})();

