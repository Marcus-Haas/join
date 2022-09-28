function renderStartScreen() {
    setTimeout(function () {
        document.getElementById(`login-screen`).classList.add(`login-screen-end`);
    }, 350);
}

function showSignUp() {
    document.getElementById(`login-window`).classList.add(`d-none`);
    document.getElementById(`signup-window`).classList.remove(`d-none`);
    document.getElementById(`forgot-password-window`).classList.add(`d-none`);
}

function signUpBackToLoginScreen() {
    document.getElementById(`login-window`).classList.remove(`d-none`);
    document.getElementById(`signup-window`).classList.add(`d-none`);
}

function showForgetPassword() {
    document.getElementById(`login-window`).classList.add(`d-none`);
    document.getElementById(`forgot-password-window`).classList.remove(`d-none`);
    document.getElementById(`signup-window`).classList.add(`d-none`);
}

function forgotPasswordBackToLoginScreen() {
    document.getElementById(`login-window`).classList.remove(`d-none`);
    document.getElementById(`forgot-password-window`).classList.add(`d-none`);
}

function showSignInPassword() {
    let password = document.getElementById("login-window-input-passwort");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById(`login-window-input-passwort`).classList.add(`login-password-visibilty-off`);
        document.getElementById(`login-window-input-passwort`).classList.remove(`login-password-visibilty-on`);
    } else {
        password.type = "password";
        document.getElementById(`login-window-input-passwort`).classList.add(`login-password-visibilty-on`);
        document.getElementById(`login-window-input-passwort`).classList.remove(`login-password-visibilty-off`);
    }
}

function showSignUpPassword() {
    let password = document.getElementById("signup-window-input-passwort");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById(`signup-window-input-passwort`).classList.add(`login-password-visibilty-off`);
        document.getElementById(`signup-window-input-passwort`).classList.remove(`login-password-visibilty-on`);
    } else {
        password.type = "password";
        document.getElementById(`signup-window-input-passwort`).classList.add(`login-password-visibilty-on`);
        document.getElementById(`signup-window-input-passwort`).classList.remove(`login-password-visibilty-off`);
    }
}