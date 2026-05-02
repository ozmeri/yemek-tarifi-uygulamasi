(function () {
  const baseRecipes = [
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
      ingredients: ["3 yumurta", "60 g lor peyniri", "1 avuç ıspanak", "5 cherry domates", "1 tatlı kaşığı zeytinyağı"],
      steps: ["Ispanağı tavada hafifçe sotele.", "Yumurtayı lor peyniriyle çırp.", "Karışımı tavaya al ve kısık ateşte pişir.", "Domatesle birlikte servis et."],
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
      summary: "Öğle için doyurucu, lifli ve protein ağırlıklı bir tabak.",
      ingredients: ["120 g ızgara tavuk", "80 g haşlanmış kinoa", "marul", "salatalık", "limonlu sos"],
      steps: ["Sebzeleri doğra.", "Kinoayı ve tavuğu ekle.", "Limonlu sosu gezdir.", "Karıştırıp soğuk servis et."],
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
      ingredients: ["140 g somon", "brokoli", "kabak", "havuç", "limon", "dereotu"],
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
      ingredients: ["200 g süzme yoğurt", "1 yemek kaşığı chia", "yarım muz", "tarçın", "1 tatlı kaşığı fıstık ezmesi"],
      steps: ["Yoğurt ve chiayı karıştır.", "10 dakika dinlendir.", "Muz ve tarçını ekle.", "Fıstık ezmesiyle tamamla."],
      tags: ["ara öğün", "şekersiz", "hızlı"]
    },
    {
      name: "Mercimekli Sebze Çorbası",
      category: "Vejetaryen",
      calories: 310,
      protein: 18,
      carbs: 36,
      fat: 8,
      time: 25,
      color: "#f0c37d",
      summary: "Akşam için sıcak, ekonomik ve doyurucu bir çorba.",
      ingredients: ["kırmızı mercimek", "havuç", "kabak", "soğan", "kimyon", "zerdeçal"],
      steps: ["Sebzeleri doğra ve tencerede çevir.", "Mercimek ve suyu ekle.", "Baharatlarla pişir.", "Blenderdan geçirip servis et."],
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
      ingredients: ["1 tam buğday lavaş", "90 g hindi füme", "light labne", "roka", "salatalık", "hardal"],
      steps: ["Lavaşın içine labne ve hardal sür.", "Hindi ve sebzeleri yerleştir.", "Sıkıca sar.", "İki parçaya bölerek servis et."],
      tags: ["ofis", "taşıması kolay", "hızlı"]
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
      ingredients: ["1 kutu ton balığı", "4 yemek kaşığı haşlanmış nohut", "marul", "mısır", "limon", "maydanoz"],
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
      ingredients: ["2 kabak", "120 g tavuk göğsü", "domates sosu", "sarımsak", "fesleğen"],
      steps: ["Kabakları ince şeritler halinde kes.", "Tavuğu tavada pişir.", "Domates sosunu ekle.", "Kabakları son 3 dakika tavaya al."],
      tags: ["akşam", "hafif", "düşük karbonhidrat"]
    },
    {
      name: "Yulaflı Elma Pankek",
      category: "Fit Tatlı",
      calories: 335,
      protein: 19,
      carbs: 42,
      fat: 10,
      time: 18,
      color: "#f2d5a8",
      summary: "Tatlı kahvaltı isteyenler için daha kontrollü bir seçenek.",
      ingredients: ["1 yumurta", "4 yemek kaşığı yulaf", "yarım elma", "tarçın", "2 yemek kaşığı yoğurt"],
      steps: ["Yulafı rondodan geçir.", "Yumurta, elma ve tarçınla karıştır.", "Tavada iki tarafını pişir.", "Yoğurtla servis et."],
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
      summary: "Serin, ferah ve hafif bir öğle tabağı.",
      ingredients: ["semizotu", "3 yemek kaşığı haşlanmış bulgur", "süzme yoğurt", "nane", "salatalık"],
      steps: ["Semizotunu yıka ve ayıkla.", "Yoğurt, nane ve salatalığı karıştır.", "Bulguru ekle.", "Semizotu ile birleştir."],
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
      summary: "Protein odaklı, yanına salata ile tamamlanan doyurucu tabak.",
      ingredients: ["130 g yağsız dana eti", "mantar", "biber", "soğan", "karabiber", "kekik"],
      steps: ["Eti yüksek ateşte mühürle.", "Soğan ve biberi ekle.", "Mantarı ekleyip suyunu çektir.", "Baharatlarla servis et."],
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
      summary: "Dengeli yağ ve protein içeren modern kahvaltı seçeneği.",
      ingredients: ["1 dilim tam buğday ekmeği", "yarım avokado", "1 yumurta", "limon", "pul biber"],
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
      summary: "Çok kısa sürede hazırlanan hafif ve keskin aromalı salata.",
      ingredients: ["roka", "60 g beyaz peynir", "domates", "ceviz", "limon", "1 tatlı kaşığı zeytinyağı"],
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
      summary: "Pilav hissini koruyup karbonhidratı azaltmak isteyenlere.",
      ingredients: ["karnabahar", "120 g tavuk", "bezelye", "havuç", "soya sosu", "taze soğan"],
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
      summary: "Kahve yanına kontrollü, porsiyonluk tatlı alternatifi.",
      ingredients: ["3 yemek kaşığı yulaf", "1 yemek kaşığı kakao", "1 yemek kaşığı fıstık ezmesi", "2 yemek kaşığı yoğurt", "tarçın"],
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
      ingredients: ["140 g hindi kıyma", "marul", "kırmızı lahana", "salatalık", "yoğurtlu sos", "kimyon"],
      steps: ["Hindi kıymayı baharatla yoğur.", "Küçük köfteler yap ve pişir.", "Sebzeleri tabağa al.", "Köfteleri ve yoğurtlu sosu ekle."],
      tags: ["antrenman", "protein", "salata"]
    }
  ];

  const orderedRecipeTypes = ["Ana yemek", "Salata", "Çorba", "Kahvaltı", "Aperatif", "Tatlı"];

  function slugify(value = "") {
    return value
      .toString()
      .trim()
      .toLocaleLowerCase("tr-TR")
      .replace(/ç/g, "c")
      .replace(/ğ/g, "g")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ş/g, "s")
      .replace(/ü/g, "u")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "tarif";
  }

  function inferRecipeType(recipe) {
    const text = [recipe.name, recipe.category, recipe.summary, ...(recipe.ingredients || []), ...(recipe.tags || [])].join(" ").toLocaleLowerCase("tr-TR");
    const hasAny = (words) => words.some((item) => text.includes(item));
    const breakfastWords = ["kahvaltı", "kahvalti", "omlet", "tost", "yumurta", "menemen", "yulaf", "labne", "peynir", "lor", "avokado", "pankek"];
    const soupWords = ["çorba", "corba", "soup"];
    const saladWords = ["salata", "roka", "semizotu", "marul", "yeşillik", "yesillik"];
    const dessertWords = ["tatlı", "tatli", "muhallebi", "kup", "kurabiye", "kek", "puding", "brownie", "cheesecake"];
    const snackWords = ["ara öğün", "ara ogun", "atıştırmalık", "atistirmalik", "aperatif", "smoothie", "bar", "topları", "toplari"];
    const mainMealWords = ["tavuk", "hindi", "somon", "balık", "balik", "kıyma", "kiyma", "köfte", "kofte", "sote", "fırın", "firin", "pilav", "makarna", "ızgara", "izgara", "ana yemek", "et"];

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

  function normalizeRecipe(recipe, index = 0) {
    const type = recipe.type || inferRecipeType(recipe);
    return {
      ...recipe,
      id: recipe.id || slugify(recipe.name) || `tarif-${index + 1}`,
      type,
      category: recipe.category || type,
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

  window.fitBaseRecipes = baseRecipes;
  window.fitInferRecipeType = inferRecipeType;
  window.fitPrepareRecipeCollection = prepareRecipeCollection;
  window.fitOrderedRecipeTypes = orderedRecipeTypes;
  window.fitDefaultRecipes = prepareRecipeCollection(window.fitRecipeCatalog || []);
})();