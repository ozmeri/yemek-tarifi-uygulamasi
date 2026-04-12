const loginForm = document.querySelector("#login-form");
const loginMessage = document.querySelector("#login-message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const member = JSON.parse(localStorage.getItem("fitTariflerMember") || "null");
  const profile = JSON.parse(localStorage.getItem("fitTariflerProfile") || "null");
  const formData = new FormData(loginForm);
  const email = String(formData.get("email")).trim().toLowerCase();

  if (!member) {
    loginMessage.textContent = "Bu tarayicida kayitli uyelik yok. Once uye olmalisin.";
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
