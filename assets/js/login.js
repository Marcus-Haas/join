/**
 * Render Start Screen
 */
function renderStartScreen() {
    setTimeout(function () {
        document.getElementById(`login-screen`).classList.add(`login-screen-end`);
    }, 350);
}

// <!-- *********************** LOG IN FUNCTION ****************** -->
//marius.katzer@posteo.de
async function openUserStartScreen() { // Log in when signed up
    let email = document.getElementById('login-window-input-email').value;
    let password = document.getElementById('login-window-input-passwort').value;
    document.getElementById('failed-login').classList.add('d-none');
    for (let i = 0; i < users.length; i++) {
        let userName = users[i]['name'];
        let userEmail = users[i]['email'];
        let userPassword = users[i]['password'];
        if (email == userEmail && password == userPassword) {
            activeUser.push(userName);
            activeUser.push(userEmail);
            activeUser.push(userPassword);
        }
    }
    await backend.setItem('activeUser', JSON.stringify(activeUser));
    window.open("summary.html", "_self");
}

async function openGuestStartScreen() { // Log in as a guest
    guestUser.push({ 'name': 'Guest User', 'email': '', 'password': '' });
    await backend.setItem('guestUser', guestUser); // save to backend
    window.open("summary.html", "_self");
}

// <!-- *********************** LOG IN FUNCTIONALTY ****************** -->

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

function forgotPasswordBackToLoginScreen() {
    document.getElementById(`login-window`).classList.remove(`d-none`);
    document.getElementById(`forgot-password-window`).classList.add(`d-none`);
}

function resetPasswordBackToForgotPasswordScreen() {
    document.getElementById(`reset-password-window`).classList.add(`d-none`);
    document.getElementById(`forgot-password-window`).classList.remove(`d-none`);
}




function showConfirmPasswordScreen() {
    let newPassword = document.getElementById(`new-password-window-input-email`).value;
    let confirmPassword = document.getElementById(`confirm-password-window-input-email`).value;
    let emailForNewPassword = document.getElementById(`forgot-password-window-input-email`).value;
    if (newPassword == confirmPassword) { // wenn beide Passwörter gleich sind, dann...
        for (let i = 0; i < users.length; i++) { //...Array users druchgehen...
            let userName = users[i]['name']; //...Variable definieren...
            let userEmail = users[i]['email']; //...Variable definieren...
            let userPassword = users[i]['password']; //...Variable definieren...
            if (emailForNewPassword == userEmail) { // wenn es keine Übereinstimmung bei der Email-Adresse gibt, dann...
                users.splice(i, 1) // ... gefundene Elemente gem. i löschen aus dem Array
                users.push({'name': JSON.stringify(userName), "email": JSON.stringify(userEmail), "password": JSON.stringify(confirmPassword)}); // ... und wieder samt NEUEM PASSWORT einfügen.
            }; // check for existing users / email
        }
        document.getElementById(`reset-password-window`).classList.add(`d-none`);
        document.getElementById(`confirm-password-window`).classList.remove(`d-none`);
        document.getElementById(`repeat-password`).classList.add(`d-none`);
            // Hier müsste noch eine Änderung / Speicherung des Arrays erfolgen, nach Übergabe der Daten aus dem Array 'users'
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

    function ConfirmSignUpBackToLoginScreen() {
        document.getElementById(`confirm-signup-window`).classList.add(`d-none`);
        document.getElementById(`login-window`).classList.remove(`d-none`);
    }

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

    function activateShowSignInPassword() {
        document.getElementById(`login-input-image`).classList.add(`login-password-visibilty-on`);
    }

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

    function activateShowSignUpPassword() {
        document.getElementById(`signup-input-image`).classList.add(`login-password-visibilty-on`);
    }


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

    function activateShowNewPassword() {
        document.getElementById(`new-password-input-image`).classList.add(`login-password-visibilty-on`);
    }

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

    function activateShowConfirmNewPassword() {
        document.getElementById(`confirm-password-input-image`).classList.add(`login-password-visibilty-on`);
    }

