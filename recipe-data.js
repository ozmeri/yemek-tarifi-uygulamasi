(function () {
  const baseRecipes = [
    {
      name: "Protein Omlet Bowl",
      category: "YÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ksek Protein",
      calories: 420,
      protein: 36,
      carbs: 18,
      fat: 22,
      time: 12,
      color: "#dcebd5",
      summary: "GÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ne tok ve dengeli baÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸lamak iÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§in pratik omlet kasesi.",
      ingredients: ["3 yumurta", "60 g lor peyniri", "1 avuÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±spanak", "5 cherry domates", "1 tatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± zeytinyaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±"],
      steps: ["IspanaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± tavada hafifÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§e sotele.", "YumurtayÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± lor peyniriyle ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rp.", "KarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±mÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± tavaya al ve kÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±sÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±k ateÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸te piÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ir.", "Domatesle birlikte servis et."],
      tags: ["kahvaltÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±", "tok tutar", "dÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼k karbonhidrat"]
    },
    {
      name: "Tavuklu Kinoa SalatasÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±",
      category: "YaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ YakÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±mÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±",
      calories: 465,
      protein: 41,
      carbs: 32,
      fat: 14,
      time: 20,
      color: "#f3cf98",
      summary: "ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸le iÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§in doyurucu, lifli ve protein aÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±klÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± bir tabak.",
      ingredients: ["120 g ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±zgara tavuk", "80 g haÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸lanmÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ kinoa", "marul", "salatalÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±k", "limonlu sos"],
      steps: ["Sebzeleri doÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ra.", "KinoayÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± ve tavuÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸u ekle.", "Limonlu sosu gezdir.", "KarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸tÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±p soÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸uk servis et."],
      tags: ["ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸len", "meal prep", "lifli"]
    },
    {
      name: "Somon ve FÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±n Sebze",
      category: "Akdeniz",
      calories: 510,
      protein: 38,
      carbs: 24,
      fat: 28,
      time: 28,
      color: "#f1b08a",
      summary: "SaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸lÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±klÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± yaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ dengesi olan, akÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸am iÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§in gÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ bir tabak.",
      ingredients: ["140 g somon", "brokoli", "kabak", "havuÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§", "limon", "dereotu"],
      steps: ["Sebzeleri zeytinyaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± ile harmanla.", "Somonu limon ve dereotu ile tatlandÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±r.", "Hepsini fÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±nda piÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ir.", "SÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±cak servis et."],
      tags: ["omega 3", "akÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸am", "doyurucu"]
    },
    {
      name: "YoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸urtlu Chia Kup",
      category: "Fit TatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±",
      calories: 255,
      protein: 17,
      carbs: 19,
      fat: 11,
      time: 6,
      color: "#ead7f2",
      summary: "TatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± krizini daha kontrollÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ geÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§irmek iÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§in hafif ara ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼n.",
      ingredients: ["200 g sÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼zme yoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸urt", "1 yemek kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± chia", "yarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±m muz", "tarÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±n", "1 tatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± fÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±stÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±k ezmesi"],
      steps: ["YoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸urt ve chiayÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± karÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸tÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±r.", "10 dakika dinlendir.", "Muz ve tarÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±nÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± ekle.", "FÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±stÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±k ezmesiyle tamamla."],
      tags: ["ara ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼n", "ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ekersiz", "hÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±zlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±"]
    },
    {
      name: "Mercimekli Sebze ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¡orbasÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±",
      category: "Vejetaryen",
      calories: 310,
      protein: 18,
      carbs: 36,
      fat: 8,
      time: 25,
      color: "#f0c37d",
      summary: "AkÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸am iÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§in sÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±cak, ekonomik ve doyurucu bir ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§orba.",
      ingredients: ["kÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rmÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±zÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± mercimek", "havuÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§", "kabak", "soÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸an", "kimyon", "zerdeÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§al"],
      steps: ["Sebzeleri doÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ra ve tencerede ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§evir.", "Mercimek ve suyu ekle.", "Baharatlarla piÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ir.", "Blenderdan geÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§irip servis et."],
      tags: ["ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§orba", "ekonomik", "lifli"]
    },
    {
      name: "Hindi FÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼meli Tam BuÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸day Wrap",
      category: "Pratik",
      calories: 390,
      protein: 33,
      carbs: 29,
      fat: 13,
      time: 10,
      color: "#cfe4ee",
      summary: "Ofiste veya dÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸arÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±da kolay taÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±nabilen dengeli ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼n.",
      ingredients: ["1 tam buÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸day lavaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸", "90 g hindi fÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼me", "light labne", "roka", "salatalÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±k", "hardal"],
      steps: ["LavaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±n iÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ine labne ve hardal sÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼r.", "Hindi ve sebzeleri yerleÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸tir.", "SÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±kÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ca sar.", "ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â°ki parÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§aya bÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶lerek servis et."],
      tags: ["ofis", "taÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±masÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± kolay", "hÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±zlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±"]
    },
    {
      name: "Nohutlu Ton BalÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± Kasesi",
      category: "YÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ksek Protein",
      calories: 445,
      protein: 39,
      carbs: 34,
      fat: 15,
      time: 11,
      color: "#d8e8c2",
      summary: "Ocak aÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§madan hazÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rlanan protein ve lif dengesi yÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ksek kase.",
      ingredients: ["1 kutu ton balÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±", "4 yemek kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± haÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸lanmÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ nohut", "marul", "mÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±sÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±r", "limon", "maydanoz"],
      steps: ["Nohudu sudan geÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ir.", "Ton balÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± ve sebzeleri kaseye al.", "Limon ve maydanoz ekle.", "KarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸tÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±p servis et."],
      tags: ["ocaksÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±z", "ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸len", "lifli"]
    },
    {
      name: "Kabak Spagetti Tavuklu",
      category: "DÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼k Karbonhidrat",
      calories: 360,
      protein: 37,
      carbs: 15,
      fat: 17,
      time: 22,
      color: "#c8e1b4",
      summary: "Makarna hissi veren ama daha hafif bir akÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸am alternatifi.",
      ingredients: ["2 kabak", "120 g tavuk gÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸sÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼", "domates sosu", "sarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±msak", "fesleÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸en"],
      steps: ["KabaklarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± ince ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸eritler halinde kes.", "TavuÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸u tavada piÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ir.", "Domates sosunu ekle.", "KabaklarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± son 3 dakika tavaya al."],
      tags: ["akÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸am", "hafif", "dÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼k karbonhidrat"]
    },
    {
      name: "YulaflÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± Elma Pankek",
      category: "Fit TatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±",
      calories: 335,
      protein: 19,
      carbs: 42,
      fat: 10,
      time: 18,
      color: "#f2d5a8",
      summary: "TatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± kahvaltÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± isteyenler iÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§in daha kontrollÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ bir seÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§enek.",
      ingredients: ["1 yumurta", "4 yemek kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± yulaf", "yarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±m elma", "tarÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±n", "2 yemek kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± yoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸urt"],
      steps: ["YulafÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± rondodan geÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ir.", "Yumurta, elma ve tarÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±nla karÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸tÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±r.", "Tavada iki tarafÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±nÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± piÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ir.", "YoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸urtla servis et."],
      tags: ["kahvaltÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±", "tatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±", "yulaf"]
    },
    {
      name: "Bulgurlu YoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸urtlu Semizotu",
      category: "Vejetaryen",
      calories: 285,
      protein: 15,
      carbs: 34,
      fat: 9,
      time: 14,
      color: "#d6edc9",
      summary: "Serin, ferah ve hafif bir ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸le tabaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±.",
      ingredients: ["semizotu", "3 yemek kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± haÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸lanmÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ bulgur", "sÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼zme yoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸urt", "nane", "salatalÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±k"],
      steps: ["Semizotunu yÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ka ve ayÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±kla.", "YoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸urt, nane ve salatalÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± karÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸tÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±r.", "Bulguru ekle.", "Semizotu ile birleÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸tir."],
      tags: ["ferah", "ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸len", "vejetaryen"]
    },
    {
      name: "Etli Mantar Sote",
      category: "YÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ksek Protein",
      calories: 470,
      protein: 44,
      carbs: 16,
      fat: 24,
      time: 26,
      color: "#d8c6ad",
      summary: "Protein odaklÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±, yanÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±na salata ile tamamlanan doyurucu tabak.",
      ingredients: ["130 g yaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸sÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±z dana eti", "mantar", "biber", "soÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸an", "karabiber", "kekik"],
      steps: ["Eti yÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ksek ateÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸te mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼hÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼rle.", "SoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸an ve biberi ekle.", "MantarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± ekleyip suyunu ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ektir.", "Baharatlarla servis et."],
      tags: ["akÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸am", "kas koruma", "doyurucu"]
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
      summary: "Dengeli yaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ ve protein iÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§eren modern kahvaltÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± seÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§eneÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸i.",
      ingredients: ["1 dilim tam buÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸day ekmeÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸i", "yarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±m avokado", "1 yumurta", "limon", "pul biber"],
      steps: ["EkmeÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸i kÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±zart.", "Avokadoyu limonla ez.", "YumurtayÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± piÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ir.", "Hepsini ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼st ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ste koyup servis et."],
      tags: ["kahvaltÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±", "akdeniz", "tok tutar"]
    },
    {
      name: "Peynirli Roka SalatasÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±",
      category: "Pratik",
      calories: 275,
      protein: 20,
      carbs: 12,
      fat: 16,
      time: 8,
      color: "#dbe7b8",
      summary: "ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¡ok kÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±sa sÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼rede hazÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rlanan hafif ve keskin aromalÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± salata.",
      ingredients: ["roka", "60 g beyaz peynir", "domates", "ceviz", "limon", "1 tatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± zeytinyaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±"],
      steps: ["RokayÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± yÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ka.", "Peynir ve domatesi ekle.", "Cevizi serp.", "Limonlu sosla karÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸tÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±r."],
      tags: ["8 dakika", "salata", "hafif"]
    },
    {
      name: "Karnabahar PilavÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± Tavuklu",
      category: "DÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼k Karbonhidrat",
      calories: 385,
      protein: 40,
      carbs: 18,
      fat: 16,
      time: 24,
      color: "#efe6c8",
      summary: "Pilav hissini koruyup karbonhidratÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± azaltmak isteyenlere.",
      ingredients: ["karnabahar", "120 g tavuk", "bezelye", "havuÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§", "soya sosu", "taze soÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸an"],
      steps: ["KarnabaharÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± rondodan geÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ir.", "TavuÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸u piÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ir.", "Sebzeleri ekle.", "KarnabaharÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± son 5 dakika tavada ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§evir."],
      tags: ["dÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼k karbonhidrat", "akÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸am", "doyurucu"]
    },
    {
      name: "Kakaolu Protein ToplarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±",
      category: "Fit TatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±",
      calories: 220,
      protein: 14,
      carbs: 21,
      fat: 9,
      time: 9,
      color: "#d6b6a8",
      summary: "Kahve yanÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±na kontrollÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼, porsiyonluk tatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± alternatifi.",
      ingredients: ["3 yemek kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± yulaf", "1 yemek kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± kakao", "1 yemek kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± fÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±stÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±k ezmesi", "2 yemek kaÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± yoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸urt", "tarÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±n"],
      steps: ["TÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼m malzemeleri karÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸tÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±r.", "KÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±vam alana kadar yoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ur.", "KÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼k toplar yap.", "10 dakika buzdolabÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±nda beklet."],
      tags: ["tatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±", "ara ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼n", "porsiyon"]
    },
    {
      name: "Hindi KÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶fteli Salata TabaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±",
      category: "YaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ YakÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±mÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±",
      calories: 430,
      protein: 43,
      carbs: 22,
      fat: 18,
      time: 30,
      color: "#efc0a6",
      summary: "Antrenman sonrasÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± iÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§in protein aÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±klÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± temiz tabak.",
      ingredients: ["140 g hindi kÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±yma", "marul", "kÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rmÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±zÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± lahana", "salatalÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±k", "yoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸urtlu sos", "kimyon"],
      steps: ["Hindi kÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ymayÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â± baharatla yoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ur.", "KÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼k kÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶fteler yap ve piÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ir.", "Sebzeleri tabaÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸a al.", "KÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶fteleri ve yoÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸urtlu sosu ekle."],
      tags: ["antrenman", "protein", "salata"]
    }
  ];

  const orderedRecipeTypes = ["Ana yemek", "Salata", "Ãƒâ€¡orba", "KahvaltÃ„Â±", "Aperatif", "TatlÃ„Â±"];

  const recipeOverrides = {
    "Protein Omlet Bowl": { type: "KahvaltÃ„Â±", category: "KahvaltÃ„Â±" }
  };

  function slugify(value = "") {
    return value
      .toString()
      .trim()
      .toLocaleLowerCase("tr-TR")
      .replace(/ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§/g, "c")
      .replace(/ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸/g, "g")
      .replace(/ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±/g, "i")
      .replace(/ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶/g, "o")
      .replace(/ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸/g, "s")
      .replace(/ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼/g, "u")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "tarif";
  }

  function inferRecipeType(recipe) {
    const text = [recipe.name, recipe.category, recipe.summary, ...(recipe.ingredients || []), ...(recipe.tags || [])].join(" ").toLocaleLowerCase("tr-TR");
    const hasAny = (words) => words.some((item) => text.includes(item));
    const breakfastWords = ["kahvaltÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±", "kahvalti", "omlet", "tost", "yumurta", "menemen", "yulaf", "labne", "peynir", "lor", "avokado", "pankek"];
    const soupWords = ["ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§orba", "corba", "soup"];
    const saladWords = ["salata", "roka", "semizotu", "marul", "yeÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸illik", "yesillik"];
    const dessertWords = ["tatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±", "tatli", "muhallebi", "kup", "kurabiye", "kek", "puding", "brownie", "cheesecake"];
    const snackWords = ["ara ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶ÃƒÆ’Ã¢â‚¬ÂÃƒâ€¦Ã‚Â¸ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼n", "ara ogun", "atÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸tÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rmalÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±k", "atistirmalik", "aperatif", "smoothie", "bar", "toplarÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±", "toplari"];
    const mainMealWords = ["tavuk", "hindi", "somon", "balÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±k", "balik", "kÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±yma", "kiyma", "kÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶fte", "kofte", "sote", "fÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±rÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±n", "firin", "pilav", "makarna", "ÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±zgara", "izgara", "ana yemek", "et"];

    const breakfastMatch = hasAny(breakfastWords);
    const soupMatch = hasAny(soupWords);
    const saladMatch = hasAny(saladWords);
    const dessertMatch = hasAny(dessertWords);
    const snackMatch = hasAny(snackWords);
    const mainMealMatch = hasAny(mainMealWords);

    if (soupMatch) return "ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¡orba";
    if (saladMatch && !breakfastMatch) return "Salata";
    if (dessertMatch && !breakfastMatch) return "TatlÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±";
    if (breakfastMatch && !mainMealMatch && !saladMatch && !soupMatch && !dessertMatch) return "KahvaltÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±";
    if (snackMatch || (recipe.calories <= 220 && recipe.protein <= 12 && !breakfastMatch && !saladMatch && !soupMatch && !dessertMatch)) return "Aperatif";
    if (mainMealMatch) return "Ana yemek";
    if (breakfastMatch) return "KahvaltÃƒÆ’Ã¢â‚¬ÂÃƒâ€šÃ‚Â±";
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

  window.fitRecipeOverrides = recipeOverrides;
  window.fitBaseRecipes = baseRecipes;
  window.fitInferRecipeType = inferRecipeType;
  window.fitPrepareRecipeCollection = prepareRecipeCollection;
  window.fitOrderedRecipeTypes = orderedRecipeTypes;
  window.fitDefaultRecipes = prepareRecipeCollection(window.fitRecipeCatalog || []);
})();