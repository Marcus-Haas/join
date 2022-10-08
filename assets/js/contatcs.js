function showOverlay() {
    document.getElementById('overlay-background').classList.remove('d-none');
    document.getElementById('overlay-container').classList.add('show-overlay-add-container');
    startTransition();
}


function closeOverlay() {
    document.getElementById('overlay-container').classList.remove('show-overlay-add-container');
    document.getElementById('overlay-background').classList.add('d-none');
}