// show my Name at summary.html //

function showMyName() {
    let myName = activeUser[0];
    let Name = document.getElementById('my-name');
    Name.innerHTML = myName;
}