const loginForm = document.querySelector("#login-form");
const loginMessage = document.querySelector("#login-message");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const email = String(formData.get("email")).trim().toLowerCase();
  const password = String(formData.get("password") || "");

  if (window.fitFirebase?.enabled) {
    try {
      loginMessage.textContent = "Firebase ile giris yapiliyor...";
      const member = await window.fitFirebase.signIn(email, password);
      localStorage.setItem("fitTariflerMember", JSON.stringify(member));
      const profile = await window.fitFirebase.loadProfile();
      window.location.href = profile ? "profil.html" : "uyelik.html";
    } catch (error) {
      loginMessage.textContent = error.message || "Giris yapilamadi. E-posta ve sifreyi kontrol et.";
    }
    return;
  }

  const member = JSON.parse(localStorage.getItem("fitTariflerMember") || "null");
  const profile = JSON.parse(localStorage.getItem("fitTariflerProfile") || "null");

  if (!member) {
    loginMessage.textContent = "Bu tarayicida kayitli uyelik yok. Firebase ayarlari girilince hesaplar veritabanindan acilacak.";
    return;
  }

  if (member.email.toLowerCase() !== email) {
    loginMessage.textContent = "Bu e-posta ile kayitli uyelik bulamadik.";
    return;
  }

  if (!profile) {
    window.location.href = "uyelik.html";
    return;
  }

  window.location.href = "profil.html";
});
