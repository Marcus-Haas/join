/**
* change colors depend on initial letters
*/
function changeBgColorOfInitialLettersEdit(i) {
    if (allTasks[i]['firstLetter'] == 'A' && allTasks[i]['secondLetter'] == 'O') {
        document.getElementById('profileAssignedEdit' + i).classList.add('assigned-for-initial-letters-first');
    }
    if (allTasks[i]['firstLetter'] == 'M' && allTasks[i]['secondLetter'] == 'H') {
        document.getElementById('profileAssignedEdit' + i).classList.add('assigned-for-initial-letters-second');
    }
    if (allTasks[i]['firstLetter'] == 'M' && allTasks[i]['secondLetter'] == 'K') {
        document.getElementById('profileAssignedEdit' + i).classList.add('assigned-for-initial-letters-third');
    }
}


/**
* change bg color of urgent
*/
function changeColorUrgentEdit() {
    currentPriorEdit = document.getElementById('urgentPopupEdit').innerText;
    let urgent = document.getElementById('urgentPopupEdit');
    let medium = document.getElementById('mediumPopupEdit');
    let low = document.getElementById('lowPopupEdit');
    urgent.classList.add('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.remove('low-bg-color');
    changeColorUrgentEditReverse();
}


/**
* change bg color of low
*/
function changeColorUrgentEditReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopupEdit');
    let changeColorSecond = document.getElementById('mediumSecondPopupEdit');
    changeColorFirst.classList.remove('change-color-img');
    changeColorSecond.classList.remove('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopupEdit');
    let changeColorSecondLow = document.getElementById('lowSecondPopupEdit');
    changeColorFirstLow.classList.remove('change-color-img');
    changeColorSecondLow.classList.remove('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopupEdit');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopupEdit');
    changeColorFirstUrgent.classList.add('change-color-img');
    changeColorSecondUrgent.classList.add('change-color-img');
}


/**
* change bg color of medium
*/
function changeColorEditMedium() {
    currentPriorEdit = document.getElementById('mediumPopupEdit').innerText;
    let urgent = document.getElementById('urgentPopupEdit');
    let medium = document.getElementById('mediumPopupEdit');
    let low = document.getElementById('lowPopupEdit');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.add('medium-bg-color');
    low.classList.remove('low-bg-color');
    changeColorEditMediumReverse();
}


/**
* change bg color of low
*/
function changeColorEditMediumReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopupEdit');
    let changeColorSecond = document.getElementById('mediumSecondPopupEdit');
    changeColorFirst.classList.add('change-color-img');
    changeColorSecond.classList.add('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopupEdit');
    let changeColorSecondLow = document.getElementById('lowSecondPopupEdit');
    changeColorFirstLow.classList.remove('change-color-img');
    changeColorSecondLow.classList.remove('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopupEdit');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopupEdit');
    changeColorFirstUrgent.classList.remove('change-color-img');
    changeColorSecondUrgent.classList.remove('change-color-img');
}


/**
* change bg color of low
*/
function changeColorEditLow() {
    currentPriorEdit = document.getElementById('lowPopupEdit').innerText;
    let urgent = document.getElementById('urgentPopupEdit');
    let medium = document.getElementById('mediumPopupEdit');
    let low = document.getElementById('lowPopupEdit');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.add('low-bg-color');
    changeColorEditLowReverse();
}


/**
* change bg color of low
*/
function changeColorEditLowReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopupEdit');
    let changeColorSecond = document.getElementById('mediumSecondPopupEdit');
    changeColorFirst.classList.remove('change-color-img');
    changeColorSecond.classList.remove('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopupEdit');
    let changeColorSecondLow = document.getElementById('lowSecondPopupEdit');
    changeColorFirstLow.classList.add('change-color-img');
    changeColorSecondLow.classList.add('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopupEdit');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopupEdit');
    changeColorFirstUrgent.classList.remove('change-color-img');
    changeColorSecondUrgent.classList.remove('change-color-img');
}


/**
 * change color of prior after edit
*/
function changePriorColorByEdit(i) {
    if (allTasks[i]['prior'] == 'Urgent') {
        document.getElementById('urgentPopupEdit').classList.add('urgent-bg-color');
        document.getElementById('urgentFirstPopupEdit').classList.add('change-color-img');
        document.getElementById('urgentSecondPopupEdit').classList.add('change-color-img');
    }
    if (allTasks[i]['prior'] == 'Medium') {
        document.getElementById('mediumPopupEdit').classList.add('medium-bg-color');
        document.getElementById('mediumFirstPopupEdit').classList.add('change-color-img');
        document.getElementById('mediumSecondPopupEdit').classList.add('change-color-img');
    }
    if (allTasks[i]['prior'] == 'Low') {
        document.getElementById('lowPopupEdit').classList.add('low-bg-color');
        document.getElementById('lowFirstPopupEdit').classList.add('change-color-img');
        document.getElementById('lowSecondPopupEdit').classList.add('change-color-img');
    }
}


/**
 * function for stop propagation
*/
function doNotCloseDiv(event) {
    event.stopPropagation();
}


/**
 * close the popup task detail
*/
function closeTaskDetails() {
    document.getElementById('overlay').classList.remove('overlay-bg');
    document.getElementById('openTask').classList.add('d-none');
    document.getElementById('mainContainer').classList.remove('hide-mobile');
    document.getElementById('openTask').classList.remove('open-position');
    document.getElementById('overlay').classList.remove('hide-mobile');
    document.getElementById('editOpenTaskDetails').classList.remove('open-position-for-edit');
    document.getElementById('editOpenTaskDetails').classList.add('d-none');
}


/**
* identify the selected assigne edit
*/
function identifySelectedAssigneEdit(sel) {
    assignedEdit = sel.options[sel.selectedIndex].text;
    splitFirstAndSecondNameOfAssignedAsArrayEdit = assignedEdit.split(" ");
    firstNameLetterEdit = splitFirstAndSecondNameOfAssignedAsArrayEdit[0].charAt(0);
    secondNameLetterEdit = splitFirstAndSecondNameOfAssignedAsArrayEdit[1].charAt(0);
}


/**
* identify the selected category
*/
function identifySelectedCategory(sel) {
    currentCategory = sel.options[sel.selectedIndex].text;
}


/**
* identify the selected assigne
*/
function identifySelectedAssigne(sel) {
    currentAssigned = sel.options[sel.selectedIndex].text;
    splitFirstAndSecondNameOfAssignedAsArray = currentAssigned.split(" ");
    firstNameLetter = splitFirstAndSecondNameOfAssignedAsArray[0].charAt(0);
    secondNameLetter = splitFirstAndSecondNameOfAssignedAsArray[1].charAt(0);
}