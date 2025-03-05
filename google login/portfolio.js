import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "*******************************",
    authDomain: "login-52dad.firebaseapp.com",
    projectId: "login-52dad",
    storageBucket: "login-52dad.firebasestorage.app",
    messagingSenderId: "884583274312",
    appId: "1:884583274312:web:e9c9507f70c951f78a457d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        document.getElementById('user-name').textContent = user.displayName || user.email;
    } else {
        // User is signed out, redirect to login page
        window.location.href = 'index.html';
    }
});

// Handle logout
document.getElementById('logout-btn').addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful, redirect to login page
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 
