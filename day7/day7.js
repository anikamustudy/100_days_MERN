const form = document.getElementById('signupform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateInputs();
});

function validateInputs() {
    // Username validation
    if (username.value.trim() === '') {
        setError(username, 'Username is required');
    } else if (username.value.length < 5) {
        setError(username, 'Username must be at least 5 characters');
    } else {
        setSuccess(username);
    }

    // Email validation
    if (email.value.trim() === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        setError(email, 'Email is not valid, please enter the valid email');
    } else {
        setSuccess(email);
    }

    // Phone validation
    if (phone.value.trim() === '') {
        setError(phone, 'Phone number is required');
    } else if (!/^\d{10}$/.test(phone.value)) {
        setError(phone, 'Phone number must be 10 digits');
    } else {
        setSuccess(phone);
    }

    // Password validation
    if (password.value.trim() === '') {
        setError(password, 'Password is required');
    } else if (!isStrongPassword(password.value)) {
        setError(password, 'Password must be at least 8 characters include uppercase lowercase number and special char');
    } else {
        setSuccess(password);
    }

    // Confirm password validation
    if (confirmPassword.value.trim() === '') {
        setError(confirmPassword, 'Confirm your password');
    } else if (confirmPassword.value !== password.value) {
        setError(confirmPassword, 'Passwords do not match');
    } else {
        setSuccess(confirmPassword);
    }
}

function setError(element, message) {
    const formGroup = element.parentElement;
    formGroup.className = 'form-group error';
    const small = formGroup.querySelector('small');
    small.innerText = message;
}

function setSuccess(element) {
    const formGroup = element.parentElement;
    formGroup.className = 'form-group success';
    const small = formGroup.querySelector('small');
    small.innerText = 'valid';
}

// Email regex
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Strong password regex: min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
function isStrongPassword(password) {

    // Must have at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    // 
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);


}


// Anika Sapkota