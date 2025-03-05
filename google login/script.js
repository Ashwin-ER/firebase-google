document.addEventListener('DOMContentLoaded', () => {
    // Form elements
    const loginForm = document.getElementById('loginFormElement');
    const signupForm = document.getElementById('signupFormElement');
    const loginContainer = document.getElementById('loginForm');
    const signupContainer = document.getElementById('signupForm');

    // Input elements
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const signupName = document.getElementById('signupName');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('confirmPassword');

    // Navigation links
    const showSignupLink = document.getElementById('showSignup');
    const showLoginLink = document.getElementById('showLogin');

    // Form switching
    showSignupLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        if (!loginEmail.value || !loginPassword.value) {
            alert('Please fill in all fields');
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(loginEmail.value)) {
            alert('Please enter a valid email address');
            return;
        }

        // Password length validation
        if (loginPassword.value.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Here you would typically send the data to a server
        console.log('Login attempt:', {
            email: loginEmail.value,
            password: loginPassword.value
        });

        // Simulate successful login
        alert('Login successful!');
        loginForm.reset();
    });

    // Signup form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Basic validation
        if (!signupName.value || !signupEmail.value || !signupPassword.value || !confirmPassword.value) {
            alert('Please fill in all fields');
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(signupEmail.value)) {
            alert('Please enter a valid email address');
            return;
        }

        // Password length validation
        if (signupPassword.value.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        // Password match validation
        if (signupPassword.value !== confirmPassword.value) {
            alert('Passwords do not match');
            return;
        }

        // Here you would typically send the data to a server
        console.log('Signup attempt:', {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPassword.value
        });

        // Simulate successful signup
        alert('Signup successful!');
        signupForm.reset();
        // Switch back to login form
        signupContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Real-time validation for login form
    loginEmail.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(loginEmail.value)) {
            loginEmail.style.borderBottomColor = '#ff4444';
        } else {
            loginEmail.style.borderBottomColor = '#4b6cb7';
        }
    });

    loginPassword.addEventListener('input', () => {
        if (loginPassword.value.length < 6) {
            loginPassword.style.borderBottomColor = '#ff4444';
        } else {
            loginPassword.style.borderBottomColor = '#4b6cb7';
        }
    });

    // Real-time validation for signup form
    signupEmail.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(signupEmail.value)) {
            signupEmail.style.borderBottomColor = '#ff4444';
        } else {
            signupEmail.style.borderBottomColor = '#4b6cb7';
        }
    });

    signupPassword.addEventListener('input', () => {
        if (signupPassword.value.length < 6) {
            signupPassword.style.borderBottomColor = '#ff4444';
        } else {
            signupPassword.style.borderBottomColor = '#4b6cb7';
        }
    });

    confirmPassword.addEventListener('input', () => {
        if (signupPassword.value !== confirmPassword.value) {
            confirmPassword.style.borderBottomColor = '#ff4444';
        } else {
            confirmPassword.style.borderBottomColor = '#4b6cb7';
        }
    });
});

// Google Sign-In callback function
function handleCredentialResponse(response) {
    // Here you would typically send the token to your server
    console.log('Google Sign-In response:', response);
    alert('Google Sign-In successful!');
} 