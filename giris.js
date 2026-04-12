const loginForm = document.querySelector("#login-form");
const loginMessage = document.querySelector("#login-message");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const email = String(formData.get("email")).trim().toLowerCase();
  const password = String(formData.get("password") || "");

  if (window.fitFirebase?.enabled) {
    try {
      loginMessage.textContent = "Firebase ile giriş yapılıyor...";
      const member = await window.fitFirebase.signIn(email, password);
      localStorage.setItem("fitTariflerMember", JSON.stringify(member));
      const profile = await window.fitFirebase.loadProfile();
      window.location.href = profile ? "profil.html" : "uyelik.html";
    } catch (error) {
      loginMessage.textContent = error.message || "Giriş yapılamadı. E-posta ve şifreyi kontrol et.";
    }
    return;
  }

  const member = JSON.parse(localStorage.getItem("fitTariflerMember") || "null");
  const profile = JSON.parse(localStorage.getItem("fitTariflerProfile") || "null");

  if (!member) {
    loginMessage.textContent = "Bu tarayıcıda kayıtlı üyelik yok. Firebase ayarları girilince hesaplar veritabanından açılacak.";
    return;
  }

  if (member.email.toLowerCase() !== email) {
    loginMessage.textContent = "Bu e-posta ile kayıtlı üyelik bulamadık.";
    return;
  }

  if (!profile) {
    window.location.href = "uyelik.html";
    return;
  }

  window.location.href = "profil.html";
});
