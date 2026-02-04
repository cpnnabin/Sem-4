
// -----------------------------
// Product Card Interactivity
// -----------------------------

// Get references to product card elements
const productImg = document.getElementById('product-img'); // Product image element
const addToCartBtn = document.getElementById('add-to-cart'); // "Add to Cart" button
const cartMessage = document.getElementById('cart-message'); // Message area below card

// If the product image fails to load, show fallback text
productImg.onerror = function() {
    productImg.style.display = 'none'; // Hide broken image
    const fallback = document.createElement('div'); // Create fallback text
    fallback.textContent = 'Image not available';
    fallback.className = 'fallback-img';
    productImg.parentNode.insertBefore(fallback, productImg.nextSibling); // Show fallback
};

// When "Add to Cart" is clicked, show a success message
addToCartBtn.addEventListener('click', function() {
    cartMessage.textContent = 'Product added to cart successfully!';
    setTimeout(() => {
        cartMessage.textContent = '';
    }, 2000); // Message disappears after 2 seconds
});

// -----------------------------
// Theme Toggle (Dark/Light Mode)
// -----------------------------

const themeToggle = document.getElementById('theme-toggle'); // Theme toggle button
const body = document.body;

// Function to set theme and save to localStorage
function setTheme(mode) {
    if (mode === 'dark') {
        body.classList.add('dark-mode'); // Add dark mode class
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        body.classList.remove('dark-mode'); // Remove dark mode class
        localStorage.setItem('theme', 'light'); // Save preference
    }
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', function() {
    setTheme(body.classList.contains('dark-mode') ? 'light' : 'dark');
});

// On page load, set theme from localStorage
window.onload = function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
};

// -----------------------------
// Registration Form Validation
// -----------------------------

// Get references to form and input fields
const form = document.getElementById('registration-form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const errorFullname = document.getElementById('error-fullname');
const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');
const errorConfirmPassword = document.getElementById('error-confirm-password');
const formSuccess = document.getElementById('form-success-message');

// Validate Full Name (must not be empty)
function validateFullname() {
    if (fullname.value.trim() === '') {
        errorFullname.textContent = 'Full Name is required.';
        fullname.classList.add('invalid'); // Highlight input
        return false;
    }
    errorFullname.textContent = '';
    fullname.classList.remove('invalid');
    return true;
}

// Validate Email (must match email pattern)
function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        errorEmail.textContent = 'Please enter a valid email address.';
        email.classList.add('invalid');
        return false;
    }
    errorEmail.textContent = '';
    email.classList.remove('invalid');
    return true;
}

// Validate Password (at least 8 characters)
function validatePassword() {
    if (password.value.length < 8) {
        errorPassword.textContent = 'Password must be at least 8 characters.';
        password.classList.add('invalid');
        return false;
    }
    errorPassword.textContent = '';
    password.classList.remove('invalid');
    return true;
}

// Validate Confirm Password (must match Password)
function validateConfirmPassword() {
    if (confirmPassword.value !== password.value || confirmPassword.value.length < 8) {
        errorConfirmPassword.textContent = 'Passwords do not match.';
        confirmPassword.classList.add('invalid');
        return false;
    }
    errorConfirmPassword.textContent = '';
    confirmPassword.classList.remove('invalid');
    return true;
}

// Validate fields when user leaves (blur) each input
fullname.addEventListener('blur', validateFullname);
email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);
confirmPassword.addEventListener('blur', validateConfirmPassword);

// Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload
    // Validate all fields
    const validFullname = validateFullname();
    const validEmail = validateEmail();
    const validPassword = validatePassword();
    const validConfirmPassword = validateConfirmPassword();
    // If all valid, show success and reset form
    if (validFullname && validEmail && validPassword && validConfirmPassword) {
        formSuccess.textContent = 'Registration successful!';
        form.reset(); // Clear form fields
        [fullname, email, password, confirmPassword].forEach(input => input.classList.remove('invalid'));
        setTimeout(() => {
            formSuccess.textContent = '';
        }, 2500); // Success message disappears
    }
});

// Remove error and highlight as user types
[fullname, email, password, confirmPassword].forEach(input => {
    input.addEventListener('input', function() {
        if (input.classList.contains('invalid')) {
            switch (input) {
                case fullname: validateFullname(); break;
                case email: validateEmail(); break;
                case password: validatePassword(); break;
                case confirmPassword: validateConfirmPassword(); break;
            }
        }
    });
});

// -----------------------------
// Password Show/Hide Toggle
// -----------------------------

// Get all password toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-password');

// Add click event to each toggle button
toggleButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const targetId = btn.getAttribute('data-target'); // Get input to toggle
        const targetInput = document.getElementById(targetId);
        // Toggle between password and text type
        if (targetInput.type === 'password') {
            targetInput.type = 'text';
            btn.textContent = 'Hide';
        } else {
            targetInput.type = 'password';
            btn.textContent = 'Show';
        }
    });
});
