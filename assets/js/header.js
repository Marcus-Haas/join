function showLogout() {
    document.getElementById('header-logout').innerHTML = /*html*/ `
    <div class="popup-frame-logout" id="hide-btn" onclick="hideLogout()">
        <div onclick="doNotClose(event)">
            <div class="logout-btn">
                <div class="logout-inner-btn">Log out</div>
            </div>
        </div>
    </div>
    `;
}


function hideLogout() {
    document.getElementById('hide-btn').classList.add('d-none');
}


function doNotClose(event) {
    event.stopPropagation();
}