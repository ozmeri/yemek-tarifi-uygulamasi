(function () {
  const categories = [
    { name: "Yüksek Protein", color: "#dcebd5", goals: ["muscle", "balanced"], baseProtein: 34 },
    { name: "Yağ Yakımı", color: "#f3cf98", goals: ["weight-loss", "balanced"], baseProtein: 28 },
    { name: "Düşük Karbonhidrat", color: "#c8e1b4", goals: ["low-carb", "weight-loss"], baseProtein: 32 },
    { name: "Akdeniz", color: "#f1b08a", goals: ["balanced"], baseProtein: 26 },
    { name: "Vejetaryen", color: "#d6edc9", goals: ["balanced", "weight-loss"], baseProtein: 18 },
    { name: "Pratik", color: "#cfe4ee", goals: ["balanced"], baseProtein: 24 },
    { name: "Fit Tatlı", color: "#ead7f2", goals: ["balanced"], baseProtein: 14 },
    { name: "Çorba", color: "#f0c37d", goals: ["weight-loss", "balanced"], baseProtein: 16 }
  ];

  const proteins = [
    { name: "tavuk", label: "Tavuk", title: "Tavuklu", cook: "Tavuğu ince dilimle, az zeytinyağı ve baharatla suyunu çekene kadar pişir.", allergens: [], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-chicken"] },
    { name: "hindi", label: "Hindi", title: "Hindili", cook: "Hindi etini tavada kısa sürede renk alana kadar çevir.", allergens: [], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-chicken"] },
    { name: "somon", label: "Somon", title: "Somonlu", cook: "Somonu limon, karabiber ve az zeytinyağı ile fırında ya da tavada pişir.", allergens: ["fish"], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-fish"] },
    { name: "ton balığı", label: "Ton Balığı", title: "Ton Balıklı", cook: "Ton balığının suyunu süz, iri parçalar halinde hazırla.", allergens: ["fish"], avoidFor: ["gout"], dietBlock: ["vegan", "vegetarian", "no-fish"] },
    { name: "yumurta", label: "Yumurta", title: "Yumurtalı", cook: "Yumurtayı çırp ve tavada yumuşak kıvamda pişir.", allergens: ["egg"], avoidFor: ["cholesterol"], dietBlock: ["vegan"] },
    { name: "lor peyniri", label: "Lor Peyniri", title: "Lor Peynirli", cook: "Lor peynirini ince kıyılmış otlarla karıştır.", allergens: ["dairy"], avoidFor: [], dietBlock: ["vegan"] },
    { name: "mercimek", label: "Mercimek", title: "Mercimekli", cook: "Mercimeği yıkayıp diri kalmayacak şekilde haşla.", allergens: ["legume"], avoidFor: ["ibs", "gout"], dietBlock: [] },
    { name: "nohut", label: "Nohut", title: "Nohutlu", cook: "Haşlanmış nohudu süzüp baharatla hafifçe harmanla.", allergens: ["legume"], avoidFor: ["ibs", "gout"], dietBlock: [] },
    { name: "fasulye", label: "Fasulye", title: "Fasulyeli", cook: "Haşlanmış fasulyeyi az zeytinyağı ile tavada kısa süre çevir.", allergens: ["legume"], avoidFor: ["ibs"], dietBlock: [] },
    { name: "tofu", label: "Tofu", title: "Tofulu", cook: "Tofuyu küp doğra ve tavada dışı hafif renk alana kadar çevir.", allergens: ["soy"], avoidFor: [], dietBlock: [] },
    { name: "dana", label: "Dana", title: "Danalı", cook: "Dana etini yüksek ateşte kısa sürede mühürle.", allergens: [], avoidFor: ["cholesterol", "heart"], dietBlock: ["vegan", "vegetarian", "no-red-meat"] },
    { name: "yoğurt", label: "Yoğurt", title: "Yoğurtlu", cook: "Yoğurdu limon, nane ve az tuzla pürüzsüz bir sos haline getir.", allergens: ["dairy"], avoidFor: [], dietBlock: ["vegan"] }
  ];

  const vegetables = [
    { name: "brokoli", label: "Brokoli", cook: "Brokoliyi küçük çiçeklere ayır." },
    { name: "karnabahar", label: "Karnabahar", cook: "Karnabaharı küçük parçalara böl." },
    { name: "kabak", label: "Kabak", cook: "Kabağı ince yarım ay şeklinde doğra." },
    { name: "ıspanak", label: "Ispanak", cook: "Ispanağı yıkayıp iri doğra." },
    { name: "semizotu", label: "Semizotu", cook: "Semizotunu ayıkla ve bol suda yıka." },
    { name: "roka", label: "Roka", cook: "Rokayı yıkayıp suyunu süz." },
    { name: "marul", label: "Marul", cook: "Marulu iri parçalara ayır." },
    { name: "salatalık", label: "Salatalık", cook: "Salatalığı ince doğra." },
    { name: "domates", label: "Domates", cook: "Domatesi küp küp doğra." },
    { name: "biber", label: "Biber", cook: "Biberi ince şeritler halinde doğra." },
    { name: "havuç", label: "Havuç", cook: "Havucu ince dilimle ya da rendele." },
    { name: "mantar", label: "Mantar", cook: "Mantarı fazla suyunu salmayacak şekilde dilimle." },
    { name: "patlıcan", label: "Patlıcan", cook: "Patlıcanı küçük küpler halinde doğra." },
    { name: "pazı", label: "Pazı", cook: "Pazıyı yıkayıp kalın saplarını ayır." },
    { name: "bezelye", label: "Bezelye", cook: "Bezelyeyi hazırla ve ölçülü kullan." },
    { name: "enginar", label: "Enginar", cook: "Enginarı küçük dilimler halinde hazırla." },
    { name: "kereviz", label: "Kereviz", cook: "Kerevizi küçük küpler halinde doğra." },
    { name: "lahana", label: "Lahana", cook: "Lahanayı ince ince doğra." },
    { name: "mor lahana", label: "Mor Lahana", cook: "Mor lahanayı ince kıy." },
    { name: "yeşil fasulye", label: "Yeşil Fasulye", cook: "Yeşil fasulyeyi ayıklayıp küçük parçalara böl." }
  ];

  const breakfastProduce = [
    { name: "avokado", label: "Avokado", cook: "Avokadoyu dilimle ya da hafifçe ez." },
    { name: "domates", label: "Domates", cook: "Domatesi küp küp doğra." },
    { name: "salatalık", label: "Salatalık", cook: "Salatalığı ince doğra." },
    { name: "ıspanak", label: "Ispanak", cook: "Ispanağı yıkayıp iri doğra." },
    { name: "biber", label: "Biber", cook: "Biberi ince şeritler halinde doğra." },
    { name: "havuç", label: "Havuç", cook: "Havucu ince rendele." }
  ];

  const sweetProduce = [
    { name: "muz", label: "Muz", cook: "Muzu ez ya da ince dilimle." },
    { name: "elma", label: "Elma", cook: "Elmayı rendele ya da küçük küpler halinde doğra." },
    { name: "armut", label: "Armut", cook: "Armutu ince küpler halinde doğra." },
    { name: "çilek", label: "Çilek", cook: "Çileği yıkayıp küçük parçalara böl." },
    { name: "yaban mersini", label: "Yaban Mersini", cook: "Yaban mersinini yıkayıp hazırla." },
    { name: "kakao", label: "Kakao", cook: "Kakaoyu ölçülü şekilde karışıma ekle." }
  ];

  const carbs = [
    { name: "bulgur", label: "Bulgur", prep: "Bulguru sıcak suda şişir ya da kısa süre haşla.", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "kinoa", label: "Kinoa", prep: "Kinoayı yıkayıp tane tane haşla.", allergens: [], avoidFor: [] },
    { name: "karabuğday", label: "Karabuğday", prep: "Karabuğdayı haşlayıp fazla suyunu süz.", allergens: [], avoidFor: [] },
    { name: "yulaf", label: "Yulaf", prep: "Yulafı sütsüz ya da yoğurtlu bazda yumuşat.", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "tam buğday lavaş", label: "Tam Buğday Lavaş", prep: "Lavaşı tavada kısa süre ısıt.", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "esmer pirinç", label: "Esmer Pirinç", prep: "Esmer pirinci önceden haşlayıp dinlendir.", allergens: [], avoidFor: [] },
    { name: "tatlı patates", label: "Tatlı Patates", prep: "Tatlı patatesi küp doğrayıp fırında yumuşat.", allergens: [], avoidFor: [] },
    { name: "karnabahar pilavı", label: "Karnabahar Pilavı", prep: "Karnabaharı rondodan geçirip tavada kısa süre çevir.", allergens: [], avoidFor: ["ibs"] }
  ];

  const sauces = [
    { name: "limonlu sos", note: "limonlu hafif sos" },
    { name: "yoğurtlu sos", note: "yoğurtlu serin sos" },
    { name: "zeytinyağı", note: "zeytinyağı dokunuşu" },
    { name: "naneli sos", note: "naneli ferah sos" },
    { name: "domates sosu", note: "domates bazlı sıcak sos" },
    { name: "hardallı sos", note: "hardallı dengeli sos" },
    { name: "tahinli sos", note: "tahinli yoğun sos" },
    { name: "baharatlı sos", note: "baharatlı aromatik sos" }
  ];

  const flavorWords = ["Ferah", "Izgara", "Fırınlanmış", "Naneli", "Limonlu", "Renkli", "Dengeli", "Pratik", "Fit", "Akdeniz", "Yoğun Lezzetli", "Sebzeli"];
  const titleSuffixes = ["Tabağı", "Kasesi", "Bowl", "Salatası", "Tabağı", "Tavası", "Öğünü", "Karışımı"];
  const detailTags = ["öğlen", "akşam", "kahvaltı", "ara öğün", "meal prep", "hızlı", "tok tutar", "hafif", "lifli", "pratik"];

  const formatRules = [
    {
      key: "ana",
      methods: ["Fırın", "Sote", "Tabak", "Pratik Öğün"],
      categories: ["Yüksek Protein", "Yağ Yakımı", "Düşük Karbonhidrat", "Akdeniz", "Pratik"],
      name: (protein, v1, v2, carb, flavor, suffix) => `${protein.title} ${v1.label} ${v2.label} ${flavor} ${suffix}`,
      summary: (protein, v1, v2) => `${v1.label}, ${v2.label} ve ${protein.label.toLowerCase('tr-TR')} ile hazırlanan dengeli ve doyurucu ana öğün.`,
      steps: (protein, v1, v2, carb, sauce) => [
        `${v1.cook} ${v2.cook}`,
        protein.cook,
        `${carb.prep} Sebzeleri tavada ya da fırında yumuşat.`,
        `Tüm malzemeleri bir araya getir, ${sauce.name} ile tamamlayıp sıcak servis et.`
      ]
    },
    {
      key: "salata",
      methods: ["Salata", "Bowl"],
      categories: ["Akdeniz", "Vejetaryen", "Yağ Yakımı", "Pratik"],
      name: (protein, v1, v2, carb, flavor) => `${protein.title} ${v1.label} ${v2.label} ${flavor} Salatası`,
      summary: (protein, v1, v2) => `${protein.label} ve taze sebzelerle hazırlanan hafif ama tatmin edici salata.`,
      steps: (protein, v1, v2, carb, sauce) => [
        `${v1.cook} ${v2.cook}`,
        `${carb.prep} ${protein.cook}`,
        `Tüm malzemeleri geniş bir kasede birleştir.`,
        `${sauce.name} ekleyip karıştır ve soğuk ya da ılık servis et.`
      ]
    },
    {
      key: "kahvalti",
      methods: ["Omlet", "Bowl", "Pratik Öğün"],
      categories: ["Yüksek Protein", "Akdeniz", "Pratik", "Fit Tatlı"],
      breakfastOnly: true,
      name: (protein, v1, v2, carb, flavor) => `${flavor} ${v1.label} ${protein.label} Kahvaltısı`,
      summary: (protein) => `Güne dengeli başlamak için hazırlanan tok tutan kahvaltı seçeneği.`,
      steps: (protein, v1, v2, carb, sauce) => [
        `${v1.cook} ${v2.cook}`,
        `${carb.prep}`,
        `${protein.cook}`,
        `Malzemeleri tabakta birleştir, gerekirse ${sauce.name} ile tamamla ve kahvaltıda servis et.`
      ]
    },
    {
      key: "corba",
      methods: ["Çorba"],
      categories: ["Çorba", "Vejetaryen", "Yağ Yakımı"],
      name: (protein, v1, v2, carb, flavor) => `${protein.title} ${v1.label} ${v2.label} ${flavor} Çorbası`,
      summary: (protein, v1, v2) => `${protein.label} ve sebzelerle hazırlanan yumuşak içimli çorba.`,
      steps: (protein, v1, v2, carb) => [
        `${v1.cook} ${v2.cook}`,
        `${protein.cook}`,
        `${carb.prep} Tüm malzemeleri tencereye alıp üzerini geçecek kadar su ekle.`,
        `Sebzeler iyice yumuşayınca çorbayı kıvamına göre blenderdan geçirip servis et.`
      ]
    },
    {
      key: "tatli",
      methods: ["Bowl", "Pratik Öğün"],
      categories: ["Fit Tatlı"],
      sweetOnly: true,
      name: (protein, v1, v2, carb, flavor) => `${flavor} ${v1.label} ${v2.label} Fit Tatlı`,
      summary: () => `Daha dengeli malzemelerle hazırlanan hafif tatlı alternatifi.`,
      steps: (protein, v1, v2, carb, sauce) => [
        `${v1.cook} ${v2.cook}`,
        `${protein.cook}`,
        `${carb.prep}`,
        `Malzemeleri küçük bir kasede birleştir, ${sauce.name} ile lezzetlendir ve dinlendirerek servis et.`
      ]
    }
  ];

  function pick(list, index, shift = 0) {
    return list[(index + shift) % list.length];
  }

  function unique(items) {
    return [...new Set(items.filter(Boolean))];
  }

  function normalizeText(value) {
    return String(value || "")
      .toLocaleLowerCase("tr-TR")
      .replace(/\s+/g, " ")
      .trim();
  }

  function categoryByName(name) {
    return categories.find((item) => item.name === name) || categories[0];
  }

  function proteinByName(name) {
    return proteins.find((item) => item.name === name) || proteins[0];
  }

  function carbByName(name) {
    return carbs.find((item) => item.name === name) || carbs[0];
  }

  function chooseProtein(rule, category, index) {
    if (rule.key === "kahvalti") {
      return pick([proteinByName("yumurta"), proteinByName("lor peyniri"), proteinByName("yoğurt")], index);
    }
    if (rule.key === "tatli") {
      return pick([proteinByName("yoğurt"), proteinByName("lor peyniri"), proteinByName("yumurta")], index);
    }
    if (rule.key === "corba") {
      return pick([proteinByName("mercimek"), proteinByName("nohut"), proteinByName("fasulye"), proteinByName("tavuk")], index);
    }
    if (category.name === "Vejetaryen") {
      return pick([proteinByName("mercimek"), proteinByName("nohut"), proteinByName("fasulye"), proteinByName("tofu"), proteinByName("lor peyniri")], index);
    }
    return pick(proteins, index, category.name.length);
  }

  function chooseCarb(rule, category, index) {
    if (category.goals.includes("low-carb")) return carbByName("karnabahar pilavı");
    if (rule.key === "kahvalti") return pick([carbByName("yulaf"), carbByName("tam buğday lavaş"), carbByName("karabuğday")], index);
    if (rule.key === "corba") return pick([carbByName("bulgur"), carbByName("esmer pirinç"), carbByName("kinoa")], index);
    if (rule.key === "salata") return pick([carbByName("kinoa"), carbByName("bulgur"), carbByName("esmer pirinç"), carbByName("karabuğday")], index);
    if (rule.key === "tatli") return pick([carbByName("yulaf"), carbByName("karabuğday")], index);
    return pick(carbs, index, 3);
  }

  function chooseRule(index) {
    return formatRules[index % formatRules.length];
  }

  function chooseCategory(rule, index) {
    return categoryByName(rule.categories[index % rule.categories.length]);
  }

  function chooseVegetables(rule, index) {
    const source = rule.key === "tatli"
      ? sweetProduce
      : rule.key === "kahvalti"
        ? breakfastProduce
        : vegetables;
    const start = Math.floor(index / 5) % source.length;
    const first = source[start];
    let second = source[(start + 3 + (index % 5)) % source.length];
    if (second.name === first.name) {
      second = source[(start + 1) % source.length];
    }
    return [first, second];
  }

  function chooseSauce(rule, index) {
    if (rule.key === "tatli") return { name: "tarçınsız hafif dokunuş", note: "hafif dokunuş" };
    return sauces[(index + Math.floor(index / 7)) % sauces.length];
  }

  function buildName(rule, protein, v1, v2, carb, flavor, suffix) {
    return rule.name(protein, v1, v2, carb, flavor, suffix)
      .replace(/\s+/g, " ")
      .trim();
  }

  function buildSummary(rule, protein, v1, v2) {
    return rule.summary(protein, v1, v2)
      .replace(/\s+/g, " ")
      .trim();
  }

  function makeRecipe(index) {
    const rule = chooseRule(index);
    const category = chooseCategory(rule, Math.floor(index / formatRules.length));
    const protein = chooseProtein(rule, category, Math.floor(index / 9));
    const [vegetableA, vegetableB] = chooseVegetables(rule, index);
    const carb = chooseCarb(rule, category, Math.floor(index / 11));
    const sauce = chooseSauce(rule, index);
    const flavor = flavorWords[Math.floor(index / 13) % flavorWords.length];
    const suffix = titleSuffixes[Math.floor(index / 17) % titleSuffixes.length];
    const name = buildName(rule, protein, vegetableA, vegetableB, carb, flavor, suffix);
    const summary = buildSummary(rule, protein, vegetableA, vegetableB);
    const time = 10 + (index % 28);
    const calories = 230 + ((index * 29) % 340);
    const proteinValue = category.baseProtein + (index % 12);
    const carbsValue = category.goals.includes("low-carb") ? 10 + (index % 14) : 16 + (index % 38);
    const fat = 7 + (index % 18);
    const ingredients = unique([
      protein.name,
      vegetableA.name,
      vegetableB.name,
      carb.name,
      sauce.name,
      "limon",
      "baharat"
    ]);
    const allergens = unique([...(protein.allergens || []), ...(carb.allergens || [])]);
    const avoidFor = unique([...(protein.avoidFor || []), ...(carb.avoidFor || [])]);
    const tags = unique([
      ...category.goals,
      category.name.toLocaleLowerCase("tr-TR"),
      detailTags[index % detailTags.length],
      detailTags[(index + 3) % detailTags.length],
      vegetableA.name,
      vegetableB.name,
      protein.name,
      rule.key === "kahvalti" ? "kahvaltı" : rule.key === "tatli" ? "tatlı" : rule.key === "salata" ? "salata" : rule.key === "corba" ? "çorba" : "ana öğün"
    ]);
    const steps = rule.steps(protein, vegetableA, vegetableB, carb, sauce)
      .map((step) => step.replace(/\s+/g, " ").trim());

    return {
      id: `catalog-${String(index + 1).padStart(4, "0")}`,
      name,
      category: category.name,
      calories,
      protein: proteinValue,
      carbs: carbsValue,
      fat,
      time,
      color: category.color,
      summary,
      note: summary,
      ingredients,
      steps,
      tags,
      allergens,
      avoidFor
    };
  }

  const rawCatalog = Array.from({ length: 4200 }, (_, index) => makeRecipe(index));
  const seenNames = new Set();
  const catalog = rawCatalog.filter((recipe) => {
    const key = normalizeText(recipe.name);
    if (seenNames.has(key)) return false;
    seenNames.add(key);
    return true;
  });

  window.fitRecipeCatalog = catalog;
})();

