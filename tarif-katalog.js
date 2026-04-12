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
    { name: "tavuk", label: "Tavuk", allergens: [], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-chicken"] },
    { name: "hindi", label: "Hindi", allergens: [], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-chicken"] },
    { name: "somon", label: "Somon", allergens: ["fish"], avoidFor: [], dietBlock: ["vegan", "vegetarian", "no-fish"] },
    { name: "ton baligi", label: "Ton Baligi", allergens: ["fish"], avoidFor: ["gout"], dietBlock: ["vegan", "vegetarian", "no-fish"] },
    { name: "yumurta", label: "Yumurta", allergens: ["egg"], avoidFor: ["cholesterol"], dietBlock: ["vegan"] },
    { name: "lor peyniri", label: "Lor Peynirli", allergens: ["dairy"], avoidFor: [], dietBlock: ["vegan"] },
    { name: "mercimek", label: "Mercimek", allergens: ["legume"], avoidFor: ["ibs", "gout"], dietBlock: [] },
    { name: "nohut", label: "Nohut", allergens: ["legume"], avoidFor: ["ibs", "gout"], dietBlock: [] },
    { name: "fasulye", label: "Fasulye", allergens: ["legume"], avoidFor: ["ibs"], dietBlock: [] },
    { name: "tofu", label: "Tofu", allergens: ["soy"], avoidFor: [], dietBlock: [] },
    { name: "dana", label: "Dana", allergens: [], avoidFor: ["cholesterol", "heart"], dietBlock: ["vegan", "vegetarian", "no-red-meat"] },
    { name: "yogurt", label: "Yogurtlu", allergens: ["dairy"], avoidFor: [], dietBlock: ["vegan"] }
  ];

  const vegetables = ["brokoli", "karnabahar", "kabak", "ispanak", "semizotu", "roka", "marul", "salatalik", "domates", "biber", "havuc", "mantar", "patlican", "pazı", "bezelye", "enginar", "kereviz", "lahana", "mor lahana", "yesil fasulye"];
  const carbs = [
    { name: "bulgur", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "kinoa", allergens: [], avoidFor: [] },
    { name: "karabugday", allergens: [], avoidFor: [] },
    { name: "yulaf", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "tam bugday lavas", allergens: ["gluten"], avoidFor: ["celiac"] },
    { name: "esmer pirinc", allergens: [], avoidFor: [] },
    { name: "tatli patates", allergens: [], avoidFor: [] },
    { name: "karnabahar pilavi", allergens: [], avoidFor: ["ibs"] }
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

  function makeRecipe(index) {
    const category = pick(categories, index);
    const protein = pick(proteins, index, category.name.length);
    const vegetableA = pick(vegetables, index, 2);
    const vegetableB = pick(vegetables, index, 7);
    const carb = pick(carbs, index, 3);
    const method = pick(methods, index, 5);
    const sauce = pick(sauces, index, 1);
    const time = 10 + (index % 31);
    const calories = 240 + ((index * 37) % 360);
    const proteinValue = category.baseProtein + (index % 13);
    const lowCarb = category.goals.includes("low-carb");
    const carbsValue = lowCarb ? 10 + (index % 18) : 18 + (index % 45);
    const fat = 7 + (index % 24);
    const name = `${protein.label} ${vegetableA.charAt(0).toUpperCase() + vegetableA.slice(1)} ${method} ${index + 1}`;
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
    const extraTags = unique([category.name.toLowerCase(), ...goalTags, pick(tags, index), pick(tags, index, 4), vegetableA, vegetableB, protein.name]);

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
      summary: `${vegetableA}, ${vegetableB} ve ${protein.name} ile hazirlanan dengeli bir fit tarif.`,
      note: `${vegetableA}, ${vegetableB} ve ${protein.name} ile hazirlanan dengeli bir fit tarif.`,
      ingredients,
      steps: [
        `${vegetableA} ve ${vegetableB} malzemelerini yika, ayikla ve dogra.`,
        `Ana malzemeyi uygun sekilde hazirla veya pisir.`,
        `${lowCarb ? "Yesillikleri" : carb.name} ekleyerek tabagi dengele.`,
        `${sauce} ekleyip sicak ya da ilik servis et.`
      ],
      tags: extraTags,
      allergens,
      avoidFor
    };
  }

  const catalog = Array.from({ length: 2000 }, (_, index) => makeRecipe(index));

  window.fitRecipeCatalog = catalog;
})();


