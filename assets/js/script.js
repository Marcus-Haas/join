

/**
 * Wait for include html code
 */
async function init() {
    await includeHTML();
}


/**
 * Include HTML Templates
 */
async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "include html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
    await downloadFromServer(); // wait for server
    activeUser = JSON.parse(backend.getItem('activeUser')) || [];

    // var navItems = document.querySelectorAll(".sidebar-categories");
    // for (var i = 0; i < navItems.length; i++) {
    //     navItems[i].addEventListener("click", function () {
    //         this.classList.add("active");
    //     });
    // }

    // // _______________

    //     // Get the container element
    //     var activeClass = document.getElementById("sidebar-menu");

    //     // Get all buttons with class="btn" inside the container
    //     var ac = activeClass.getElementsByClassName("sidebar-link");

    //     // Loop through the buttons and add the active class to the current/clicked button
    //     for (var i = 0; i < ac.length; i++) {
    //         ac[i].addEventListener("click", function () {
    //             var current = document.getElementsByClassName("active");
    //             current[0].className = current[0].className.replace(" active", "");
    //             this.className += " active";
    //         });
    //     }
}

// let activeLink = []
// activeLink[i] = document.getElementById('addActiveClass-' + i);
// for (let i = 0; i < activeLink.length; i++) {
//     if(activeLink == i) {
//         activeLink[i].classList.add('active');
//         document.getElementById('addActiveClass-' + i).classList.add('active');
//     }
// if(!activeLink == i) {
//     !activeLink[i].classList.remove('active');
//     document.getElementById('addActiveClass-' + i).classList.remove('active');
// } else {
//     activeLink[i].classList.remove('active');
//     document.getElementById('addActiveClass-' + i).classList.remove('active');
// }
// }

// let activeLink = []

// function addActiveClass(i) {
//     activeLink = [i]
//     for (let i = 0; i < activeLink.length; i++) {
//         if (activeLink == i) {
//             document.getElementById('addActiveClass-' + i).classList.add('active');
//             activeLink.push(i);
//         }
//         if (!activeLink == i) {
//             document.getElementById('addActiveClass-' + i).classList.remove('active');
//         }
//     }
// }



// ONLOAD FUNCTION AUF DER JEWEILIGEN SEITE!!!!!

function addActiveClass1() {
    document.getElementById('addActiveClass-1').classList.add('active');
    document.getElementById('addActiveClass-0').classList.remove('active');
    document.getElementById('addActiveClass-2').classList.remove('active');
    document.getElementById('addActiveClass-3').classList.remove('active');
}
function addActiveClass2() {
    document.getElementById('addActiveClass-2').classList.add('active');
    document.getElementById('addActiveClass-1').classList.remove('active');
    document.getElementById('addActiveClass-0').classList.remove('active');
    document.getElementById('addActiveClass-3').classList.remove('active');
}
function addActiveClass3() {
    document.getElementById('addActiveClass-3').classList.add('active');
    document.getElementById('addActiveClass-1').classList.remove('active');
    document.getElementById('addActiveClass-2').classList.remove('active');
    document.getElementById('addActiveClass-0').classList.remove('active');
}