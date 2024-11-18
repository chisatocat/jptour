// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7CNOBhlf5YS0pIdwBM3Pv-1DQgl66ZxY",
  authDomain: "erbproject-49144.firebaseapp.com",
  projectId: "erbproject-49144",
  storageBucket: "erbproject-49144.firebasestorage.app",
  messagingSenderId: "1008610896153",
  appId: "1:1008610896153:web:daf7da505dac8ad0533d88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Auth state listener to get user information
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, you can access user information here
    /*    console.log("User is signed in:", user); */
    /* console.log("User email:", user.email);  */
    // You can also access user.uid, user.displayName, etc.

    // Update UI or store user information as needed

    const username = user.email.split("@")[0];

    const userInfoContainer = document.querySelector(".user-info-container");

    const username_div = document.createElement("div");
    username_div.id = "user-email";
    username_div.innerText = username;
    userInfoContainer.appendChild(username_div);

    const anchor = document.createElement("a");
    anchor.id = "sign-out-btn";
    anchor.innerText = "登出";
    userInfoContainer.appendChild(anchor);

    document.getElementById("sign-out-btn").addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          window.location.href = "index.html"; // Redirect to login page
        })
        .catch((error) => {
          console.error("Sign out error:", error);
        });
    });
  } else {
    console.log("No user is signed in.");
  }
});
