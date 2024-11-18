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
    console.log("User is signed in:", user);
    console.log("User email:", user.email); // Access the user's email
    // You can also access user.uid, user.displayName, etc.

    // Update UI or store user information as needed
    document.getElementById("user-email").textContent = `${user.email}`;
  } else {
    console.log("No user is signed in.");

    const signOutBtn = document.getElementById("sign-out-btn");
    signOutBtn.style.display = "none";
  }
});

document.getElementById("sign-out-btn").addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location.href = "index.html"; // Redirect to login page
    })
    .catch((error) => {
      console.error("Sign out error:", error);
    });
});