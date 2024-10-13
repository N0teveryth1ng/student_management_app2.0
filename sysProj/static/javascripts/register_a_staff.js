const passwordInput = document.getElementById("password");
const lowercaseIndicator = document.getElementById("lowercase");
const uppercaseIndicator = document.getElementById("uppercase");
const digitIndicator = document.getElementById("digit");
const specialIndicator = document.getElementById("special");
const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");

passwordInput.addEventListener("input", function () {
    const value = passwordInput.value;
    const hasLowercase = /[a-z]/.test(value);
    const hasUppercase = /[A-Z]/.test(value);
    const hasDigit = /\d/.test(value);
    const hasSpecial = /[!@#$%^&*]/.test(value);

    lowercaseIndicator.classList.toggle("invalid", !hasLowercase);
    lowercaseIndicator.classList.toggle("valid", hasLowercase);
    uppercaseIndicator.classList.toggle("invalid", !hasUppercase);
    uppercaseIndicator.classList.toggle("valid", hasUppercase);
    digitIndicator.classList.toggle("invalid", !hasDigit);
    digitIndicator.classList.toggle("valid", hasDigit);
    specialIndicator.classList.toggle("invalid", !hasSpecial);
    specialIndicator.classList.toggle("valid", hasSpecial);
});

phoneInput.addEventListener("input", function () {
    const phoneNumber = phoneInput.value;

    // Allow only digits and check length
    const validNumber = /^\d{0,10}$/.test(phoneNumber);

    if (!validNumber || phoneNumber.length !== 10) {
        phoneError.textContent = "Phone number must be exactly 10 digits.";
        phoneError.style.display = "block"; // Show error message
    } else {
        phoneError.style.display = "none"; // Hide error message
    }
});

const form = document.getElementById("studentForm");
form.addEventListener("submit", function (event) {
    if (phoneError.style.display === "block") {
        event.preventDefault();
        alert("Please enter a valid phone number.");
    }
});
