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
                <img class="close-overlay-rs" src="assets/img/contacts/cancel-white.svg" onclick="closeEditOverlayResponsive()">
                <div class="user-contacts-help-frame">
                    <div class="overlay-user-initials-container">
                        <div class="overlay-user-initials">${contacts[i]['initials']}</div>
                    </div>

                    <form class="save-contact-form" onsubmit="saveContact(${i}); return false;">
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


                    <form class="edit-responsive-form" onsubmit="saveContactResponsive(${i}); return false;">
                        <div class="overlay-contacts-details-container">
                            <div class="overlay-contacts-details-frame">
                                <input id="edit-name-rs" class="overlay-input-design input-icon-user" required type="text"
                                placeholder="Name">
                            </div>
                            <div class="overlay-contacts-details-frame">
                                <input id="edit-email-rs" class="overlay-input-design input-icon-letter" required type="email"
                                placeholder="Email">
                            </div>
                            <div class="overlay-contacts-details-frame">
                                <input id="edit-phone-rs" class="overlay-input-design input-icon-phone" required
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


function generateBusinessCard(i) {
    return /*html*/ `
    <div class="business-card-main" id="business-card-main">
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
        <div class="edit-responsive"><img src="assets/img/contacts/edit-responsive.svg" onclick="editContactResponsive(${i})"></div>
        <div class="delete-contact" onclick="deleteContact(${i})">Delete Contact!</div>
    </div>
    `;
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


function generateHTMLforContactBookResponsive(i) {
    return /*html*/ `
    <div class="contact-book-container" id="contact-book-bg${i}" onclick="openBusinessCardResponsive(${i})">
        <div class="contact-circle">${contacts[i]['initials']}</div>
        <div class="contact-book-frame">
            <div id="contact-book-name${i}" class="contact-book-name">${contacts[i]['name']}</div>
            <div class="contact-book-email">${contacts[i]['email']}</div>
        </div>
    </div>
    `;
}