/**
 * Render Start Screen
 */
function renderStartScreen() {
    setTimeout(function () {
        document.getElementById(`login-screen`).classList.add(`login-screen-end`);
    }, 350);
}

function showSignUp() {
    document.getElementById(`login-window`).classList.add(`d-none`);
    document.getElementById(`signup-window`).classList.remove(`d-none`);
    document.getElementById(`forgot-password-window`).classList.add(`d-none`);
    document.getElementById(`reset-password-window`).classList.add(`d-none`);
    document.getElementById(`confirm-password-window`).classList.add(`d-none`);
    document.getElementById(`new-password-window-input-email`).value = ``;
    document.getElementById(`confirm-password-window-input-email`).value = ``;
    document.getElementById(`forgot-password-window-input-email`).value = ``;
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

function showResetPassword() {
    document.getElementById(`reset-password-window`).classList.remove(`d-none`);
    document.getElementById(`forgot-password-window`).classList.add(`d-none`);
}

function forgotPasswordBackToLoginScreen() {
    document.getElementById(`login-window`).classList.remove(`d-none`);
    document.getElementById(`forgot-password-window`).classList.add(`d-none`);
}

function resetPasswordBackToForgotPasswordScreen() {
    document.getElementById(`reset-password-window`).classList.add(`d-none`);
    document.getElementById(`forgot-password-window`).classList.remove(`d-none`);
}

function showConfirmPassword() {
    let newPassword = document.getElementById(`new-password-window-input-email`).value;
    let confirmPassword = document.getElementById(`confirm-password-window-input-email`).value;
    if (newPassword == confirmPassword) {
        document.getElementById(`reset-password-window`).classList.add(`d-none`);
        document.getElementById(`confirm-password-window`).classList.remove(`d-none`);
        document.getElementById(`repeat-password`).classList.add(`d-none`);
    } else {
        document.getElementById(`repeat-password`).classList.remove(`d-none`);
    }
}

function ConfirmPasswordBackToLoginScreen() {
    document.getElementById(`new-password-window-input-email`).value = ``;
    document.getElementById(`confirm-password-window-input-email`).value = ``;
    document.getElementById(`forgot-password-window-input-email`).value = ``;
    document.getElementById(`confirm-password-window`).classList.add(`d-none`);
    document.getElementById(`login-window`).classList.remove(`d-none`);
}

// function confirmSignUpScreen() {

// }

function ConfirmSignUpBackToLoginScreen() {
    document.getElementById(`confirm-signup-window`).classList.add(`d-none`);
    document.getElementById(`login-window`).classList.remove(`d-none`);
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
        document.getElementById(`new-password-window-input-email`).classList.add(`login-password-visibilty-off`);
        document.getElementById(`new-password-window-input-email`).classList.remove(`login-password-visibilty-on`);
    } else {
        password.type = "password";
        document.getElementById(`new-password-window-input-email`).classList.add(`login-password-visibilty-on`);
        document.getElementById(`new-password-window-input-email`).classList.remove(`login-password-visibilty-off`);
    }
}

function newPassword() {
    let password = document.getElementById("new-password-window-input-email");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById(`new-password-window-input-email`).classList.add(`login-password-visibilty-off`);
        document.getElementById(`new-password-window-input-email`).classList.remove(`login-password-visibilty-on`);
    } else {
        password.type = "password";
        document.getElementById(`new-password-window-input-email`).classList.add(`login-password-visibilty-on`);
        document.getElementById(`new-password-window-input-email`).classList.remove(`login-password-visibilty-off`);
    }
}

function confirmNewPassword() {
    let password = document.getElementById("confirm-password-window-input-email");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById(`confirm-password-window-input-email`).classList.add(`login-password-visibilty-off`);
        document.getElementById(`confirm-password-window-input-email`).classList.remove(`login-password-visibilty-on`);
    } else {
        password.type = "password";
        document.getElementById(`confirm-password-window-input-email`).classList.add(`login-password-visibilty-on`);
        document.getElementById(`confirm-password-window-input-email`).classList.remove(`login-password-visibilty-off`);
    }
}


// <!-- *********************** LOG IN FUNCTION ****************** -->



function openUserStartScreen() { // Log in when signed up
    let email = document.getElementById('login-window-input-email').value;
    let password = document.getElementById('login-window-input-passwort').value;
    // let user = users.find(u => u.email == email.value && u.password == password.value);
    // if (users.find(u => u.email == email.value && u.password == password.value)) { // if the user and password exists ...
        document.getElementById('failed-login').classList.add('d-none');
        // activeUser.push(users); for-schleife erforderlich?
        for (let i = 0; i < users.length; i++) {
            let userName = users[i]['name'];
            let userEmail = users[i]['email'];
            let userPassword = users[i]['password'];
            if (email == userEmail && password == userPassword) {
                activeUser.push(userName);
                activeUser.push(userEmail);
                activeUser.push(userPassword);
                }
            backend.setItem('activeUser', JSON.stringify(activeUser));
        }
        window.open("summary.html", "_self"); //... open start screen 'summary'
    // } else {
    //     document.getElementById('failed-login').classList.remove('d-none'); //... or let errer msg appear
    // }
// }
    }

function openGuestStartScreen() { // Log in as a guest
    window.open("summary.html", "_self");
}