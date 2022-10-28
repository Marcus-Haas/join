/**
* change the color depend on the inital letters
*/
function changeBgColorOfInitialLetters() {
    if (allTasks[j]['firstLetter'] == 'A' && allTasks[j]['secondLetter'] == 'O') {
        document.getElementById('assignedForInitialLetters' + j).classList.add('assigned-for-initial-letters-first');
    }
    if (allTasks[j]['firstLetter'] == 'M' && allTasks[j]['secondLetter'] == 'H') {
        document.getElementById('assignedForInitialLetters' + j).classList.add('assigned-for-initial-letters-second');
    }
    if (allTasks[j]['firstLetter'] == 'M' && allTasks[j]['secondLetter'] == 'K') {
        document.getElementById('assignedForInitialLetters' + j).classList.add('assigned-for-initial-letters-third');
    }
}


/**
* change the color depend on the inital letters
*/
function changeBgColorOfInitialLettersAfterDragAndDrop(i) {
    if (allTasks[i]['firstLetter'] == 'A' && allTasks[i]['secondLetter'] == 'O') {
        document.getElementById('assignedForInitialLetters' + i).classList.add('assigned-for-initial-letters-first');
    }
    if (allTasks[i]['firstLetter'] == 'M' && allTasks[i]['secondLetter'] == 'H') {
        document.getElementById('assignedForInitialLetters' + i).classList.add('assigned-for-initial-letters-second');
    }
    if (allTasks[i]['firstLetter'] == 'M' && allTasks[i]['secondLetter'] == 'K') {
        document.getElementById('assignedForInitialLetters' + i).classList.add('assigned-for-initial-letters-third');
    }
}


/**
* change the color depend on the inital letters
*/
function changeBgColorOfInitialLettersDetails(i) {
    if (allTasks[i]['firstLetter'] == 'A' && allTasks[i]['secondLetter'] == 'O') {
        document.getElementById('assignedForInitialLettersDetails' + i).classList.add('assigned-for-initial-letters-first');
    }
    if (allTasks[i]['firstLetter'] == 'M' && allTasks[i]['secondLetter'] == 'H') {
        document.getElementById('assignedForInitialLettersDetails' + i).classList.add('assigned-for-initial-letters-second');
    }
    if (allTasks[i]['firstLetter'] == 'M' && allTasks[i]['secondLetter'] == 'K') {
        document.getElementById('assignedForInitialLettersDetails' + i).classList.add('assigned-for-initial-letters-third');
    }
}



/**
* change the color depend on the inital letters 
*/
function changeBgColorOfInitialLettersAfterSearch(i) {
    if (allTasks[i]['firstLetter'] == 'A' && allTasks[i]['secondLetter'] == 'O') {
        document.getElementById('assignedForInitialLetters' + i).classList.add('assigned-for-initial-letters-first');
    }
    if (allTasks[i]['firstLetter'] == 'M' && allTasks[i]['secondLetter'] == 'H') {
        document.getElementById('assignedForInitialLetters' + i).classList.add('assigned-for-initial-letters-second');
    }
    if (allTasks[i]['firstLetter'] == 'M' && allTasks[i]['secondLetter'] == 'K') {
        document.getElementById('assignedForInitialLetters' + i).classList.add('assigned-for-initial-letters-third');
    }
}


/**
* change color prior in task box
*/
function changePrior() {
    if (currentPrior == 'Urgent') {
        let firstImage = document.getElementById('createFirstImg' + j);
        let secondImage = document.getElementById('createSecondImg' + j);
        firstImage.src = "assets/img/board/arrow-urgent.svg";
        secondImage.src = "assets/img/board/arrow-urgent.svg";
    }
    if (currentPrior == 'Medium') {
        let firstImage = document.getElementById('createFirstImg' + j);
        let secondImage = document.getElementById('createSecondImg' + j);
        firstImage.src = "assets/img/board/arrow-medium.svg";
        secondImage.src = "assets/img/board/arrow-medium.svg";
    }
    if (currentPrior == 'Low') {
        let firstImage = document.getElementById('createFirstImg' + j);
        let secondImage = document.getElementById('createSecondImg' + j);
        firstImage.src = "assets/img/board/arrow-low.svg";
        secondImage.src = "assets/img/board/arrow-low.svg";
    }
}


/**
* change color prior in task box
*/
function changePriorAfterDragAndDrop(i) {
    if (allTasks[i]['prior'] == 'Urgent') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-urgent.svg";
        secondImage.src = "assets/img/board/arrow-urgent.svg";
    }
    if (allTasks[i]['prior'] == 'Medium') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-medium.svg";
        secondImage.src = "assets/img/board/arrow-medium.svg";
    }
    if (allTasks[i]['prior'] == 'Low') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-low.svg";
        secondImage.src = "assets/img/board/arrow-low.svg";
    }
}


/**
* change color prior in task box
*/
function changePriorAfterSearchFilter(i) {
    if (allTasks[i]['prior'] == 'Urgent') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-urgent.svg";
        secondImage.src = "assets/img/board/arrow-urgent.svg";
    }
    if (allTasks[i]['prior'] == 'Medium') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-medium.svg";
        secondImage.src = "assets/img/board/arrow-medium.svg";
    }
    if (allTasks[i]['prior'] == 'Low') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-low.svg";
        secondImage.src = "assets/img/board/arrow-low.svg";
    }
}


/**
* change bg color of urgent
*/
function changeColorUrgent() {
    currentPrior = document.getElementById('urgentPopup').innerText;
    checkCurrentPrior = document.getElementById('urgentPopup').innerText;
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.add('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.remove('low-bg-color');
    changeColorUrgentReverse();
}


/**
* change bg color of urgent
*/
function changeColorUrgentReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopup');
    let changeColorSecond = document.getElementById('mediumSecondPopup');
    changeColorFirst.classList.remove('change-color-img');
    changeColorSecond.classList.remove('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopup');
    let changeColorSecondLow = document.getElementById('lowSecondPopup');
    changeColorFirstLow.classList.remove('change-color-img');
    changeColorSecondLow.classList.remove('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopup');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopup');
    changeColorFirstUrgent.classList.add('change-color-img');
    changeColorSecondUrgent.classList.add('change-color-img');
}


/**
* change bg color of medium
*/
function changeColorMedium() {
    currentPrior = document.getElementById('mediumPopup').innerText;
    checkCurrentPrior = document.getElementById('mediumPopup').innerText;
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.add('medium-bg-color');
    low.classList.remove('low-bg-color');
    changeColorMediumReverse();
}


/**
* change bg color of medium
*/
function changeColorMediumReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopup');
    let changeColorSecond = document.getElementById('mediumSecondPopup');
    changeColorFirst.classList.add('change-color-img');
    changeColorSecond.classList.add('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopup');
    let changeColorSecondLow = document.getElementById('lowSecondPopup');
    changeColorFirstLow.classList.remove('change-color-img');
    changeColorSecondLow.classList.remove('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopup');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopup');
    changeColorFirstUrgent.classList.remove('change-color-img');
    changeColorSecondUrgent.classList.remove('change-color-img');
}


/**
* change bg color of low
*/
function changeColorLow() {
    currentPrior = document.getElementById('lowPopup').innerText;
    checkCurrentPrior = document.getElementById('lowPopup').innerText;
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.add('low-bg-color');
    changeColorLowReverse();
}


/**
* change bg color of low
*/
function changeColorLowReverse() {
    let changeColorFirst = document.getElementById('mediumFirstPopup');
    let changeColorSecond = document.getElementById('mediumSecondPopup');
    changeColorFirst.classList.remove('change-color-img');
    changeColorSecond.classList.remove('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopup');
    let changeColorSecondLow = document.getElementById('lowSecondPopup');
    changeColorFirstLow.classList.add('change-color-img');
    changeColorSecondLow.classList.add('change-color-img');
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopup');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopup');
    changeColorFirstUrgent.classList.remove('change-color-img');
    changeColorSecondUrgent.classList.remove('change-color-img');
}

/**
 * change the prio to the basic form 
*/
function changeColorAfterCreateTask() {
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('change-color-img');
    medium.classList.remove('change-color-img');
    low.classList.remove('change-color-img');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.remove('low-bg-color');
    changeColorAfterCreateTaskReverse();
}


/**
 * change the prio to the basic form 
*/
function changeColorAfterCreateTaskReverse() {
    let changeColorFirstUrgent = document.getElementById('urgentFirstPopup');
    let changeColorSecondUrgent = document.getElementById('urgentSecondPopup');
    changeColorFirstUrgent.classList.remove('change-color-img');
    changeColorSecondUrgent.classList.remove('change-color-img');
    let changeColorFirst = document.getElementById('mediumFirstPopup');
    let changeColorSecond = document.getElementById('mediumSecondPopup');
    changeColorFirst.classList.remove('change-color-img');
    changeColorSecond.classList.remove('change-color-img');
    let changeColorFirstLow = document.getElementById('lowFirstPopup');
    let changeColorSecondLow = document.getElementById('lowSecondPopup');
    changeColorFirstLow.classList.remove('change-color-img');
    changeColorSecondLow.classList.remove('change-color-img');
}


/**
 * change the category color 
*/
function changeColorOfCategory() {
    let categoryAddColor = document.getElementById('changeColorOfCategory' + j);
    let category = categoryAddColor.innerText;
    if (category == 'Sales') {
        categoryAddColor.classList.add('sales');
    }
    if (category == 'Design') {
        categoryAddColor.classList.add('design');
    }
    if (category == 'Backoffice') {
        categoryAddColor.classList.add('backoffice');
    }
    if (category == 'Marketing') {
        categoryAddColor.classList.add('marketing');
    }
    if (category == 'IT') {
        categoryAddColor.classList.add('it');
    }
    if (category == 'Media') {
        categoryAddColor.classList.add('media');
    }
}


/**
 * change the category color 
*/
function changeColorOfCategoryAfterDragAndDrop(i) {
    let categoryAddColor = document.getElementById('changeColorOfCategoryAfterDragAndDrop' + i);
    let category = categoryAddColor.innerText;
    if (category == 'Sales') {
        categoryAddColor.classList.add('sales');
    }
    if (category == 'Design') {
        categoryAddColor.classList.add('design');
    }
    if (category == 'Backoffice') {
        categoryAddColor.classList.add('backoffice');
    }
    if (category == 'Marketing') {
        categoryAddColor.classList.add('marketing');
    }
    if (category == 'IT') {
        categoryAddColor.classList.add('it');
    }
    if (category == 'Media') {
        categoryAddColor.classList.add('media');
    }
}


/**
 * change the category color 
*/
function changeColorOfCategoryAfterSearchFilter(i) {
    let categoryAddColor = document.getElementById('changeColorOfCategory' + i);
    if (categoryAddColor == null) {
        changeColorOfCategoryAfterDragAndDrop(i);
    } else {
        let category = categoryAddColor.innerText;
        if (category == 'Sales') {
            categoryAddColor.classList.add('sales');
        }
        if (category == 'Design') {
            categoryAddColor.classList.add('design');
        }
        if (category == 'Backoffice') {
            categoryAddColor.classList.add('backoffice');
        }
        if (category == 'Marketing') {
            categoryAddColor.classList.add('marketing');
        }
        if (category == 'IT') {
            categoryAddColor.classList.add('it');
        }
        if (category == 'Media') {
            categoryAddColor.classList.add('media');
        }
    }
}



/**
 * change the color of prior depend of prior
*/
function changeColorPriorInShowDetails(i) {
    if (allTasks[i]['prior'] == 'Urgent') {
        let urgent = document.getElementById('currentPriorOpenTask' + i);
        urgent.style.backgroundColor = '#FF3D00';
    }
    if (allTasks[i]['prior'] == 'Medium') {
        let urgent = document.getElementById('currentPriorOpenTask' + i);
        urgent.style.backgroundColor = '#FFA800';
    }
    if (allTasks[i]['prior'] == 'Low') {
        let urgent = document.getElementById('currentPriorOpenTask' + i);
        urgent.style.backgroundColor = '#7AE229';
    }
}


/**
 * change the color of prior depend of prior
*/
function changePriorShowDetails(i) {
    if (allTasks[i]['prior'] == 'Urgent') {
        let firstImage = document.getElementById('currentPriorImgFirstOpenTask' + i);
        let secondImage = document.getElementById('currentPriorImgSecondOpenTask' + i);
        firstImage.src = "assets/img/board/arrow-urgent.svg";
        secondImage.src = "assets/img/board/arrow-urgent.svg";
    }
    if (allTasks[i]['prior'] == 'Medium') {
        let firstImage = document.getElementById('currentPriorImgFirstOpenTask' + i);
        let secondImage = document.getElementById('currentPriorImgSecondOpenTask' + i);
        firstImage.style = 'top: -1px;';
        secondImage.style = 'top: 4px;';
        firstImage.src = "assets/img/board/arrow-medium.svg";
        secondImage.src = "assets/img/board/arrow-medium.svg";
    }
    if (allTasks[i]['prior'] == 'Low') {
        let firstImage = document.getElementById('currentPriorImgFirstOpenTask' + i);
        let secondImage = document.getElementById('currentPriorImgSecondOpenTask' + i);
        firstImage.style = 'top: -5px';
        secondImage.style = 'top: 0px';
        firstImage.src = "assets/img/board/arrow-low.svg";
        secondImage.src = "assets/img/board/arrow-low.svg";
    }
}


/**
 * change the category of details
*/
function changeCategoryShowDetails(i) {
    let categoryAddColor = document.getElementById('categoryOpenTask' + i);
    let category = categoryAddColor.innerText;
    if (category == 'Sales') {
        categoryAddColor.classList.add('sales');
    }
    if (category == 'Design') {
        categoryAddColor.classList.add('design');
    }
    if (category == 'Backoffice') {
        categoryAddColor.classList.add('backoffice');
    }
    if (category == 'Marketing') {
        categoryAddColor.classList.add('marketing');
    }
    if (category == 'IT') {
        categoryAddColor.classList.add('it');
    }
    if (category == 'Media') {
        categoryAddColor.classList.add('media');
    }
}