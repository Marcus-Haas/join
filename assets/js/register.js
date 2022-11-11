/**
 * provided array of users for testing
 */

let users = [
    {
        'name': 'Test Account',
        'email': 'test@test.de',
        'password': 'test',
    },
    {
        'name': 'Marcus Haas',
        'email': 'marcus-haas@hotmail.de',
        'password': 'test',
    },
    {
        'name': 'Anil Orhan',
        'email': 'orhan_anil@yahoo.de',
        'password': 'test',
    },
    {
        'name': 'Marius Katzer',
        'email': 'marius.katzer@posteo.de',
        'password': 'test',
    }
];
let guestUser = [];
let activeUser = [];


/**
 * Download data from backend
 */
async function initStart() {
    await downloadFromServer(); // wait for server
    activeUser = JSON.parse(backend.getItem('activeUser')) || [];
}

/**
 * Empty array activeUser on login-screen
 */
async function emptyActiveUser() {
    await backend.setItem('activeUser', JSON.stringify(activeUser.length = 0));
}

/**
 * Take data from input-fields of the sign up screen, check if the email-adress already exists (unique feature),
 * if the email-adress does not exist, push the input values into the array 'users'
 */
async function confirmSignUpScreen() { //Add user
    document.getElementById(`failed-signup-window-input-email`).classList.add(`d-none`);
    let name = document.getElementById('signup-window-input-username').value;
    let email = document.getElementById('signup-window-input-email').value;
    let password = document.getElementById('signup-window-input-passwort').value;
    let newUser = 0;
    for (let i = 0; i < users.length; i++) {
        let userEmail = users[i]['email'];
        if (email == userEmail) { // check for existing users / email
            document.getElementById(`failed-signup-window-input-email`).classList.remove(`d-none`);
            newUser += 1;
        } else {
            newUser += 0;
        }
    }
    if (newUser == 0) {
        users.push({ name: name, email: email, password: password }); // push to Array 'users'
        await backend.setItem('users', JSON.stringify(users));
        document.getElementById(`confirm-signup-window`).classList.remove(`d-none`);
    }
}