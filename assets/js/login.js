/**
 * Render Start Screen after 350ms
 */
function renderStartScreen() {
    document.getElementById('render-login-html').innerHTML = renderLoginHTML();
    setTimeout(function () {
        document.getElementById(`login-screen`).classList.add(`login-screen-end`);
        document.getElementById(`user-sign-up`).classList.add(`login-screen-end`);
        document.getElementById(`user-sign-up-end`).classList.add(`login-screen-end`);
    }, 350);
}

/**
 * LOG IN FUNCTION: 
 * Check if, input entries already exist in the array 'users'.
 * If the entries match, push the data into the array 'activeUser' and open summary.html.
 * The 'active User' is from now on the basis for further actions.
 */
async function login() { // Log in when signed up
    let email = document.getElementById('login-window-input-email').value;
    let password = document.getElementById('login-window-input-passwort').value;
    hideFailedLoginAndUserSignUP();
    for (let i = 0; i < users.length; i++) {
        let userName = users[i]['name'];
        let userEmail = users[i]['email'];
        let userPassword = users[i]['password'];
        if (email == userEmail && password == userPassword) {
            activeUser.push(userName);
            activeUser.push(userEmail);
            activeUser.push(userPassword);
            await backend.setItem('activeUser', JSON.stringify(activeUser));
            window.open("summary.html", "_self");
        } else {
            document.getElementById('failed-login').classList.remove('d-none');
            document.getElementById('login-window').classList.add('login-window-failed');
        }
    }

}

/**
 * LOG IN FUNCTIONALTY: 
 * Open and close windows to prevent overlapping
 */
function hideFailedLoginAndUserSignUP() {
    document.getElementById('failed-login').classList.add('d-none');
    document.getElementById('login-window').classList.remove('login-window-failed');
}

/**
 * LOG IN FUNCTION: 
 * Logging in as a guest, pushes the data into the array 'guestUser' and open summary.html.
 */
async function openGuestStartScreen() { // Log in as a guest
    guestUser.push({ 'name': 'Guest User', 'email': '', 'password': '' });
    await backend.setItem('guestUser', guestUser); // save to backend
    window.open("summary.html", "_self");
}

/**
 * LOG IN FUNCTIONALTY: 
 * Open and close windows to prevent overlapping
 * Empty entries
 */
function showSignUp() {
    document.getElementById(`login-window`).classList.add(`d-none`);
    document.getElementById(`signup-window`).classList.remove(`d-none`);
    document.getElementById('user-sign-up').classList.add('d-none');
    document.getElementById('user-sign-up-end').classList.add('user-sign-up-end-off');
}

/**
 * LOG IN FUNCTIONALTY: 
 * Open and close windows to prevent overlapping
 */
function signUpBackToLoginScreen() {
    document.getElementById(`login-window`).classList.remove(`d-none`);
    document.getElementById(`signup-window`).classList.add(`d-none`);
    document.getElementById('user-sign-up').classList.remove('d-none');
    document.getElementById('user-sign-up-end').classList.remove('user-sign-up-end-off');
}

/**
 * LOG IN FUNCTIONALTY: 
 * Open and close windows to prevent overlapping
 */
function showForgetPassword() {
    document.getElementById(`login-window`).classList.add(`d-none`);
    document.getElementById(`forgot-password-window`).classList.remove(`d-none`);
    document.getElementById(`user-sign-up`).classList.add(`d-none`);
    document.getElementById(`user-sign-up-end`).classList.add(`user-sign-up-end-off`);
}

/**
 * RESET PASSWORD FUNCTIONALTY: 
 * Check, if email already exists. If true, show the next window.
 */
function showResetPassword() {
    let email = document.getElementById('forgot-password-window-input-email').value;
    for (let i = 0; i < users.length; i++) {
        let userEmail = users[i]['email'];
        if (email == userEmail) {
            document.getElementById('failed-forgot-password-window-input-email').classList.add('d-none');
            document.getElementById(`reset-password-window`).classList.remove(`d-none`);
            document.getElementById(`forgot-password-window`).classList.add(`d-none`);
        } else {
            document.getElementById('failed-forgot-password-window-input-email').classList.remove('d-none');
        }
    }
}

/**
 * LOG IN FUNCTIONALTY: 
 * Open and close windows to prevent overlapping
 */
function forgotPasswordBackToLoginScreen() {
    document.getElementById(`login-window`).classList.remove(`d-none`);
    document.getElementById(`forgot-password-window`).classList.add(`d-none`);
    document.getElementById('user-sign-up').classList.remove('d-none');
    document.getElementById('user-sign-up-end').classList.remove('user-sign-up-end-off');
}

/**
 * LOG IN FUNCTIONALTY: 
 * Open and close windows to prevent overlapping
 */
function resetPasswordBackToForgotPasswordScreen() {
    document.getElementById(`reset-password-window`).classList.add(`d-none`);
    document.getElementById(`forgot-password-window`).classList.remove(`d-none`);
}


/**
 * CHANGE PASSWORD FUNCTIONALTY: 
 * Check, if both passwords match
 * Check all available user and delete certain user with the entered email
 * Create und pushing a new User with the same data exept the password. The password is new.
 */
function showConfirmPasswordScreen() {
    let newPassword = document.getElementById(`new-password-window-input-email`).value;
    let confirmPassword = document.getElementById(`confirm-password-window-input-email`).value;
    let emailForNewPassword = document.getElementById(`forgot-password-window-input-email`).value;
    if (newPassword == confirmPassword) {
        for (let i = 0; i < users.length; i++) {
            let userName = users[i]['name'];
            let userEmail = users[i]['email'];
            let userPassword = users[i]['password'];
            if (emailForNewPassword == userEmail) {
                users.splice(i, 1);
                users.push({ "name": userName, "email": userEmail, "password": confirmPassword });
            };
        }
        showConfirmPasswordScreenAfterConfirmingThePassword();
    } else {
        document.getElementById(`repeat-password`).classList.remove(`d-none`);
    }
}

/**
* LOG IN FUNCTIONALTY: 
* Open and close windows to prevent overlapping
*/
function showConfirmPasswordScreenAfterConfirmingThePassword() {
    document.getElementById(`confirm-password-window`).classList.remove(`d-none`);
    document.getElementById(`repeat-password`).classList.add(`d-none`);
    document.getElementById('user-sign-up').classList.add('d-none');
    document.getElementById('user-sign-up-end').classList.add('user-sign-up-end-off');
}

/**
 * LOG IN FUNCTIONALTY: 
 * Open and close windows to prevent overlapping
 * Empty entries
 */
function ConfirmPasswordBackToLoginScreen() {
    showConfirmPasswordScreenAfterConfirmingThePassword();
    emptyInputFlields();
    document.getElementById('login-window').classList.remove('login-window-failed');
    document.getElementById(`failed-login`).classList.add(`d-none`);
    document.getElementById(`reset-password-window`).classList.add(`d-none`);
    document.getElementById(`confirm-password-window`).classList.add(`d-none`);
    document.getElementById(`login-window`).classList.remove(`d-none`);
    document.getElementById('user-sign-up').classList.remove('d-none');
    document.getElementById('user-sign-up-end').classList.remove('user-sign-up-end-off');
}

/**
 * LOG IN FUNCTIONALTY: 
 * Empty entries in the input flields
 */

function emptyInputFlields() {
    document.getElementById(`signup-window-input-username`).value = ``;
    document.getElementById(`signup-window-input-email`).value = ``;
    document.getElementById(`signup-window-input-passwort`).value = ``;
    document.getElementById(`login-window-input-email`).value = ``;
    document.getElementById(`login-window-input-passwort`).value = ``;
    document.getElementById(`new-password-window-input-email`).value = ``;
    document.getElementById(`confirm-password-window-input-email`).value = ``;
    document.getElementById(`forgot-password-window-input-email`).value = ``;
}

/**
 * LOG IN FUNCTIONALTY: 
 * Open and close windows to prevent overlapping
 * Empty entries
 */
function ConfirmSignUpBackToLoginScreen() {
    emptyInputFlields();
    document.getElementById(`confirm-signup-window`).classList.add(`d-none`);
    document.getElementById(`login-window`).classList.remove(`d-none`);
    document.getElementById(`signup-window`).classList.add(`d-none`);
    document.getElementById('user-sign-up').classList.remove('d-none');
    document.getElementById('user-sign-up-end').classList.remove('user-sign-up-end-off');
    document.getElementById('failed-login').classList.add('d-none');
    document.getElementById('login-window').classList.remove('login-window-failed');
}

/**
 * LOG IN FUNCTIONALTY: 
 * Reveal/hide the entered password by clicking the symbol in the input field.
 */
function showSignInPassword() {
    let password = document.getElementById("login-window-input-passwort");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById(`login-input-image`).classList.add(`login-password-visibilty-off`);
        document.getElementById(`login-input-image`).classList.remove(`login-password-visibilty-on`);
    } else {
        password.type = "password";
        document.getElementById(`login-input-image`).classList.add(`login-password-visibilty-on`);
        document.getElementById(`login-input-image`).classList.remove(`login-password-visibilty-off`);
    }
}

/**
 * LOG IN FUNCTIONALTY: 
 * Reveal/hide the entered password by clicking the symbol in the input field.
 */
function activateShowSignInPassword() {
    document.getElementById(`login-input-image`).classList.add(`login-password-visibilty-on`);
}


/**
 * LOG IN FUNCTIONALTY: 
 * Reveal/hide the entered password by clicking the symbol in the input field.
 */
function showSignUpPassword() {
    let password = document.getElementById("signup-window-input-passwort");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById(`signup-input-image`).classList.add(`login-password-visibilty-off`);
        document.getElementById(`signup-input-image`).classList.remove(`login-password-visibilty-on`);
    } else {
        password.type = "password";
        document.getElementById(`signup-input-image`).classList.add(`login-password-visibilty-on`);
        document.getElementById(`signup-input-image`).classList.remove(`login-password-visibilty-off`);
    }
}

/**
 * LOG IN FUNCTIONALTY: 
 * Reveal/hide the entered password by clicking the symbol in the input field.
 */
function activateShowSignUpPassword() {
    document.getElementById(`signup-input-image`).classList.add(`login-password-visibilty-on`);
}

/**
 * LOG IN FUNCTIONALTY: 
 * Reveal/hide the entered password by clicking the symbol in the input field.
 */
function showNewPassword() {
    let password = document.getElementById("new-password-window-input-email");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById(`new-password-input-image`).classList.add(`login-password-visibilty-off`);
        document.getElementById(`new-password-input-image`).classList.remove(`login-password-visibilty-on`);
    } else {
        password.type = "password";
        document.getElementById(`new-password-input-image`).classList.add(`login-password-visibilty-on`);
        document.getElementById(`new-password-input-image`).classList.remove(`login-password-visibilty-off`);
    }
}

/**
 * LOG IN FUNCTIONALTY: 
 * Reveal/hide the entered password by clicking the symbol in the input field.
 */
function activateShowNewPassword() {
    document.getElementById(`new-password-input-image`).classList.add(`login-password-visibilty-on`);
}

/**
 * LOG IN FUNCTIONALTY: 
 * Reveal/hide the entered password by clicking the symbol in the input field.
 */
function showConfirmPassword() {
    let password = document.getElementById("confirm-password-window-input-email");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById(`confirm-password-input-image`).classList.add(`login-password-visibilty-off`);
        document.getElementById(`confirm-password-input-image`).classList.remove(`login-password-visibilty-on`);
    } else {
        password.type = "password";
        document.getElementById(`confirm-password-input-image`).classList.add(`login-password-visibilty-on`);
        document.getElementById(`confirm-password-input-image`).classList.remove(`login-password-visibilty-off`);
    }
}

/**
 * LOG IN FUNCTIONALTY: 
 * Reveal/hide the entered password by clicking the symbol in the input field.
 */
function activateShowConfirmNewPassword() {
    document.getElementById(`confirm-password-input-image`).classList.add(`login-password-visibilty-on`);
}