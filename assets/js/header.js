/**
* generate and show logout button
*/
function showLogout() {
    document.getElementById('header-logout').innerHTML = /*html*/ `
    <div class="popup-frame-logout" id="hide-btn" onclick="hideLogout()">
        <div onclick="doNotClose(event)">
            <div class="logout-btn">
                <div class="rs-logout" onclick="openHelp()">Help</div>
                <div class="rs-logout" onclick="openLegalNotice()">Legal notice</div>
                <div class="rs-logout" onclick="openPrivacy()">Privacy</div>
                <div class="logout-inner-btn" onclick="Logout()">Log out</div>
            </div>
        </div>
    </div>
    `;
}


/**
* hide logout button
*/
function hideLogout() {
    document.getElementById('hide-btn').classList.add('d-none');
}


/**
* stop propagation event for the logout button
*/
function doNotClose(event) {
    event.stopPropagation();
}


/**
* clear active user status and send back to index.html - log in
*/
async function Logout() {
    await backend.setItem('activeUser', JSON.stringify(activeUser.length = 0));
    window.open("index.html", "_self");

}


/**
* open the privacy html
*/
function openPrivacy() {
    window.open("privacy.html", "_self");
}


/**
* open the help html
*/
function openHelp() {
    window.open("help.html", "_self");
}


/**
* open the legal notice html
*/
function openLegalNotice() {
    window.open("legal-notice.html", "_self");
}