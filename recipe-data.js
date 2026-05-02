(function () {
  const baseRecipes = [
    {
      name: "Protein Omlet Bowl",
      category: "YÃƒÆ’Ã‚Â¼ksek Protein",
      calories: 420,
      protein: 36,
      carbs: 18,
      fat: 22,
      time: 12,
      color: "#dcebd5",
      summary: "GÃƒÆ’Ã‚Â¼ne tok ve dengeli baÃƒâ€¦Ã…Â¸lamak iÃƒÆ’Ã‚Â§in pratik omlet kasesi.",
      ingredients: ["3 yumurta", "60 g lor peyniri", "1 avuÃƒÆ’Ã‚Â§ Ãƒâ€Ã‚Â±spanak", "5 cherry domates", "1 tatlÃƒâ€Ã‚Â± kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± zeytinyaÃƒâ€Ã…Â¸Ãƒâ€Ã‚Â±"],
      steps: ["IspanaÃƒâ€Ã…Â¸Ãƒâ€Ã‚Â± tavada hafifÃƒÆ’Ã‚Â§e sotele.", "YumurtayÃƒâ€Ã‚Â± lor peyniriyle ÃƒÆ’Ã‚Â§Ãƒâ€Ã‚Â±rp.", "KarÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±mÃƒâ€Ã‚Â± tavaya al ve kÃƒâ€Ã‚Â±sÃƒâ€Ã‚Â±k ateÃƒâ€¦Ã…Â¸te piÃƒâ€¦Ã…Â¸ir.", "Domatesle birlikte servis et."],
      tags: ["kahvaltÃƒâ€Ã‚Â±", "tok tutar", "dÃƒÆ’Ã‚Â¼Ãƒâ€¦Ã…Â¸ÃƒÆ’Ã‚Â¼k karbonhidrat"]
    },
    {
      name: "Tavuklu Kinoa SalatasÃƒâ€Ã‚Â±",
      category: "YaÃƒâ€Ã…Â¸ YakÃƒâ€Ã‚Â±mÃƒâ€Ã‚Â±",
      calories: 465,
      protein: 41,
      carbs: 32,
      fat: 14,
      time: 20,
      color: "#f3cf98",
      summary: "ÃƒÆ’Ã¢â‚¬â€œÃƒâ€Ã…Â¸le iÃƒÆ’Ã‚Â§in doyurucu, lifli ve protein aÃƒâ€Ã…Â¸Ãƒâ€Ã‚Â±rlÃƒâ€Ã‚Â±klÃƒâ€Ã‚Â± bir tabak.",
      ingredients: ["120 g Ãƒâ€Ã‚Â±zgara tavuk", "80 g haÃƒâ€¦Ã…Â¸lanmÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸ kinoa", "marul", "salatalÃƒâ€Ã‚Â±k", "limonlu sos"],
      steps: ["Sebzeleri doÃƒâ€Ã…Â¸ra.", "KinoayÃƒâ€Ã‚Â± ve tavuÃƒâ€Ã…Â¸u ekle.", "Limonlu sosu gezdir.", "KarÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸tÃƒâ€Ã‚Â±rÃƒâ€Ã‚Â±p soÃƒâ€Ã…Â¸uk servis et."],
      tags: ["ÃƒÆ’Ã‚Â¶Ãƒâ€Ã…Â¸len", "meal prep", "lifli"]
    },
    {
      name: "Somon ve FÃƒâ€Ã‚Â±rÃƒâ€Ã‚Â±n Sebze",
      category: "Akdeniz",
      calories: 510,
      protein: 38,
      carbs: 24,
      fat: 28,
      time: 28,
      color: "#f1b08a",
      summary: "SaÃƒâ€Ã…Â¸lÃƒâ€Ã‚Â±klÃƒâ€Ã‚Â± yaÃƒâ€Ã…Â¸ dengesi olan, akÃƒâ€¦Ã…Â¸am iÃƒÆ’Ã‚Â§in gÃƒÆ’Ã‚Â¼ÃƒÆ’Ã‚Â§lÃƒÆ’Ã‚Â¼ bir tabak.",
      ingredients: ["140 g somon", "brokoli", "kabak", "havuÃƒÆ’Ã‚Â§", "limon", "dereotu"],
      steps: ["Sebzeleri zeytinyaÃƒâ€Ã…Â¸Ãƒâ€Ã‚Â± ile harmanla.", "Somonu limon ve dereotu ile tatlandÃƒâ€Ã‚Â±r.", "Hepsini fÃƒâ€Ã‚Â±rÃƒâ€Ã‚Â±nda piÃƒâ€¦Ã…Â¸ir.", "SÃƒâ€Ã‚Â±cak servis et."],
      tags: ["omega 3", "akÃƒâ€¦Ã…Â¸am", "doyurucu"]
    },
    {
      name: "YoÃƒâ€Ã…Â¸urtlu Chia Kup",
      category: "Fit TatlÃƒâ€Ã‚Â±",
      calories: 255,
      protein: 17,
      carbs: 19,
      fat: 11,
      time: 6,
      color: "#ead7f2",
      summary: "TatlÃƒâ€Ã‚Â± krizini daha kontrollÃƒÆ’Ã‚Â¼ geÃƒÆ’Ã‚Â§irmek iÃƒÆ’Ã‚Â§in hafif ara ÃƒÆ’Ã‚Â¶Ãƒâ€Ã…Â¸ÃƒÆ’Ã‚Â¼n.",
      ingredients: ["200 g sÃƒÆ’Ã‚Â¼zme yoÃƒâ€Ã…Â¸urt", "1 yemek kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± chia", "yarÃƒâ€Ã‚Â±m muz", "tarÃƒÆ’Ã‚Â§Ãƒâ€Ã‚Â±n", "1 tatlÃƒâ€Ã‚Â± kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± fÃƒâ€Ã‚Â±stÃƒâ€Ã‚Â±k ezmesi"],
      steps: ["YoÃƒâ€Ã…Â¸urt ve chiayÃƒâ€Ã‚Â± karÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸tÃƒâ€Ã‚Â±r.", "10 dakika dinlendir.", "Muz ve tarÃƒÆ’Ã‚Â§Ãƒâ€Ã‚Â±nÃƒâ€Ã‚Â± ekle.", "FÃƒâ€Ã‚Â±stÃƒâ€Ã‚Â±k ezmesiyle tamamla."],
      tags: ["ara ÃƒÆ’Ã‚Â¶Ãƒâ€Ã…Â¸ÃƒÆ’Ã‚Â¼n", "Ãƒâ€¦Ã…Â¸ekersiz", "hÃƒâ€Ã‚Â±zlÃƒâ€Ã‚Â±"]
    },
    {
      name: "Mercimekli Sebze ÃƒÆ’Ã¢â‚¬Â¡orbasÃƒâ€Ã‚Â±",
      category: "Vejetaryen",
      calories: 310,
      protein: 18,
      carbs: 36,
      fat: 8,
      time: 25,
      color: "#f0c37d",
      summary: "AkÃƒâ€¦Ã…Â¸am iÃƒÆ’Ã‚Â§in sÃƒâ€Ã‚Â±cak, ekonomik ve doyurucu bir ÃƒÆ’Ã‚Â§orba.",
      ingredients: ["kÃƒâ€Ã‚Â±rmÃƒâ€Ã‚Â±zÃƒâ€Ã‚Â± mercimek", "havuÃƒÆ’Ã‚Â§", "kabak", "soÃƒâ€Ã…Â¸an", "kimyon", "zerdeÃƒÆ’Ã‚Â§al"],
      steps: ["Sebzeleri doÃƒâ€Ã…Â¸ra ve tencerede ÃƒÆ’Ã‚Â§evir.", "Mercimek ve suyu ekle.", "Baharatlarla piÃƒâ€¦Ã…Â¸ir.", "Blenderdan geÃƒÆ’Ã‚Â§irip servis et."],
      tags: ["ÃƒÆ’Ã‚Â§orba", "ekonomik", "lifli"]
    },
    {
      name: "Hindi FÃƒÆ’Ã‚Â¼meli Tam BuÃƒâ€Ã…Â¸day Wrap",
      category: "Pratik",
      calories: 390,
      protein: 33,
      carbs: 29,
      fat: 13,
      time: 10,
      color: "#cfe4ee",
      summary: "Ofiste veya dÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸arÃƒâ€Ã‚Â±da kolay taÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±nabilen dengeli ÃƒÆ’Ã‚Â¶Ãƒâ€Ã…Â¸ÃƒÆ’Ã‚Â¼n.",
      ingredients: ["1 tam buÃƒâ€Ã…Â¸day lavaÃƒâ€¦Ã…Â¸", "90 g hindi fÃƒÆ’Ã‚Â¼me", "light labne", "roka", "salatalÃƒâ€Ã‚Â±k", "hardal"],
      steps: ["LavaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±n iÃƒÆ’Ã‚Â§ine labne ve hardal sÃƒÆ’Ã‚Â¼r.", "Hindi ve sebzeleri yerleÃƒâ€¦Ã…Â¸tir.", "SÃƒâ€Ã‚Â±kÃƒâ€Ã‚Â±ca sar.", "Ãƒâ€Ã‚Â°ki parÃƒÆ’Ã‚Â§aya bÃƒÆ’Ã‚Â¶lerek servis et."],
      tags: ["ofis", "taÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±masÃƒâ€Ã‚Â± kolay", "hÃƒâ€Ã‚Â±zlÃƒâ€Ã‚Â±"]
    },
    {
      name: "Nohutlu Ton BalÃƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± Kasesi",
      category: "YÃƒÆ’Ã‚Â¼ksek Protein",
      calories: 445,
      protein: 39,
      carbs: 34,
      fat: 15,
      time: 11,
      color: "#d8e8c2",
      summary: "Ocak aÃƒÆ’Ã‚Â§madan hazÃƒâ€Ã‚Â±rlanan protein ve lif dengesi yÃƒÆ’Ã‚Â¼ksek kase.",
      ingredients: ["1 kutu ton balÃƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â±", "4 yemek kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± haÃƒâ€¦Ã…Â¸lanmÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸ nohut", "marul", "mÃƒâ€Ã‚Â±sÃƒâ€Ã‚Â±r", "limon", "maydanoz"],
      steps: ["Nohudu sudan geÃƒÆ’Ã‚Â§ir.", "Ton balÃƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± ve sebzeleri kaseye al.", "Limon ve maydanoz ekle.", "KarÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸tÃƒâ€Ã‚Â±rÃƒâ€Ã‚Â±p servis et."],
      tags: ["ocaksÃƒâ€Ã‚Â±z", "ÃƒÆ’Ã‚Â¶Ãƒâ€Ã…Â¸len", "lifli"]
    },
    {
      name: "Kabak Spagetti Tavuklu",
      category: "DÃƒÆ’Ã‚Â¼Ãƒâ€¦Ã…Â¸ÃƒÆ’Ã‚Â¼k Karbonhidrat",
      calories: 360,
      protein: 37,
      carbs: 15,
      fat: 17,
      time: 22,
      color: "#c8e1b4",
      summary: "Makarna hissi veren ama daha hafif bir akÃƒâ€¦Ã…Â¸am alternatifi.",
      ingredients: ["2 kabak", "120 g tavuk gÃƒÆ’Ã‚Â¶Ãƒâ€Ã…Â¸sÃƒÆ’Ã‚Â¼", "domates sosu", "sarÃƒâ€Ã‚Â±msak", "fesleÃƒâ€Ã…Â¸en"],
      steps: ["KabaklarÃƒâ€Ã‚Â± ince Ãƒâ€¦Ã…Â¸eritler halinde kes.", "TavuÃƒâ€Ã…Â¸u tavada piÃƒâ€¦Ã…Â¸ir.", "Domates sosunu ekle.", "KabaklarÃƒâ€Ã‚Â± son 3 dakika tavaya al."],
      tags: ["akÃƒâ€¦Ã…Â¸am", "hafif", "dÃƒÆ’Ã‚Â¼Ãƒâ€¦Ã…Â¸ÃƒÆ’Ã‚Â¼k karbonhidrat"]
    },
    {
      name: "YulaflÃƒâ€Ã‚Â± Elma Pankek",
      category: "Fit TatlÃƒâ€Ã‚Â±",
      calories: 335,
      protein: 19,
      carbs: 42,
      fat: 10,
      time: 18,
      color: "#f2d5a8",
      summary: "TatlÃƒâ€Ã‚Â± kahvaltÃƒâ€Ã‚Â± isteyenler iÃƒÆ’Ã‚Â§in daha kontrollÃƒÆ’Ã‚Â¼ bir seÃƒÆ’Ã‚Â§enek.",
      ingredients: ["1 yumurta", "4 yemek kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± yulaf", "yarÃƒâ€Ã‚Â±m elma", "tarÃƒÆ’Ã‚Â§Ãƒâ€Ã‚Â±n", "2 yemek kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± yoÃƒâ€Ã…Â¸urt"],
      steps: ["YulafÃƒâ€Ã‚Â± rondodan geÃƒÆ’Ã‚Â§ir.", "Yumurta, elma ve tarÃƒÆ’Ã‚Â§Ãƒâ€Ã‚Â±nla karÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸tÃƒâ€Ã‚Â±r.", "Tavada iki tarafÃƒâ€Ã‚Â±nÃƒâ€Ã‚Â± piÃƒâ€¦Ã…Â¸ir.", "YoÃƒâ€Ã…Â¸urtla servis et."],
      tags: ["kahvaltÃƒâ€Ã‚Â±", "tatlÃƒâ€Ã‚Â±", "yulaf"]
    },
    {
      name: "Bulgurlu YoÃƒâ€Ã…Â¸urtlu Semizotu",
      category: "Vejetaryen",
      calories: 285,
      protein: 15,
      carbs: 34,
      fat: 9,
      time: 14,
      color: "#d6edc9",
      summary: "Serin, ferah ve hafif bir ÃƒÆ’Ã‚Â¶Ãƒâ€Ã…Â¸le tabaÃƒâ€Ã…Â¸Ãƒâ€Ã‚Â±.",
      ingredients: ["semizotu", "3 yemek kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± haÃƒâ€¦Ã…Â¸lanmÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸ bulgur", "sÃƒÆ’Ã‚Â¼zme yoÃƒâ€Ã…Â¸urt", "nane", "salatalÃƒâ€Ã‚Â±k"],
      steps: ["Semizotunu yÃƒâ€Ã‚Â±ka ve ayÃƒâ€Ã‚Â±kla.", "YoÃƒâ€Ã…Â¸urt, nane ve salatalÃƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± karÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸tÃƒâ€Ã‚Â±r.", "Bulguru ekle.", "Semizotu ile birleÃƒâ€¦Ã…Â¸tir."],
      tags: ["ferah", "ÃƒÆ’Ã‚Â¶Ãƒâ€Ã…Â¸len", "vejetaryen"]
    },
    {
      name: "Etli Mantar Sote",
      category: "YÃƒÆ’Ã‚Â¼ksek Protein",
      calories: 470,
      protein: 44,
      carbs: 16,
      fat: 24,
      time: 26,
      color: "#d8c6ad",
      summary: "Protein odaklÃƒâ€Ã‚Â±, yanÃƒâ€Ã‚Â±na salata ile tamamlanan doyurucu tabak.",
      ingredients: ["130 g yaÃƒâ€Ã…Â¸sÃƒâ€Ã‚Â±z dana eti", "mantar", "biber", "soÃƒâ€Ã…Â¸an", "karabiber", "kekik"],
      steps: ["Eti yÃƒÆ’Ã‚Â¼ksek ateÃƒâ€¦Ã…Â¸te mÃƒÆ’Ã‚Â¼hÃƒÆ’Ã‚Â¼rle.", "SoÃƒâ€Ã…Â¸an ve biberi ekle.", "MantarÃƒâ€Ã‚Â± ekleyip suyunu ÃƒÆ’Ã‚Â§ektir.", "Baharatlarla servis et."],
      tags: ["akÃƒâ€¦Ã…Â¸am", "kas koruma", "doyurucu"]
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
      summary: "Dengeli yaÃƒâ€Ã…Â¸ ve protein iÃƒÆ’Ã‚Â§eren modern kahvaltÃƒâ€Ã‚Â± seÃƒÆ’Ã‚Â§eneÃƒâ€Ã…Â¸i.",
      ingredients: ["1 dilim tam buÃƒâ€Ã…Â¸day ekmeÃƒâ€Ã…Â¸i", "yarÃƒâ€Ã‚Â±m avokado", "1 yumurta", "limon", "pul biber"],
      steps: ["EkmeÃƒâ€Ã…Â¸i kÃƒâ€Ã‚Â±zart.", "Avokadoyu limonla ez.", "YumurtayÃƒâ€Ã‚Â± piÃƒâ€¦Ã…Â¸ir.", "Hepsini ÃƒÆ’Ã‚Â¼st ÃƒÆ’Ã‚Â¼ste koyup servis et."],
      tags: ["kahvaltÃƒâ€Ã‚Â±", "akdeniz", "tok tutar"]
    },
    {
      name: "Peynirli Roka SalatasÃƒâ€Ã‚Â±",
      category: "Pratik",
      calories: 275,
      protein: 20,
      carbs: 12,
      fat: 16,
      time: 8,
      color: "#dbe7b8",
      summary: "ÃƒÆ’Ã¢â‚¬Â¡ok kÃƒâ€Ã‚Â±sa sÃƒÆ’Ã‚Â¼rede hazÃƒâ€Ã‚Â±rlanan hafif ve keskin aromalÃƒâ€Ã‚Â± salata.",
      ingredients: ["roka", "60 g beyaz peynir", "domates", "ceviz", "limon", "1 tatlÃƒâ€Ã‚Â± kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± zeytinyaÃƒâ€Ã…Â¸Ãƒâ€Ã‚Â±"],
      steps: ["RokayÃƒâ€Ã‚Â± yÃƒâ€Ã‚Â±ka.", "Peynir ve domatesi ekle.", "Cevizi serp.", "Limonlu sosla karÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸tÃƒâ€Ã‚Â±r."],
      tags: ["8 dakika", "salata", "hafif"]
    },
    {
      name: "Karnabahar PilavÃƒâ€Ã‚Â± Tavuklu",
      category: "DÃƒÆ’Ã‚Â¼Ãƒâ€¦Ã…Â¸ÃƒÆ’Ã‚Â¼k Karbonhidrat",
      calories: 385,
      protein: 40,
      carbs: 18,
      fat: 16,
      time: 24,
      color: "#efe6c8",
      summary: "Pilav hissini koruyup karbonhidratÃƒâ€Ã‚Â± azaltmak isteyenlere.",
      ingredients: ["karnabahar", "120 g tavuk", "bezelye", "havuÃƒÆ’Ã‚Â§", "soya sosu", "taze soÃƒâ€Ã…Â¸an"],
      steps: ["KarnabaharÃƒâ€Ã‚Â± rondodan geÃƒÆ’Ã‚Â§ir.", "TavuÃƒâ€Ã…Â¸u piÃƒâ€¦Ã…Â¸ir.", "Sebzeleri ekle.", "KarnabaharÃƒâ€Ã‚Â± son 5 dakika tavada ÃƒÆ’Ã‚Â§evir."],
      tags: ["dÃƒÆ’Ã‚Â¼Ãƒâ€¦Ã…Â¸ÃƒÆ’Ã‚Â¼k karbonhidrat", "akÃƒâ€¦Ã…Â¸am", "doyurucu"]
    },
    {
      name: "Kakaolu Protein ToplarÃƒâ€Ã‚Â±",
      category: "Fit TatlÃƒâ€Ã‚Â±",
      calories: 220,
      protein: 14,
      carbs: 21,
      fat: 9,
      time: 9,
      color: "#d6b6a8",
      summary: "Kahve yanÃƒâ€Ã‚Â±na kontrollÃƒÆ’Ã‚Â¼, porsiyonluk tatlÃƒâ€Ã‚Â± alternatifi.",
      ingredients: ["3 yemek kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± yulaf", "1 yemek kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± kakao", "1 yemek kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± fÃƒâ€Ã‚Â±stÃƒâ€Ã‚Â±k ezmesi", "2 yemek kaÃƒâ€¦Ã…Â¸Ãƒâ€Ã‚Â±Ãƒâ€Ã…Â¸Ãƒâ€Ã‚Â± yoÃƒâ€Ã…Â¸urt", "tarÃƒÆ’Ã‚Â§Ãƒâ€Ã‚Â±n"],
      steps: ["TÃƒÆ’Ã‚Â¼m malzemeleri karÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸tÃƒâ€Ã‚Â±r.", "KÃƒâ€Ã‚Â±vam alana kadar yoÃƒâ€Ã…Â¸ur.", "KÃƒÆ’Ã‚Â¼ÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â¼k toplar yap.", "10 dakika buzdolabÃƒâ€Ã‚Â±nda beklet."],
      tags: ["tatlÃƒâ€Ã‚Â±", "ara ÃƒÆ’Ã‚Â¶Ãƒâ€Ã…Â¸ÃƒÆ’Ã‚Â¼n", "porsiyon"]
    },
    {
      name: "Hindi KÃƒÆ’Ã‚Â¶fteli Salata TabaÃƒâ€Ã…Â¸Ãƒâ€Ã‚Â±",
      category: "YaÃƒâ€Ã…Â¸ YakÃƒâ€Ã‚Â±mÃƒâ€Ã‚Â±",
      calories: 430,
      protein: 43,
      carbs: 22,
      fat: 18,
      time: 30,
      color: "#efc0a6",
      summary: "Antrenman sonrasÃƒâ€Ã‚Â± iÃƒÆ’Ã‚Â§in protein aÃƒâ€Ã…Â¸Ãƒâ€Ã‚Â±rlÃƒâ€Ã‚Â±klÃƒâ€Ã‚Â± temiz tabak.",
      ingredients: ["140 g hindi kÃƒâ€Ã‚Â±yma", "marul", "kÃƒâ€Ã‚Â±rmÃƒâ€Ã‚Â±zÃƒâ€Ã‚Â± lahana", "salatalÃƒâ€Ã‚Â±k", "yoÃƒâ€Ã…Â¸urtlu sos", "kimyon"],
      steps: ["Hindi kÃƒâ€Ã‚Â±ymayÃƒâ€Ã‚Â± baharatla yoÃƒâ€Ã…Â¸ur.", "KÃƒÆ’Ã‚Â¼ÃƒÆ’Ã‚Â§ÃƒÆ’Ã‚Â¼k kÃƒÆ’Ã‚Â¶fteler yap ve piÃƒâ€¦Ã…Â¸ir.", "Sebzeleri tabaÃƒâ€Ã…Â¸a al.", "KÃƒÆ’Ã‚Â¶fteleri ve yoÃƒâ€Ã…Â¸urtlu sosu ekle."],
      tags: ["antrenman", "protein", "salata"]
    }
  ];

  const orderedRecipeTypes = ["Ana yemek", "Salata", "Ã‡orba", "KahvaltÄ±", "Aperatif", "TatlÄ±"];

  const recipeOverrides = {
    "Protein Omlet Bowl": { type: "KahvaltÄ±", category: "KahvaltÄ±" }
  };

  function slugify(value = "") {
    return value
      .toString()
      .trim()
      .toLocaleLowerCase("tr-TR")
      .replace(/ÃƒÆ’Ã‚Â§/g, "c")
      .replace(/Ãƒâ€Ã…Â¸/g, "g")
      .replace(/Ãƒâ€Ã‚Â±/g, "i")
      .replace(/ÃƒÆ’Ã‚Â¶/g, "o")
      .replace(/Ãƒâ€¦Ã…Â¸/g, "s")
      .replace(/ÃƒÆ’Ã‚Â¼/g, "u")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "tarif";
  }

  function inferRecipeType(recipe) {
    const text = [recipe.name, recipe.category, recipe.summary, ...(recipe.ingredients || []), ...(recipe.tags || [])].join(" ").toLocaleLowerCase("tr-TR");
    const hasAny = (words) => words.some((item) => text.includes(item));
    const breakfastWords = ["kahvaltÃƒâ€Ã‚Â±", "kahvalti", "omlet", "tost", "yumurta", "menemen", "yulaf", "labne", "peynir", "lor", "avokado", "pankek"];
    const soupWords = ["ÃƒÆ’Ã‚Â§orba", "corba", "soup"];
    const saladWords = ["salata", "roka", "semizotu", "marul", "yeÃƒâ€¦Ã…Â¸illik", "yesillik"];
    const dessertWords = ["tatlÃƒâ€Ã‚Â±", "tatli", "muhallebi", "kup", "kurabiye", "kek", "puding", "brownie", "cheesecake"];
    const snackWords = ["ara ÃƒÆ’Ã‚Â¶Ãƒâ€Ã…Â¸ÃƒÆ’Ã‚Â¼n", "ara ogun", "atÃƒâ€Ã‚Â±Ãƒâ€¦Ã…Â¸tÃƒâ€Ã‚Â±rmalÃƒâ€Ã‚Â±k", "atistirmalik", "aperatif", "smoothie", "bar", "toplarÃƒâ€Ã‚Â±", "toplari"];
    const mainMealWords = ["tavuk", "hindi", "somon", "balÃƒâ€Ã‚Â±k", "balik", "kÃƒâ€Ã‚Â±yma", "kiyma", "kÃƒÆ’Ã‚Â¶fte", "kofte", "sote", "fÃƒâ€Ã‚Â±rÃƒâ€Ã‚Â±n", "firin", "pilav", "makarna", "Ãƒâ€Ã‚Â±zgara", "izgara", "ana yemek", "et"];

    const breakfastMatch = hasAny(breakfastWords);
    const soupMatch = hasAny(soupWords);
    const saladMatch = hasAny(saladWords);
    const dessertMatch = hasAny(dessertWords);
    const snackMatch = hasAny(snackWords);
    const mainMealMatch = hasAny(mainMealWords);

    if (soupMatch) return "ÃƒÆ’Ã¢â‚¬Â¡orba";
    if (saladMatch && !breakfastMatch) return "Salata";
    if (dessertMatch && !breakfastMatch) return "TatlÃƒâ€Ã‚Â±";
    if (breakfastMatch && !mainMealMatch && !saladMatch && !soupMatch && !dessertMatch) return "KahvaltÃƒâ€Ã‚Â±";
    if (snackMatch || (recipe.calories <= 220 && recipe.protein <= 12 && !breakfastMatch && !saladMatch && !soupMatch && !dessertMatch)) return "Aperatif";
    if (mainMealMatch) return "Ana yemek";
    if (breakfastMatch) return "KahvaltÃƒâ€Ã‚Â±";
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