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
    { name: "tavuk", label: "Tavuk", cook: "Tavuğu ku\u015fba\u015f\u0131 doğrayıp tavada suyunu \u00e7ekene kadar pişir.", allergens: [], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-chicken"] },
    { name: "hindi", label: "Hindi", cook: "Hindiyi ince dilimleyip tavada hafifçe kızart.", allergens: [], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-chicken"] },
    { name: "somon", label: "Somon", cook: "Somonu limon ve baharatla tatlandırip \u0131zgara veya fırında pişir.", allergens: ["fish"], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-fish"] },
    { name: "ton balığı", label: "Ton Balığı", cook: "Ton balığınin suyunu süzüp çatalla iri parçalara ayır.", allergens: ["fish"], avoidFor: ["gout"], dietBlock: ["vegan", "vegetarian", "no-fish"] },
    { name: "yumurta", label: "Yumurta", cook: "Yumurtayı çırpip kısık ateşte yumuşak kıvamda pişir.", allergens: ["egg"], avoidFor: ["cholesterol"], dietBlock: ["vegan"] },
    { name: "lor peyniri", label: "Lor Peynirli", cook: "Lor peynirini taze ot ve baharatla karıştır.", allergens: ["dairy"], avoidFor: [], dietBlock: ["vegan"] },
    { name: "mercimek", label: "Mercimek", cook: "Mercimeği yıkayip yumuşayana kadar haşla.", allergens: ["legume"], avoidFor: ["ibs", "gout"], dietBlock: [] },
    { name: "nohut", label: "Nohut", cook: "Haşlanmış nohudu sudan geçirip baharatla harmanla.", allergens: ["legume"], avoidFor: ["ibs", "gout"], dietBlock: [] },
    { name: "fasulye", label: "Fasulye", cook: "Haşlanmış fasulyeyi zeytinyağı ve baharatla tavada çevir.", allergens: ["legume"], avoidFor: ["ibs"], dietBlock: [] },
    { name: "tofu", label: "Tofu", cook: "Tofuyu küp doğrayıp tavada her y\u00fcz\u00fcn\u00fc kızart.", allergens: ["soy"], avoidFor: [], dietBlock: [] },
    { name: "dana", label: "Dana", cook: "Danayı ince doğrayıp yüksek ateşte kısa süre mühürle.", allergens: [], avoidFor: ["cholesterol", "heart"], dietBlock: ["vegan", "vegetarian", "no-red-meat"] },
    { name: "yoğurt", label: "Yoğurtlu", cook: "Yoğurdu limon ve baharatla puruzsüz bir sos haline getir.", allergens: ["dairy"], avoidFor: [], dietBlock: ["vegan"] }
  ];

  const vegetables = ["brokoli", "karnabahar", "kabak", "ıspanak", "semizotu", "roka", "marul", "salatalik", "domates", "biber", "havuç", "mantar", "patlıcan", "pazi", "bezelye", "enginar", "kereviz", "lahana", "mor lahana", "yesil fasulye"];
  const carbs = [
    { name: "bulgur", prep: "Bulguru sıcak suyla şişir.", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "kinoa", prep: "Kinoayı yıkayip tane tane haşla.", allergens: [], avoidFor: [] },
    { name: "karabuğday", prep: "Karabuğdayı haşlayıp fazla suyunu süz.", allergens: [], avoidFor: [] },
    { name: "yulaf", prep: "Yulafı az su veya yoğurtla yumuşat.", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "tam buğday lavaş", prep: "Lava\u015f\u0131 tavada kısa süre ısıt.", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "esmer pirinç", prep: "Esmer pirinci önceden haşlayıp dinlendir.", allergens: [], avoidFor: [] },
    { name: "tatlı patates", prep: "Tatlı patatesi küp doğrayıp fırında yumuşat.", allergens: [], avoidFor: [] },
    { name: "karnabahar pilavi", prep: "Karnabaharı rondodan geçirip tavada 4-5 dakika çevir.", allergens: [], avoidFor: ["ibs"] }
  ];
  const methods = ["Kase", "Salata", "Fırın", "Sote", "Çorba", "Wrap", "Omlet", "Tabak", "Bowl", "Pratik Öğün"];
  const sauces = ["limonlu sos", "yoğurtlu sos", "zeytinyağı", "naneli sos", "domates sosu", "hardallı sos", "tahinli sos", "baharatlı sos"];
  const tags = ["öğlen", "akşam", "kahvaltı", "ara öğün", "meal prep", "hızlı", "tok tutar", "hafif", "lifli", "pratik"];

  function pick(list, index, shift = 0) {
    return list[(index + shift) % list.length];
  }

  function unique(items) {
    return [...new Set(items.filter(Boolean))];
  }

  function displayFood(value) {
    const labels = {
      "salatalik": "salatalık",
      "havuc": "havuç",
      "havuç": "havuç",
      "patlican": "patlıcan",
      "patlıcan": "patlıcan",
      "pazi": "pazı",
      "yesil fasulye": "yeşil fasulye",
      "yesillik": "yeşillik",
      "karnabahar pilavi": "karnabahar pilavı",
      "karabugday": "karabuğday",
      "tam bugday lavas": "tam buğday lavaş",
      "esmer pirinc": "esmer pirinç",
      "tatli patates": "tatlı patates",
      "tatlı patates": "tatlı patates",
      "zeytinyagi": "zeytinyağı",
      "hardalli sos": "hardallı sos",
      "baharatli sos": "baharatlı sos",
      "kahvalti": "kahvaltı",
      "yogurt": "yoğurt",
      "yoğurt": "yoğurt",
      "ton baligi": "ton balığı",
      "ton balığı": "ton balığı"
    };
    return labels[value] || value;
  }

  function cap(value) {
    const label = displayFood(value);
    return label.charAt(0).toLocaleUpperCase("tr-TR") + label.slice(1);
  }

  function proteinByName(name) {
    return proteins.find((item) => item.name === name) || proteins[0];
  }

  function carbByName(name) {
    return carbs.find((item) => item.name === name) || carbs[0];
  }

  function chooseProtein(method, category, index) {
    if (method === "Omlet") return proteinByName("yumurta");
    if (method === "Çorba") return pick([proteinByName("mercimek"), proteinByName("nohut"), proteinByName("tavuk"), proteinByName("fasulye")], index);
    if (method === "Wrap") return pick([proteinByName("tavuk"), proteinByName("hindi"), proteinByName("tofu"), proteinByName("lor peyniri")], index);
    if (category.name === "Fit Tatlı") return pick([proteinByName("yoğurt"), proteinByName("lor peyniri"), proteinByName("yumurta")], index);
    if (category.name === "Vejetaryen") return pick([proteinByName("mercimek"), proteinByName("nohut"), proteinByName("fasulye"), proteinByName("tofu"), proteinByName("lor peyniri")], index);
    return pick(proteins, index, category.name.length);
  }

  function chooseCarb(method, lowCarb, index) {
    if (lowCarb) return carbByName("karnabahar pilavi");
    if (method === "Wrap") return carbByName("tam buğday lavaş");
    if (method === "Omlet") return carbByName("yulaf");
    if (method === "Çorba") return pick([carbByName("bulgur"), carbByName("karabuğday"), carbByName("esmer pirinç")], index);
    if (method === "Fırın") return pick([carbByName("tatlı patates"), carbByName("kinoa"), carbByName("esmer pirinç")], index);
    return pick(carbs, index, 3);
  }

  function vegetablePrepStep(items, context = "sote") {
    const rawItems = new Set(["salatalik", "domates", "marul", "roka", "semizotu"]);
    const labels = unique(items).map((item) => ({ raw: rawItems.has(item), label: cap(item) }));
    const rawLabels = labels.filter((item) => item.raw).map((item) => item.label);
    const cookLabels = labels.filter((item) => !item.raw).map((item) => item.label);
    const steps = [];
    const subject = (items) => items.map((item, index) => index ? item.charAt(0).toLocaleLowerCase("tr-TR") + item.slice(1) : item).join(", ");

    if (cookLabels.length) {
      const verb = context === "firin" ? "f\u0131r\u0131n kab\u0131na al" : "tavada 3-5 dakika sotele";
      steps.push(`${subject(cookLabels)}: y\u0131ka, do\u011fra ve ${verb}.`);
    }

    if (rawLabels.length) {
      steps.push(`${subject(rawLabels)}: \u00e7i\u011f kullanmak i\u00e7in y\u0131ka ve ince do\u011fra.`);
    }

    return steps.join(" ");
  }

  function buildSteps(method, protein, vegetableA, vegetableB, carb, sauce, lowCarb) {
    const vegetables = [vegetableA, vegetableB];
    const basePrep = `${cap(vegetableA)} ve ${displayFood(vegetableB)} malzemelerini yıka, ayıkla ve doğra.`;
    const carbPrep = lowCarb ? "Yeşillikleri yıka ve servis tabağına al." : carb.prep;
    const wrapVegetables = vegetablePrepStep(vegetables, "wrap");
    const cookedVegetables = vegetablePrepStep(vegetables, method === "Fırın" ? "firin" : "sote");

    const templates = {
      Kase: [protein.cook, carbPrep, cookedVegetables, `Tüm malzemeleri kaseye al, ${displayFood(sauce)} ile karıştır.`],
      Salata: [protein.cook, `${cap(vegetableA)}, ${displayFood(vegetableB)} ve yeşillikleri geniş kasede harmanla; pişmesi gereken sebze varsa önce kısa süre sotele.`, `${cap(protein.name)} ekleyip ${displayFood(sauce)} ile servis et.`],
      Fırın: [cookedVegetables, protein.cook, `${cap(sauce)} ekleyip 180 derecede sebzeler yumuşayana kadar pişir.`],
      Sote: [protein.cook, cookedVegetables, `${cap(sauce)} ile tatlandırıp sıcak servis et.`],
      Çorba: [basePrep, `${cap(vegetableA)}, ${displayFood(vegetableB)} ve ${displayFood(protein.name)} malzemesini tencereye al.`, "Üzerini geçecek kadar su ekleyip sebzeler yumuşayana kadar pişir.", "Gerekirse blenderdan geçirip ılık servis et."],
      Wrap: [carbPrep, protein.cook, wrapVegetables, `Lavaşın içine ${displayFood(sauce)} sür; pişmiş ve çiğ malzemeleri ekleyip sıkıca sar.`],
      Omlet: [cookedVegetables, protein.cook, "Yumurtalı karışımı ekleyip kısık ateşte pişir."],
      Tabak: [protein.cook, carbPrep, cookedVegetables, `Tabağa önce sebzeleri, sonra ana malzemeyi koyup ${displayFood(sauce)} ekle.`],
      Bowl: [protein.cook, carbPrep, cookedVegetables, `Kasede katmanlayıp ${displayFood(sauce)} ile tamamla.`],
      "Pratik Öğün": [protein.cook, carbPrep, cookedVegetables, `Tüm malzemeleri tek tabakta birleştirip ${displayFood(sauce)} ile servis et.`]
    };

    return templates[method] || [basePrep, protein.cook, carbPrep, cookedVegetables];
  }

  function makeRecipe(index) {
    const category = pick(categories, index);
    const method = pick(methods, index, 5);
    const lowCarb = category.goals.includes("low-carb");
    const protein = chooseProtein(method, category, index);
    const vegetableA = pick(vegetables, index, 2);
    const vegetableB = pick(vegetables, index, 7);
    const carb = chooseCarb(method, lowCarb, index);
    const sauce = pick(sauces, index, 1);
    const time = 10 + (index % 31);
    const calories = 240 + ((index * 37) % 360);
    const proteinValue = category.baseProtein + (index % 13);
    const carbsValue = lowCarb ? 10 + (index % 18) : 18 + (index % 45);
    const fat = 7 + (index % 24);
    const name = `${protein.label} ${cap(vegetableA)} ${method} ${index + 1}`;
    const ingredients = unique([
      protein.name,
      vegetableA,
      vegetableB,
      lowCarb ? "yesillik" : carb.name,
      sauce,
      "limon",
      "baharat"
    ]).map(displayFood);
    const allergens = unique([...(protein.allergens || []), ...(lowCarb ? [] : carb.allergens || [])]);
    const avoidFor = unique([...(protein.avoidFor || []), ...(lowCarb ? [] : carb.avoidFor || [])]);
    const goalTags = unique([...category.goals, calories <= 430 ? "weight-loss" : "balanced", proteinValue >= 35 ? "muscle" : "balanced", lowCarb ? "low-carb" : "balanced"]);
    const extraTags = unique([category.name.toLowerCase(), ...goalTags, pick(tags, index), pick(tags, index, 4), vegetableA, vegetableB, protein.name, method.toLowerCase()]);
    const summary = `${cap(vegetableA)}, ${displayFood(vegetableB)} ve ${displayFood(protein.name)} ile hazırlanan ${method.toLowerCase()} tarzı fit tarif.`;

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
      steps: buildSteps(method, protein, vegetableA, vegetableB, carb, sauce, lowCarb),
      tags: extraTags,
      allergens,
      avoidFor
    };
  }

  const catalog = Array.from({ length: 2000 }, (_, index) => makeRecipe(index));

  window.fitRecipeCatalog = catalog;
})();

