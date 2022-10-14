async function initSummary() {
    await init();
    await initStart();
    showMyName();
}


// show my Name or Guest at summary.html //
function showMyName() {
    let myName = activeUser[0];
    let Name = document.getElementById('my-name');
    if (activeUser == 0) {
        Name.innerHTML = 'Guest';
    } else {
        Name.innerHTML = myName;
    }
}