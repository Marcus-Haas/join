/**
 * Loading the html template for index.html
 */

function renderLoginHTML() {
    return /*html*/ `

        <div class="logo-sign-up"> 
            <div class="start-screen" id="logo">
                <img src="assets/img/login/Capa 2.svg" class="start-screen-logo-big" id="start-screen-logo-big">
            </div>
            <div class="user-sign-up" id="user-sign-up">
                <span>Not a Join user?</span>
                <button onclick="showSignUp()">Sign up</button>
            </div>
        </div>
        <div class="login-screen-start" id="login-screen">
            <!-- *********************** LOGIN SECTION FOR JS ****************** -->
            <div class="set-login-window">
                <div class="login-window" id="login-window">
                    <div class="login-headline">Log in</div>
                    <form onsubmit="login(); return false;">
                        <input type="email" required class="login-window-input-email" id="login-window-input-email"
                            placeholder="Email">
                        <div class="set-login-window-input-passwort">
                            <input type="password" required class="login-window-input-passwort"
                                id="login-window-input-passwort" placeholder="Password"
                                onclick="activateShowSignInPassword()">
                            <div class="login-input-image" onclick="showSignInPassword()" id="login-input-image"></div>
                        </div>
                        <div class="remember-me-forgot-my-passwort">
                            <div class="remember-me-clickbox">
                                <input type="checkbox" id="remember-me" name="remember-me">
                                <label for="remember-me">Remember me</label>
                            </div>
                            <a href="#" onclick="showForgetPassword()">Forgot my password</a>
                        </div>
                        <span class="d-none red-font" id="failed-login">Email or password is wrong</span>
                        <div class="login-guestlogin">
                            <button class="login-button">Log in</button>
                        </div>
                    </form>
                    <div><button class="guestlogin-button" onclick="openGuestStartScreen(); return false;">Guest Log
                            in</button>
                    </div>
                </div>
                <!-- *********************** SIGN UP SECTION FOR JS ****************** -->
                <div class="signup-window d-none" id="signup-window">
                    <img src="assets/img/login/signup-back.png" class="signup-back" id="signup-back"
                        onclick="signUpBackToLoginScreen()">
                    <div class="login-headline">Sign up</div>
                    <form onsubmit="confirmSignUpScreen(); return false;">
                        <input type="text" required class="login-window-input-username"
                            id="signup-window-input-username" placeholder="Name">
                        <input type="email" required class="login-window-input-email" id="signup-window-input-email"
                            placeholder="Email">
                        <div class="login-window-input-passwort-container">
                            <input type="password" required class="login-window-input-passwort"
                                id="signup-window-input-passwort" placeholder="Password"
                                onclick="activateShowSignUpPassword()">
                            <div class="signup-input-image" onclick="showSignUpPassword()" id="signup-input-image">
                            </div>
                        </div>
                        <span class="d-none red-font" id="failed-signup-window-input-email">User already exists!</span>
                        <div class="position-button">
                            <button class="signup-button">Sign up</button>
                        </div>
                    </form>
                </div>
                <!-- *********************** CONFIRM SIGN UP SECTION FOR JS ****************** -->
                <div class="confirm-signup-window d-none" id="confirm-signup-window">
                    <div class="position-button">
                        <button class="confirm-signup-button" onclick="ConfirmSignUpBackToLoginScreen()">
                Thanks for signing up, <br> you can sign in now</button>
                    </div>
                </div>
                <!-- *********************** FORGOT PASSWORD SECTION FOR JS ****************** -->
                <div class="forgot-password-window d-none" id="forgot-password-window">
                    <img src="assets/img/login/signup-back.png" class="forgot-back" id="signup-back"
                        onclick="forgotPasswordBackToLoginScreen()">
                    <div class="forgot-password-headline">I forgot my password</div>
                    <!-- *********************** FORM VALIDATION ****************** -->
                    <span>Don't worry! We will send you an email with the instructions to <br> reset you
                        password.</span>
                    <form onsubmit="showResetPassword(); return false;">
                        <input type="email" required class="login-window-input-email"
                            id="forgot-password-window-input-email" placeholder="Email">
                        <span class="d-none red-font" id="failed-forgot-password-window-input-email">Please sign up
                            first!</span>

                        <div class="position-button">
                            <button class="forgot-password-button">Send me the email</button>
                        </div>
                    </form>
                </div>
                <!-- *********************** RESET PASSWORD SECTION FOR JS ****************** -->
                <div class="reset-password-window d-none" id="reset-password-window">
                    <img src="assets/img/login/signup-back.png" class="reset-back" id="signup-back"
                        onclick="resetPasswordBackToForgotPasswordScreen()">
                    <div class="reset-password-headline">Reset your Password</div>
                    <!-- *********************** FORM VALIDATION ****************** -->
                    <span>Change your account password.</span>
                    <form onsubmit="showConfirmPasswordScreen(); return false;">
                        <div class="login-window-input-passwort-container" >
                            <input type="password" required class="login-window-input-passwort"
                                id="new-password-window-input-email" onclick="activateShowNewPassword()"
                                placeholder="New password">
                            <div class="new-password-input-image" onclick="showNewPassword()"
                                id="new-password-input-image"></div>
                        </div>

                        <div class="login-window-input-passwort-container">
                            <input type="password" required class="login-window-input-passwort"
                                id="confirm-password-window-input-email" onclick="activateShowConfirmNewPassword()"
                                placeholder="Confirm password">
                            <div class="confirm-password-input-image" onclick="showConfirmPassword()"
                                id="confirm-password-input-image"></div>
                        </div>
                        <div class="repeat-password">
                            <span class="d-none red-font" id="repeat-password">Please repeat new password!</span>

                            <button class="forgot-password-button">Continue</button>
                        </div>
                    </form>
                </div>
                <!-- *********************** CONFIRM NEW PASSWORD SECTION FOR JS ****************** -->
                <div class="confirm-password-window d-none" id="confirm-password-window">
                    <div class="position-button">
                        <button class="confirm-password-button" onclick="ConfirmPasswordBackToLoginScreen()">You reset
                            your
                            password</button>
                    </div>
                </div>
            </div>
            <div class="user-sign-up-end" id="user-sign-up-end">
                    <span>Not a Join user?</span>
                    <button onclick="showSignUp()">Sign up</button>
            </div>
        </div>
`;
}