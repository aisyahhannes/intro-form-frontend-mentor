const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const password = document.getElementById("password");

let error_first = document.getElementById("error-first");
let error_last = document.getElementById("error-last");
let error_email = document.getElementById("error-email");
let error_password = document.getElementById("error-password");

function validateInput() {
    error_first.textContent = "";
    error_last.textContent = "";
    error_email.textContent = "";
    error_password.textContent = "";

    first.classList.remove("input-error");
    last.classList.remove("input-error");
    email.classList.remove("input-error");
    password.classList.remove("input-error");

    let isValid = true;

    if (first.value.trim() === "") {
        error_first.textContent = "First Name cannot be empty";
        first.classList.add("input-error");
        isValid = false;
    }

    if (last.value.trim() === "") {
        error_last.textContent = "Last Name cannot be empty";
        last.classList.add("input-error");
        isValid = false;
    }

    if (email.value.trim() === "") {
        error_email.textContent = "Email cannot be empty";
        email.classList.add("input-error");
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        error_email.textContent = "Looks like this is not a valid email";
        email.classList.add("input-error");
        isValid = false;
    }

    if (password.value.trim() === "") {
        error_password.textContent = "Password cannot be empty";
        password.classList.add("input-error");
        isValid = false;
    }

    return isValid;
}

function main() {
    if (validateInput()) {
        window.alert("Input validated! Thank you");
        document.querySelector("form").reset();
    }
}
