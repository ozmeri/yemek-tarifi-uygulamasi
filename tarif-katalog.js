(function () {
  const categories = [
    { name: "Yuksek Protein", color: "#dcebd5", goals: ["muscle", "balanced"], baseProtein: 34 },
    { name: "Yag Yakimi", color: "#f3cf98", goals: ["weight-loss", "balanced"], baseProtein: 28 },
    { name: "Dusuk Karbonhidrat", color: "#c8e1b4", goals: ["low-carb", "weight-loss"], baseProtein: 32 },
    { name: "Akdeniz", color: "#f1b08a", goals: ["balanced"], baseProtein: 26 },
    { name: "Vejetaryen", color: "#d6edc9", goals: ["balanced", "weight-loss"], baseProtein: 18 },
    { name: "Pratik", color: "#cfe4ee", goals: ["balanced"], baseProtein: 24 },
    { name: "Fit Tatli", color: "#ead7f2", goals: ["balanced"], baseProtein: 14 },
    { name: "Corba", color: "#f0c37d", goals: ["weight-loss", "balanced"], baseProtein: 16 }
  ];

  const proteins = [
    { name: "tavuk", label: "Tavuk", cook: "Tavugu kusbasi dograyip tavada suyunu cekene kadar pisir.", allergens: [], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-chicken"] },
    { name: "hindi", label: "Hindi", cook: "Hindiyi ince dilimleyip tavada hafifce kizart.", allergens: [], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-chicken"] },
    { name: "somon", label: "Somon", cook: "Somonu limon ve baharatla tatlandirip izgara veya firinda pisir.", allergens: ["fish"], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-fish"] },
    { name: "ton baligi", label: "Ton Baligi", cook: "Ton baliginin suyunu suzup catalla iri parcalara ayir.", allergens: ["fish"], avoidFor: ["gout"], dietBlock: ["vegan", "vegetarian", "no-fish"] },
    { name: "yumurta", label: "Yumurta", cook: "Yumurtayi cirpip kisik ateste yumusak kivamda pisir.", allergens: ["egg"], avoidFor: ["cholesterol"], dietBlock: ["vegan"] },
    { name: "lor peyniri", label: "Lor Peynirli", cook: "Lor peynirini taze ot ve baharatla karistir.", allergens: ["dairy"], avoidFor: [], dietBlock: ["vegan"] },
    { name: "mercimek", label: "Mercimek", cook: "Mercimegi yikayip yumusayana kadar hasla.", allergens: ["legume"], avoidFor: ["ibs", "gout"], dietBlock: [] },
    { name: "nohut", label: "Nohut", cook: "Haslanmis nohudu sudan gecirip baharatla harmanla.", allergens: ["legume"], avoidFor: ["ibs", "gout"], dietBlock: [] },
    { name: "fasulye", label: "Fasulye", cook: "Haslanmis fasulyeyi zeytinyagi ve baharatla tavada cevir.", allergens: ["legume"], avoidFor: ["ibs"], dietBlock: [] },
    { name: "tofu", label: "Tofu", cook: "Tofuyu kup dograyip tavada her yuzunu kizart.", allergens: ["soy"], avoidFor: [], dietBlock: [] },
    { name: "dana", label: "Dana", cook: "Danayi ince dograyip yuksek ateste kisa sure muhurle.", allergens: [], avoidFor: ["cholesterol", "heart"], dietBlock: ["vegan", "vegetarian", "no-red-meat"] },
    { name: "yogurt", label: "Yogurtlu", cook: "Yogurdu limon ve baharatla puruzsuz bir sos haline getir.", allergens: ["dairy"], avoidFor: [], dietBlock: ["vegan"] }
  ];

  const vegetables = ["brokoli", "karnabahar", "kabak", "ispanak", "semizotu", "roka", "marul", "salatalik", "domates", "biber", "havuc", "mantar", "patlican", "pazi", "bezelye", "enginar", "kereviz", "lahana", "mor lahana", "yesil fasulye"];
  const carbs = [
    { name: "bulgur", prep: "Bulguru sicak suyla sisir.", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "kinoa", prep: "Kinoayi yikayip tane tane hasla.", allergens: [], avoidFor: [] },
    { name: "karabugday", prep: "Karabugdayi haslayip fazla suyunu suz.", allergens: [], avoidFor: [] },
    { name: "yulaf", prep: "Yulafi az su veya yogurtla yumusat.", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "tam bugday lavas", prep: "Lavasi tavada kisa sure isit.", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "esmer pirinc", prep: "Esmer pirinci onceden haslayip dinlendir.", allergens: [], avoidFor: [] },
    { name: "tatli patates", prep: "Tatli patatesi kup dograyip firinda yumusat.", allergens: [], avoidFor: [] },
    { name: "karnabahar pilavi", prep: "Karnabahari rondodan gecirip tavada 4-5 dakika cevir.", allergens: [], avoidFor: ["ibs"] }
  ];
  const methods = ["Kase", "Salata", "Firin", "Sote", "Corba", "Wrap", "Omlet", "Tabak", "Bowl", "Pratik Ogun"];
  const sauces = ["limonlu sos", "yogurtlu sos", "zeytinyagi", "naneli sos", "domates sosu", "hardalli sos", "tahinli sos", "baharatli sos"];
  const tags = ["oglen", "aksam", "kahvalti", "ara ogun", "meal prep", "hizli", "tok tutar", "hafif", "lifli", "pratik"];

  function pick(list, index, shift = 0) {
    return list[(index + shift) % list.length];
  }

  function unique(items) {
    return [...new Set(items.filter(Boolean))];
  }

  function cap(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function proteinByName(name) {
    return proteins.find((item) => item.name === name) || proteins[0];
  }

  function carbByName(name) {
    return carbs.find((item) => item.name === name) || carbs[0];
  }

  function chooseProtein(method, category, index) {
    if (method === "Omlet") return proteinByName("yumurta");
    if (method === "Corba") return pick([proteinByName("mercimek"), proteinByName("nohut"), proteinByName("tavuk"), proteinByName("fasulye")], index);
    if (method === "Wrap") return pick([proteinByName("tavuk"), proteinByName("hindi"), proteinByName("tofu"), proteinByName("lor peyniri")], index);
    if (category.name === "Fit Tatli") return pick([proteinByName("yogurt"), proteinByName("lor peyniri"), proteinByName("yumurta")], index);
    if (category.name === "Vejetaryen") return pick([proteinByName("mercimek"), proteinByName("nohut"), proteinByName("fasulye"), proteinByName("tofu"), proteinByName("lor peyniri")], index);
    return pick(proteins, index, category.name.length);
  }

  function chooseCarb(method, lowCarb, index) {
    if (lowCarb) return carbByName("karnabahar pilavi");
    if (method === "Wrap") return carbByName("tam bugday lavas");
    if (method === "Omlet") return carbByName("yulaf");
    if (method === "Corba") return pick([carbByName("bulgur"), carbByName("karabugday"), carbByName("esmer pirinc")], index);
    if (method === "Firin") return pick([carbByName("tatli patates"), carbByName("kinoa"), carbByName("esmer pirinc")], index);
    return pick(carbs, index, 3);
  }

  function buildSteps(method, protein, vegetableA, vegetableB, carb, sauce, lowCarb) {
    const basePrep = `${cap(vegetableA)} ve ${vegetableB} malzemelerini yika, ayikla ve dogra.`;
    const carbPrep = lowCarb ? "Yesillikleri yika ve servis tabagina al." : carb.prep;
    const finish = `${cap(sauce)} ekleyip porsiyonu dengeli sekilde servis et.`;

    const templates = {
      Kase: [basePrep, protein.cook, carbPrep, `Tum malzemeleri kaseye al, ${sauce} ile karistir.`],
      Salata: [basePrep, protein.cook, `${cap(vegetableA)}, ${vegetableB} ve yesillikleri genis kasede harmanla.`, `${cap(protein.name)} ekleyip ${sauce} ile servis et.`],
      Firin: [basePrep, `${cap(vegetableA)} ve ${vegetableB} malzemelerini firin kabina yay.`, protein.cook, `${cap(sauce)} ekleyip 180 derecede kontrollu pisir.`],
      Sote: [basePrep, protein.cook, `${cap(vegetableA)} ve ${vegetableB} malzemelerini tavaya ekleyip sotele.`, `${cap(sauce)} ile tatlandirip sicak servis et.`],
      Corba: [basePrep, `${cap(vegetableA)}, ${vegetableB} ve ${protein.name} malzemesini tencereye al.`, "Uzerini gececek kadar su ekleyip yumusayana kadar pisir.", "Gerekirse blenderdan gecirip ilik servis et."],
      Wrap: [carbPrep, protein.cook, `${cap(vegetableA)} ve ${vegetableB} malzemelerini ince dogra.`, `Lavasa veya yesillige malzemeleri yerlestirip ${sauce} ile sar.`],
      Omlet: [basePrep, protein.cook, `${cap(vegetableA)} ve ${vegetableB} malzemelerini tavada hafifce cevir.`, "Yumurtali karisimi ekleyip kisik ateste pisir."],
      Tabak: [basePrep, protein.cook, carbPrep, `Tabaga once sebzeleri, sonra ana malzemeyi koyup ${sauce} ekle.`],
      Bowl: [basePrep, protein.cook, carbPrep, `Kasede katmanlayip ${sauce} ile tamamla.`],
      "Pratik Ogun": [basePrep, protein.cook, carbPrep, `Tum malzemeleri tek tabakta birlestirip ${sauce} ile servis et.`]
    };

    return templates[method] || [basePrep, protein.cook, carbPrep, finish];
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
    ]);
    const allergens = unique([...(protein.allergens || []), ...(lowCarb ? [] : carb.allergens || [])]);
    const avoidFor = unique([...(protein.avoidFor || []), ...(lowCarb ? [] : carb.avoidFor || [])]);
    const goalTags = unique([...category.goals, calories <= 430 ? "weight-loss" : "balanced", proteinValue >= 35 ? "muscle" : "balanced", lowCarb ? "low-carb" : "balanced"]);
    const extraTags = unique([category.name.toLowerCase(), ...goalTags, pick(tags, index), pick(tags, index, 4), vegetableA, vegetableB, protein.name, method.toLowerCase()]);
    const summary = `${cap(vegetableA)}, ${vegetableB} ve ${protein.name} ile hazirlanan ${method.toLowerCase()} tarzi fit tarif.`;

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

