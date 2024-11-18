// Import the Firebase modules you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

// Elements
const authForm = document.getElementById("auth-form");
const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");
const guestBtn = document.getElementById("guest-btn");
const userEmailSpan = document.getElementById("user-email");
const userSignedOutDiv = document.getElementById("user-signed-out");
const userSignedInDiv = document.getElementById("user-signed-in");
const errorMessage = document.getElementById("error-message");
const guestAccessDiv = document.getElementById("guest-access");

// Auth state listener
onAuthStateChanged(auth, (user) => {
  console.log("onAuthStateChanged...");

  if (user) {
    /* userSignedOutDiv.style.display = "none";
    userSignedInDiv.style.display = "block";
    guestAccessDiv.style.display = "none";
    userEmailSpan.textContent = user.email; */
    window.location.href = "home.html";
  } else {
    userSignedOutDiv.style.display = "block";
    userSignedInDiv.style.display = "none";
    guestAccessDiv.style.display = "none";
  }
});

// Sign in
signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "home.html"; // Redirect to home.html on successful login
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
    });
});

/* Sign up with validation and redirect after 3 seconds */
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    errorMessage.textContent = "Please enter both email and password.";
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      errorMessage.textContent = "Sign-up successful! Redirecting to home...";
      // Redirect after 3 seconds
      setTimeout(() => {
        window.location.href = "home.html";
      }, 3000); // 3000 milliseconds equals 3 seconds
    })
    .catch((error) => {
      console.error("Sign-up error:", error); // Log the error
      errorMessage.textContent = error.message; // Display error message
    });
});
// Sign out
document.getElementById("sign-out-btn").addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "index.html"; // Redirect to login page
  });
});

/* Continue as guest */
guestBtn.addEventListener("click", () => {
  userSignedOutDiv.style.display = "none";
  guestAccessDiv.style.display = "block";
});

// Continue browsing as guest
document.getElementById("continue-guest-btn").addEventListener("click", () => {
  // guestAccessDiv.style.display = "none";
  alert("You are now browsing as a guest.");

  // Redirect to index.html after 3 seconds
  setTimeout(() => {
    window.location.href = "home.html"; // Redirect to index.html
  }, 1000); // 3000 milliseconds equals 1 seconds
});
