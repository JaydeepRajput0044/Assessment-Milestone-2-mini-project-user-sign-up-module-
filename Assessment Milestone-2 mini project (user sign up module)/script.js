// Show current date and time in top-right corner
function showDateTime() {
    const now = new Date();
    document.getElementById("datetime").innerHTML = now.toLocaleString();
    setTimeout(showDateTime, 1000); // Update every second
}

// Validation function for registration form
function validateForm() {
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const mobile = document.getElementById("mobile").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const email = document.getElementById("email").value.trim();

    // Name validation
    const nameRegex = /^[A-Za-z]+$/;
    if (fname === "" || !nameRegex.test(fname)) {
        alert("Please enter a valid First Name (letters only).");
        return false;
    }
    if (lname === "" || !nameRegex.test(lname)) {
        alert("Please enter a valid Last Name (letters only).");
        return false;
    }

    // Password validation
    if (password === "" || password.length < 6 || password.length > 20) {
        alert("Password must be 6–20 characters long.");
        return false;
    }
    if (confirmPassword === "" || confirmPassword.length < 6 || confirmPassword.length > 20) {
        alert("Confirm Password must be 6–20 characters long.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return false;
    }

    // Gender validation
    if (!gender) {
        alert("Please select a gender.");
        return false;
    }

    // Mobile validation
    const mobileRegex = /^(\d{3}[-. ]\d{3}[-. ]\d{4})$/;
    if (!mobileRegex.test(mobile)) {
        alert("Please enter a valid mobile number (XXX-XXX-XXXX / XXX.XXX.XXXX / XXX XXX XXXX).");
        return false;
    }

    // DOB validation (DD-MM-YYYY)
    const dobRegex = /^([0-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-(\d{4})$/;
    if (!dobRegex.test(dob)) {
        alert("Please enter a valid date of birth in DD-MM-YYYY format.");
        return false;
    }

    // Email validation
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (email === "" || !emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Registration successful!");
    return true;
}

// Timer — alert after 3 minutes
let timer;
function startTimer() {
    timer = setTimeout(() => {
        alert("3 minutes passed!");
    }, 3 * 60 * 1000); // 3 minutes
}
