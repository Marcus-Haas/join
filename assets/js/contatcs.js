let contactName;
let contactEmail;
let contactPhone;
let contactInitials;

let newEmail = 0;


let contacts = [];


async function InitContacts() {
    await init();
    await initStart();
    await loadContactsFromBackend();
    renderContactBook();
    openBusinessCard(0);

}


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


async function pushContacts(contactName, contactEmail, contactPhone, contactInitials) {
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
    renderContactBookResponsive();
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
    renderContactBookResponsive();
    pushContactsToBackend();
    document.getElementById('business-card-main').classList.add('d-none');
}


/////////////////////////////Responsive JS//////////////////////////////////////


function showOverlayResponsive() {
    showOverlay();
    document.getElementById('contact-book-rs').style.display = 'none';
    document.getElementById('new-contacts-btn-rs').classList.add('d-none');
    document.getElementById('contacts-back-btn').classList.remove('d-none');
    document.getElementById('contacts-kanban').classList.remove('d-none');
    document.getElementById('contacts-headline-container').style.display = 'flex';
    document.getElementById('business-card-main').style.display = 'flex';
}


function closeOverlayResponsive() {
    closeOverlay();
    MoveBackToContacts();
}


function MoveBackToContacts() {
    document.getElementById('contact-book-rs').style.display = 'flex';
    document.getElementById('new-contacts-btn-rs').classList.remove('d-none');
    document.getElementById('contacts-back-btn').classList.add('d-none');
    document.getElementById('contacts-kanban').classList.add('d-none');
    document.getElementById('contacts-headline-container').style.display = 'none';
    document.getElementById('business-card-main').style.display = 'none';
}


function renderContactBookResponsive() {
    let container = document.getElementById('contact-book-rs');
    container.innerHTML = '';
    for (let index = 0; index < contacts.length; index++) {
        container.innerHTML += generateHTMLforContactBookResponsive(index);
    }
}


function openBusinessCardResponsive(i) {
    openBusinessCard(i);
    document.getElementById('contact-book-rs').style.display = 'none';
    document.getElementById('new-contacts-btn-rs').classList.add('d-none');
    document.getElementById('contacts-kanban').classList.remove('d-none');
    document.getElementById('contacts-headline-container').style.display = 'flex';
    document.getElementById('business-card-main').style.display = 'flex';
    document.getElementById('contacts-back-btn').classList.remove('d-none');
}


function closeEditOverlayResponsive() {
    closeEditOverlay();
}


async function saveContactResponsive(i) {
    let contactName = document.getElementById('edit-name-rs').value;
    let contactEmail = document.getElementById('edit-email-rs').value;
    let contactPhone = document.getElementById('edit-phone-rs').value;
    let contactInitials = contactName.match(/(\b\S)?/g).join("").toUpperCase();
    await updateContatcs(i, contactName, contactEmail, contactPhone, contactInitials);
    closeEditOverlay();
    renderContactBookResponsive();
    openBusinessCardResponsive(i);
}


function editContactResponsive(i) {
    let edit = document.getElementById('edit');
    edit.innerHTML = generateEditOverlay(i);
    document.getElementById('edit-name-rs').value = contacts[i]['name'];
    document.getElementById('edit-email-rs').value = contacts[i]['email'];
    document.getElementById('edit-phone-rs').value = contacts[i]['phone'];
}