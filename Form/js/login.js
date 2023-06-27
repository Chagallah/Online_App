const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};

signupLink.onclick = (event) => {
    event.preventDefault();
    signupBtn.click();
    return false;
};

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Perform any form validation or data processing if needed
    window.location.href = "index.html";
});

const signupForm = document.querySelector("form.signup");
signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Perform any form validation or data processing if needed
    window.location.href = "index.html";
});