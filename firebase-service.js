(function () {
  const config = window.fitFirebaseConfig || {};
  const hasConfig = Boolean(config.apiKey && config.authDomain && config.projectId && config.appId);
  let auth = null;
  let db = null;

  function init() {
    if (!hasConfig || !window.firebase) return false;
    if (!window.firebase.apps.length) {
      window.firebase.initializeApp(config);
    }
    auth = window.firebase.auth();
    db = window.firebase.firestore();
    return true;
  }

  const enabled = init();

  function publicMemberFromUser(user, fullName) {
    return {
      uid: user.uid,
      fullName: fullName || user.displayName || "",
      email: user.email,
      firebase: true,
      createdAt: new Date().toISOString()
    };
  }

  async function createMember(email, password, fullName) {
    if (!enabled) return null;
    const credential = await auth.createUserWithEmailAndPassword(email, password);
    if (fullName) {
      await credential.user.updateProfile({ displayName: fullName });
    }
    const member = publicMemberFromUser(credential.user, fullName);
    await db.collection("users").doc(credential.user.uid).set({ member }, { merge: true });
    return member;
  }

  async function signIn(email, password) {
    if (!enabled) return null;
    const credential = await auth.signInWithEmailAndPassword(email, password);
    return publicMemberFromUser(credential.user);
  }

  async function saveProfile(profile) {
    if (!enabled || !auth.currentUser) return false;
    const member = publicMemberFromUser(auth.currentUser, profile.memberName);
    await db.collection("users").doc(auth.currentUser.uid).set({
      member,
      profile,
      updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    return true;
  }

  async function loadProfile() {
    if (!enabled || !auth.currentUser) return null;
    const snapshot = await db.collection("users").doc(auth.currentUser.uid).get();
    if (!snapshot.exists) return null;
    const data = snapshot.data() || {};
    if (data.member) localStorage.setItem("fitTariflerMember", JSON.stringify(data.member));
    if (data.profile) localStorage.setItem("fitTariflerProfile", JSON.stringify(data.profile));
    return data.profile || null;
  }

  async function signOut() {
    if (!enabled || !auth.currentUser) return;
    await auth.signOut();
  }

  window.fitFirebase = {
    enabled,
    createMember,
    signIn,
    saveProfile,
    loadProfile,
    signOut
  };
})();
