// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2aVdbddoZDY7L_AlLWIwJDMuHxmh0HHk",
    authDomain: "porko-bdad4.firebaseapp.com",
    databaseURL: "https://porko-bdad4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "porko-bdad4",
    storageBucket: "porko-bdad4.firebasestorage.app",
    messagingSenderId: "903004439010",
    appId: "1:903004439010:web:33d37f46d52d1bc7d2b9bb",
    measurementId: "G-PPTSVS7Z1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Sign in the user anonymously
signInAnonymously(auth)
    .then(() => {
        console.log("User signed in anonymously");
    })
    .catch((error) => {
        console.error("Error signing in anonymously:", error);
    });

export { database, auth };

import { setLogLevel } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";

// Set Firebase log level to debug
setLogLevel("debug");