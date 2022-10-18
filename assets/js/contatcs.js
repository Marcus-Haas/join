let contactName;
let contactEmail;
let contactPhone;
let contactInitials;

let newEmail = 0;


let contacts = [];


function showOverlay() {
    document.getElementById('overlay-background').classList.remove('d-none');
}


function closeOverlay() {
    document.getElementById('overlay-background').classList.add('d-none');
    hideEmailMessage();
    clearInputAtOverlay();
}


async function addNewContact() {
    let contactName = document.getElementById('new-name').value;
    let contactEmail = document.getElementById('new-email').value;
    let contactPhone = document.getElementById('new-phone').value;
    let contactInitials = contactName.match(/(\b\S)?/g).join("").toUpperCase();
    checkForDuplicate(contactName, contactEmail, contactPhone, contactInitials);
}


function pushContacts(contactName, contactEmail, contactPhone, contactInitials) {
    let contact = {
        'name': contactName,
        'email': contactEmail,
        'phone': contactPhone,
        'initials': contactInitials,
    }
    contacts.push(contact);
    pushContactsToBackend();
}


function checkForDuplicate(contactName, contactEmail, contactPhone, contactInitials) {
    newEmail = 0;
    for (let i = 0; i < contacts.length; i++) {
        let existingMail = contacts[i]['email'];
        if (existingMail == contactEmail) { // check for existing users / email
            newEmail += 1;
        } else {
            newEmail += 0;
        }
        if (newEmail == 1) {
            showEmailMessage();
        }
    }
    if (newEmail == 0) {
        pushContacts(contactName, contactEmail, contactPhone, contactInitials);
        closeOverlay();
        renderContactBook();
        clearInputAtOverlay();
    }
}

function showEmailMessage() {
    document.getElementById('double-email').innerHTML = 'This contact already exists!';
}


function hideEmailMessage() {
    document.getElementById('double-email').innerHTML = '';
}


function renderContactBook() {
    let container = document.getElementById('contact-book');
    container.innerHTML = '';
    for (let index = 0; index < contacts.length; index++) {
        container.innerHTML += generateHTMLforContactBook(index);
    }
}


function generateHTMLforContactBook(i) {
    return /*html*/ `
    <div class="contact-book-container" id="contact-book-bg${i}" onclick="openBusinessCard(${i})">
        <div class="contact-circle">${contacts[i]['initials']}</div>
        <div class="contact-book-frame">
            <div id="contact-book-name${i}" class="contact-book-name">${contacts[i]['name']}</div>
            <div class="contact-book-email">${contacts[i]['email']}</div>
        </div>
    </div>
    `;
}


function clearInputAtOverlay() {
    document.getElementById('new-name').value = '';
    document.getElementById('new-email').value = '';
    document.getElementById('new-phone').value = '';
}

function openBusinessCard(i) {
    let card = document.getElementById('business-card');
    card.innerHTML = generateBusinessCard(i);
}


function generateBusinessCard(i) {
    return /*html*/ `
    <div class="business-card-main">
        <div class="business-card-header">
            <div class="business-card-initials">${contacts[i]['initials']}</div>
            <div>
                <div class="business-card-name">${contacts[i]['name']}</div>
                <a href="addTask.html" class="business-card-task">+ Add Task</a>
            </div>
        </div>
        <div class="business-card-text">
            <div>Contact Information</div>
            <div class="business-card-edit-frame">
                <img src="assets/img/contacts/pen.png">
                <div onclick="editContact(${i})">Edit Contact</div>
            </div>
        </div>
        <div class="business-card-email-frame">
            <div class="business-card-email-headline">Email</div>
            <div class="business-card-email">${contacts[i]['email']}</div>
        </div>
        <div class="business-card-phone-frame">
            <div class="business-card-phone-headline">Phone</div>
            <div class="business-card-phone-number">${contacts[i]['phone']}</div>
        </div>
        <div class="edit-responsive"><img src="assets/img/contacts/edit-responsive.svg" onclick="deleteContact(${i})"></div>
        <div class="delete-contact" onclick="deleteContact(${i})">Delete Contact!</div>
    </div>
    `;
}


function editContact(i) {
    let edit = document.getElementById('edit');
    edit.innerHTML = generateEditOverlay(i);
    document.getElementById('edit-name').value = contacts[i]['name'];
    document.getElementById('edit-email').value = contacts[i]['email'];
    document.getElementById('edit-phone').value = contacts[i]['phone'];
}


function closeEditOverlay() {
    document.getElementById('edit-background').classList.add('d-none');
}


function generateEditOverlay(i) {
    return /*html*/ `
 <div class="overlay-bg" id="edit-background">
        <div class="overlay-add-contact-container" id="overlay-container">
            <div class="overlay-left-part">
                <img class="overlay-join-logo" src="assets/img/contacts/logo.png">
                <div class="overlay-headline">Edit contact</div>
                <div class="overlay-slogan-border"></div>
            </div>
            <div class="overlay-right-part">
                <img class="close-overlay" src="assets/img/contacts/cancel-icon.png" onclick="closeEditOverlay()">
                <div class="user-contacts-help-frame">
                    <div class="overlay-user-initials">${contacts[i]['initials']}</div>

                    <form onsubmit="saveContact(${i}); return false;">
                        <div class="overlay-contacts-details-container">
                            <div class="overlay-contacts-details-frame">
                                <input id="edit-name" class="overlay-input-design input-icon-user" required type="text"
                                placeholder="Name">
                            </div>
                            <div class="overlay-contacts-details-frame">
                                <input id="edit-email" class="overlay-input-design input-icon-letter" required type="email"
                                placeholder="Email">
                            </div>
                            <div class="overlay-contacts-details-frame">
                                <input id="edit-phone" class="overlay-input-design input-icon-phone" required
                                placeholder="Phone">
                            </div>
                        </div>
                        <button class="overlay-save-frame">
                            <div class="overlay-save-btn">
                                <div class="overlay-save-btn-text">Save</div>
                            </div>
                        </button>
                    </form>
            </div>
        </div>
    </div>
`;
}


async function saveContact(i) {
    let contactName = document.getElementById('edit-name').value;
    let contactEmail = document.getElementById('edit-email').value;
    let contactPhone = document.getElementById('edit-phone').value;
    let contactInitials = contactName.match(/(\b\S)?/g).join("").toUpperCase();
    await updateContatcs(i, contactName, contactEmail, contactPhone, contactInitials);
    closeEditOverlay();
    renderContactBook();
    openBusinessCard(i);
}


function updateContatcs(i, contactName, contactEmail, contactPhone, contactInitials) {
    contacts[i]['name'] = contactName
    contacts[i]['email'] = contactEmail
    contacts[i]['phone'] = contactPhone
    contacts[i]['initials'] = contactInitials
    pushContactsToBackend();

}


function pushContactsToBackend() {
    let key = activeUser[0];
    backend.setItem(key, JSON.stringify(contacts));
}


function loadContactsFromBackend() {
    let key = activeUser[0];
    contacts = JSON.parse(backend.getItem(key)) || [];

}


function deleteContact(i) {
    contacts.splice(i, 1);
    renderContactBook();
    pushContactsToBackend();
}


async function InitContacts() {
    await init();
    await initStart();
    await loadContactsFromBackend();
    renderContactBook();
}


/////////////////////////////Responsive JS//////////////////////////////////////

function showOverlayResponsive() {
    showOverlay();
}

function hideResponsvieContactBook(){}