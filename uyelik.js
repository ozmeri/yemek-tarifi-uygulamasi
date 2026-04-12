const foods = [
  { name: "Tavuklu Kinoa Salatası", calories: 465, protein: 41, carbs: 32, fat: 14, time: 20, tags: ["weight-loss", "muscle", "balanced"], allergens: [], avoidFor: [], note: "Protein ve lif dengesi yüksek, öğlen icin uygun." },
  { name: "Kabak Spagetti Tavuklu", calories: 360, protein: 37, carbs: 15, fat: 17, time: 22, tags: ["weight-loss", "low-carb", "muscle"], allergens: [], avoidFor: [], note: "Karbonhidratı azaltmak isteyenler için hafif akşam tabağı." },
  { name: "Somon ve Fırın Sebze", calories: 510, protein: 38, carbs: 24, fat: 28, time: 28, tags: ["balanced", "low-carb"], allergens: ["fish"], avoidFor: [], note: "Omega 3 ve protein destegi olan doyurucu tabak." },
  { name: "Mercimekli Sebze Çorbasi", calories: 310, protein: 18, carbs: 36, fat: 8, time: 25, tags: ["weight-loss", "balanced"], allergens: [], avoidFor: ["stomach", "reflux", "ibs", "ulcer"], note: "Lifli ve ekonomik; mide hassasiyetinde baharat azalt." },
  { name: "Nohutlu Ton Balığı Kasesi", calories: 445, protein: 39, carbs: 34, fat: 15, time: 11, tags: ["muscle", "balanced"], allergens: ["fish", "legume"], avoidFor: ["gout", "ibs"], note: "Ocak açmadan hazırlanan proteinli kase." },
  { name: "Karnabahar Pilavı Tavuklu", calories: 385, protein: 40, carbs: 18, fat: 16, time: 24, tags: ["weight-loss", "low-carb", "muscle"], allergens: [], avoidFor: ["ibs"], note: "Pilav hissi veren düşük karbonhidratlı alternatif." },
  { name: "Bulgurlu Yoğurtlu Semizotu", calories: 285, protein: 15, carbs: 34, fat: 9, time: 14, tags: ["weight-loss", "balanced"], allergens: ["dairy", "gluten"], avoidFor: ["celiac"], note: "Ferah ve hafif; sut/gluten hassasiyeti olanlara uygun degil." },
  { name: "Protein Omlet Bowl", calories: 420, protein: 36, carbs: 18, fat: 22, time: 12, tags: ["muscle", "low-carb", "balanced"], allergens: ["egg", "dairy"], avoidFor: ["cholesterol"], note: "Yüksek proteinli kahvaltı; yumurta/sut hassasiyetinde seçme." },
  { name: "Peynirli Roka Salatası", calories: 275, protein: 20, carbs: 12, fat: 16, time: 8, tags: ["weight-loss", "low-carb", "balanced"], allergens: ["dairy", "nuts"], avoidFor: [], note: "Hafif ve pratik salata; peynir ve ceviz içerir." },
  { name: "Hindi Köfteli Salata Tabağı", calories: 430, protein: 43, carbs: 22, fat: 18, time: 30, tags: ["weight-loss", "muscle", "balanced"], allergens: ["dairy"], avoidFor: [], note: "Antrenman sonrası için protein ağırlıklı temiz tabak." }
];

foods.push(...(window.fitRecipeCatalog || []));

const conditionOptions = [
  ["diabetes", "Diyabet / kan şekeri hassasiyeti"],
  ["hypertension", "Yüksek tansiyon"],
  ["cholesterol", "Kolesterol hassasiyeti"],
  ["heart", "Kalp-damar rahatsızlığı"],
  ["kidney", "Böbrek rahatsızlığı"],
  ["liver", "Karaciğer rahatsızlığı"],
  ["thyroid", "Tiroid rahatsızlığı"],
  ["pcos", "PCOS / hormonal hassasiyet"],
  ["insulin", "İnsülin direnci"],
  ["reflux", "Reflü"],
  ["gastritis", "Gastrit"],
  ["ulcer", "Ülser"],
  ["ibs", "Hassas bağırsak"],
  ["celiac", "Çölyak"],
  ["gout", "Gut"],
  ["migraine", "Migren"],
  ["anemia", "Kansızlık"],
  ["none", "Belirtmek istemiyorum / yok"]
];

const allergyOptions = [
  ["dairy", "Süt ürünleri / laktoz"],
  ["egg", "Yumurta"],
  ["fish", "Balik"],
  ["shellfish", "Kabuklu deniz ürünleri"],
  ["nuts", "Kuruyemiş"],
  ["peanut", "Yer fıstığı"],
  ["gluten", "Gluten / buğday"],
  ["soy", "Soya"],
  ["sesame", "Susam"],
  ["tomato", "Domates"],
  ["strawberry", "Çilek"],
  ["cocoa", "Kakao"],
  ["honey", "Bal"],
  ["corn", "Mısır"],
  ["legume", "Baklagil"],
  ["none", "Belirtmek istemiyorum / yok"]
];

const signupForm = document.querySelector("#signup-form");
const signupMessage = document.querySelector("#signup-message");
const wizardSection = document.querySelector("#wizard-section");
const wizardForm = document.querySelector("#wizard-form");
const wizardBody = document.querySelector("#wizard-body");
const wizardTitle = document.querySelector("#wizard-title");
const wizardHelper = document.querySelector("#wizard-helper");
const wizardStepLabel = document.querySelector("#wizard-step-label");
const wizardProgressBar = document.querySelector("#wizard-progress-bar");
const wizardBack = document.querySelector("#wizard-back");
const wizardClose = document.querySelector("#wizard-close");
const wizardNext = document.querySelector("#wizard-next");
const memberKey = "fitTariflerMember";
const profileKey = "fitTariflerProfile";
let stepIndex = 0;
let profileDraft = {};

const dietOptions = [
  ["standard", "Özel bir beslenme tarzım yok"],
  ["vegetarian", "Vejetaryenim"],
  ["vegan", "Veganım"],
  ["no-red-meat", "Kırmızı et yemem"],
  ["no-chicken", "Tavuk / hindi yemem"],
  ["no-fish", "Balık yemem"]
];

const steps = [{ key: "gender", title: "Cinsiyetini seç", helper: "Bu bilgi ileride kalori hesabını daha doğru yapmak için kullanılabilir.", render: () => choiceGroup("gender", [["female", "Kadın"], ["male", "Erkek"], ["other", "Belirtmek istemiyorum"]], true) },
  { key: "body", title: "Temel bilgilerini gir", helper: "Yaş, boy ve kilo ile yaklaşık hedef kalori hesaplayacağız.", render: () => `<div class="wizard-fields"><label>Yaş <input name="age" type="number" min="12" max="100" placeholder="28" required></label><label>Boy (cm) <input name="height" type="number" min="120" max="230" placeholder="170" required></label><label>Kilo (kg) <input name="weight" type="number" min="35" max="250" placeholder="75" required></label></div>` },
  { key: "goal", title: "Hedeflerin neler?", helper: "Birden fazla hedef seçebilirsin. Tarifleri bu hedeflere göre önceliklendireceğiz.", render: () => choiceGroup("goal", [["weight-loss", "Kilo vermek"], ["muscle", "Protein ağırlıklı beslenmek"], ["balanced", "Dengeli beslenmek"], ["low-carb", "Karbonhidratı azaltmak"]], false) },
  { key: "diet", title: "Yemediğin yiyecekler var mı?", helper: "Vegan, vejetaryen veya sevmediğin/yemediğin sebze, meyve, et gibi yiyecekleri burada belirt.", render: () => multiChoiceWithOther("diet", dietOptions, "Örnek: mantar, kabak, muz, tavuk, soğan") },
  { key: "conditions", title: "Kronik rahatsızlık var mı?", helper: "Birden fazla seçim yapabilirsin. Listede yoksa Diğer alanına kendin yaz.", render: () => multiChoiceWithOther("conditions", conditionOptions, "Başka rahatsızlık varsa yaz") },
  { key: "allergies", title: "Alerji veya hassasiyet seç", helper: "Birden fazla seçim yapabilirsin. Listede yoksa Diğer alanına kendin yaz.", render: () => multiChoiceWithOther("allergies", allergyOptions, "Başka alerji varsa yaz") },
  { key: "activity", title: "Aktivite durumun", helper: "Günlük kalori hedefini kabaca ayarlamak için kullanılır.", render: () => choiceGroup("activity", [["low", "Az hareketli"], ["medium", "Orta hareketli"], ["high", "Çok hareketli"]], true) }
];

function choiceGroup(name, options, required) {
  const type = required ? "radio" : "checkbox";
  return `<div class="wizard-options">${options.map(([value, label]) => `<label class="wizard-option"><input type="${type}" name="${name}" value="${value}" ${required ? "required" : ""}><span>${label}</span></label>`).join("")}</div>`;
}

function multiChoiceWithOther(name, options, placeholder) {
  return `${choiceGroup(name, options, false)}<label class="wizard-other">Diğer<input name="${name}Other" type="text" placeholder="${placeholder}"></label>`;
}

function saveMember(member) { localStorage.setItem(memberKey, JSON.stringify(member)); }
function getMember() { const stored = localStorage.getItem(memberKey); return stored ? JSON.parse(stored) : null; }

function calculateBmi(weight, height) { const meters = height / 100; return weight / (meters * meters); }
function estimateCalories(weight, height, age, goals, activity) {
  const selectedGoals = normalizeArray(goals);
  const base = 10 * weight + 6.25 * height - 5 * age;
  const activityBonus = activity === "high" ? 520 : activity === "medium" ? 320 : 160;
  let goalAdjust = 0;
  if (selectedGoals.includes("weight-loss")) goalAdjust -= 300;
  if (selectedGoals.includes("muscle")) goalAdjust += 220;
  if (selectedGoals.includes("low-carb")) goalAdjust -= 150;
  return Math.round(base + activityBonus + goalAdjust);
}

function normalizeText(value) {
  return String(value || "").toLowerCase().replace(/ı/g, "i").replace(/ğ/g, "g").replace(/ü/g, "u").replace(/ş/g, "s").replace(/ö/g, "o").replace(/ç/g, "c");
}

function splitOtherFoods(value) {
  return normalizeText(value).split(/[,;\n]+/).map((item) => item.trim()).filter(Boolean);
}

function foodSearchText(food) {
  return normalizeText([food.name, food.note, ...(food.tags || []), ...(food.allergens || [])].join(" "));
}

function dietConflicts(food, diet, dietOther) {
  const selectedDiet = normalizeArray(diet);
  const text = foodSearchText(food);
  const blockedWords = splitOtherFoods(dietOther);

  if (selectedDiet.includes("vegan") && /tavuk|hindi|somon|ton|balik|omlet|yumurta|peynir|yogurt|sut/.test(text)) return true;
  if (selectedDiet.includes("vegetarian") && /tavuk|hindi|somon|ton|balik/.test(text)) return true;
  if (selectedDiet.includes("no-red-meat") && /dana|etli/.test(text)) return true;
  if (selectedDiet.includes("no-chicken") && /tavuk|hindi/.test(text)) return true;
  if (selectedDiet.includes("no-fish") && /somon|ton|balik/.test(text)) return true;

  return blockedWords.some((word) => text.includes(word));
}

function isSafeForProfile(food, allergies, conditions, diet, dietOther) {
  const hasAllergyConflict = food.allergens.some((allergen) => allergies.includes(allergen));
  const hasConditionConflict = food.avoidFor.some((condition) => conditions.includes(condition));
  const hasDietConflict = dietConflicts(food, diet, dietOther);
  return !hasAllergyConflict && !hasConditionConflict && !hasDietConflict;
}

function scoreFood(food, goals) {
  const selectedGoals = normalizeArray(goals);
  let score = food.tags.some((tag) => selectedGoals.includes(tag)) ? 4 : 1;
  if (selectedGoals.includes("weight-loss") && food.calories <= 430) score += 2;
  if (selectedGoals.includes("muscle") && food.protein >= 35) score += 2;
  if (selectedGoals.includes("low-carb") && food.carbs <= 24) score += 2;
  if (selectedGoals.includes("balanced") && food.calories <= 500) score += 2;
  return score;
}

function showWizard() { wizardSection.classList.remove("hidden"); renderStep(); }
function closeWizard() {
  wizardSection.classList.add("hidden");
  profileDraft = {};
  stepIndex = 0;
  if (localStorage.getItem(profileKey)) {
    window.location.href = "profil.html";
  }
}
function renderStep() {
  const step = steps[stepIndex];
  wizardStepLabel.textContent = `${stepIndex + 1}. adım / ${steps.length}`;
  wizardTitle.textContent = step.title;
  wizardHelper.textContent = step.helper;
  wizardBody.innerHTML = step.render();
  wizardBack.disabled = stepIndex === 0;
  wizardNext.textContent = stepIndex === steps.length - 1 ? "Profili tamamla" : "İleri";
  wizardProgressBar.style.width = `${((stepIndex + 1) / steps.length) * 100}%`;
}

function collectStepData() {
  const formData = new FormData(wizardForm);
  const step = steps[stepIndex];
  if (step.key === "body") {
    profileDraft.age = Number(formData.get("age"));
    profileDraft.height = Number(formData.get("height"));
    profileDraft.weight = Number(formData.get("weight"));
    return;
  }
  const values = formData.getAll(step.key).filter((item) => item !== "none");
  profileDraft[step.key] = values.length > 1 ? values : values[0] || [];
  if (step.key === "conditions" || step.key === "allergies" || step.key === "diet") {
    const otherValue = String(formData.get(`${step.key}Other`) || "").trim();
    profileDraft[`${step.key}Other`] = otherValue;
  }
}

function normalizeArray(value) { if (!value) return []; return Array.isArray(value) ? value : [value]; }

async function finishWizard() {
  const member = getMember();
  const allergies = normalizeArray(profileDraft.allergies);
  const conditions = normalizeArray(profileDraft.conditions);
  const diet = normalizeArray(profileDraft.diet);
  const profile = { ...profileDraft, memberName: member.fullName, email: member.email, allergies, conditions, diet };
  profile.bmi = calculateBmi(profile.weight, profile.height);
  profile.calorieTarget = estimateCalories(profile.weight, profile.height, profile.age, profile.goal, profile.activity);

  const safeFoods = foods.filter((food) => isSafeForProfile(food, allergies, conditions, diet, profileDraft.dietOther));
  profile.recommendations = safeFoods.sort((a, b) => scoreFood(b, profile.goal) - scoreFood(a, profile.goal)).slice(0, 5);
  profile.blockedCount = foods.length - safeFoods.length;
  profile.needsExpertReview = Boolean(profile.conditionsOther || profile.allergiesOther || profile.dietOther);

  localStorage.setItem(profileKey, JSON.stringify(profile));
  if (window.fitFirebase?.enabled) {
    await window.fitFirebase.saveProfile(profile);
  }
  window.location.href = "profil.html";
}

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(signupForm);
  const password = String(formData.get("password"));
  const fullName = String(formData.get("fullName")).trim();
  const email = String(formData.get("email")).trim().toLowerCase();
  if (password.length < 6) return;

  try {
    let member = { fullName, email, createdAt: new Date().toISOString() };
    if (window.fitFirebase?.enabled) {
      signupMessage.textContent = "Üyelik Firebase üzerinden oluşturuluyor...";
      member = await window.fitFirebase.createMember(email, password, fullName);
    }
    saveMember(member);
    signupMessage.textContent = window.fitFirebase?.enabled
      ? "Üyelik oluşturuldu. Şimdi profil bilgilerini tamamlayalım."
      : "Demo üyelik oluşturuldu. Firebase ayarları girilince bilgiler veritabanında saklanacak.";
    stepIndex = 0;
    profileDraft = {};
    wizardForm.classList.remove("hidden");
    showWizard();
  } catch (error) {
    signupMessage.textContent = error.message || "Üyelik oluşturulamadı. Bilgileri kontrol edip tekrar dene.";
  }
});

wizardClose.addEventListener("click", closeWizard);
wizardBack.addEventListener("click", () => { if (stepIndex === 0) return; stepIndex -= 1; renderStep(); });
wizardForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  collectStepData();
  if (stepIndex < steps.length - 1) { stepIndex += 1; renderStep(); return; }
  await finishWizard();
});
if (sessionStorage.getItem("startProfileWizard") === "1" && getMember()) {
  sessionStorage.removeItem("startProfileWizard");
  stepIndex = 0;
  profileDraft = {};
  wizardForm.classList.remove("hidden");
  showWizard();
}




