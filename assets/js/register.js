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


// **** TEST JSON ARRAY 'users' vom Backend laden ***
// async function initStart() {
//     await setURL(
//         "https://gruppe-330.developerakademie.net/smallest_backend_ever/"
//     );
//     await downloadFromServer();
//     users = (await JSON.parse(backend.getItem("users"))) || [];
// }


// Save
// Add a user with this function:

// marius.katzer@posteo.de

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
        users.push({ name: name.value, email: email.value, password: password.value }); // push to Array 'users'
        await backend.setItem('users', JSON.stringify(users));
        document.getElementById(`signup-window-input-username`).value = ``;
        document.getElementById(`signup-window-input-email`).value = ``;
        document.getElementById(`signup-window-input-passwort`).value = ``;
        document.getElementById(`signup-window`).classList.add(`d-none`);
        document.getElementById(`confirm-signup-window`).classList.remove(`d-none`);
    }
}

// If you want to wait for the request you can add the await keyword as well:
// Add a user with this function:

// async function addUser() {
//     users.push({ 'name': 'John', 'email': 'johndoe.dev.com', 'password': 'test123' });
//     await backend.setItem('users', JSON.stringify(users));
// }

// Load
// Fill your empty array with users from the Server

// Delete
// Delete all users from your array:


function changeLoginPassword () {
    document.getElementById(`failed-signup-window-input-email`).classList.remove(`d-none`); // Test, Funktion noch nicht fertig
}




async function deleteUser() {
    await backend.deleteItem('guestUser');
}


function deleteSingleUser() { //Übergabe des Wertes, der gelöscht werden soll, fehlt noch, Funktion noch nicht fertig
 for (let i = 0; i < users.length; i++) {
        let userName = users[i]['name'];
        let userEmail = users[i]['email'];
        let userPassword = users[i]['password'];
        if (email == userEmail && password == userPassword) { //only splice array when item is found
            activeUser.splice(users > -1);// 2nd parameter means remove one item only
            activeUser.splice(users > -1);// 2nd parameter means remove one item only
            activeUser.splice(users > -1);// 2nd parameter means remove one item only
        }
    }
    // await backend.deleteItem('guestUser'); // Übergabe ans beckend
}