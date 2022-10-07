// array of users:

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

let guestUser = [
    // {
    //     'name': 'Guest user',
    // }
];

let activeUser = [];

async function initStart() {
    await downloadFromServer(); // wait for server
    // users.push('users'); // Test
    // users = JSON.parse(backend.getItem('users')) || []; // wenn noch keine Varible users gespeichert ist, wird diese durch ein leeres Array ersetzt
    activeUser = JSON.parse(backend.getItem('activeUser')) || []; // wenn noch keine Varible users gespeichert ist, wird diese durch ein leeres Array ersetzt
}

// Save
// Add a user with this function:

async function confirmSignUpScreen() { //Add user
    let name = document.getElementById('signup-window-input-username');
    let email = document.getElementById('signup-window-input-email');
    let password = document.getElementById('signup-window-input-passwort');
    users.push({ name: name.value, email: email.value, password: password.value }); // push to Array 'users'
    await backend.setItem('users', JSON.stringify(users));
    document.getElementById(`signup-window-input-username`).value = ``;
    document.getElementById(`signup-window-input-email`).value = ``;
    document.getElementById(`signup-window-input-passwort`).value = ``;
    document.getElementById(`signup-window`).classList.add(`d-none`);
    document.getElementById(`confirm-signup-window`).classList.remove(`d-none`);
}

// If you want to wait for the request you can add the await keyword as well:
// Add a user with this function:

async function addUser() {
    users.push({'name': 'John', 'email': 'johndoe.dev.com', 'password': 'test123'});
    await backend.setItem('users', JSON.stringify(users));
}

// Load
// Fill your empty array with users from the Server

// Delete
// Delete all users from your array:

async function deleteUser() {
    await backend.deleteItem('guestUser');
}