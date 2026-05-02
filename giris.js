const loginForm = document.querySelector("#login-form");
const loginMessage = document.querySelector("#login-message");
const resetPasswordButton = document.querySelector("#reset-password");

function mapAuthError(error) {
  const code = error?.code || "";

  if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
    return "Bu e-posta ve şifre ile giriş yapılamadı. Hesap silinmiş olmak zorunda değil; şifre yanlış olabilir ya da bu e-posta farklı giriş yöntemiyle açılmış olabilir.";
  }

  if (code === "auth/too-many-requests") {
    return "Çok fazla deneme yapıldı. Birkaç dakika bekleyip tekrar dene ya da şifre sıfırlamayı kullan.";
  }

  if (code === "auth/invalid-email") {
    return "E-posta adresi geçersiz görünüyor.";
  }

  return error?.message || "Giriş yapılamadı. E-posta ve şifreyi kontrol et.";
}

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
      loginMessage.textContent = mapAuthError(error);
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

resetPasswordButton?.addEventListener("click", async () => {
  const emailInput = loginForm.querySelector('input[name="email"]');
  const email = String(emailInput?.value || "").trim().toLowerCase();

  if (!email) {
    loginMessage.textContent = "Önce e-posta adresini yaz, sonra şifre sıfırlamayı kullan.";
    return;
  }

  if (!window.fitFirebase?.enabled || typeof window.fitFirebase.resetPassword !== "function") {
    loginMessage.textContent = "Şifre sıfırlama şu anda kullanılamıyor.";
    return;
  }

  try {
    loginMessage.textContent = "Şifre sıfırlama e-postası gönderiliyor...";
    await window.fitFirebase.resetPassword(email);
    loginMessage.textContent = "Şifre sıfırlama bağlantısı gönderildi. Gelen kutunu ve spam klasörünü kontrol et.";
  } catch (error) {
    loginMessage.textContent = mapAuthError(error);
  }
});
