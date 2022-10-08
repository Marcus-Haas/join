let title = [];
let description = [];
let category = [];
let assigned = [];
let duedate = [];
let id = [];
let statusContainer = [];
let prior = [];
let currentTitle;
let currentDescription;
let currentCategory;
let currentAssigned;
let currentDuedate;
let currentDraggedElement;
let index = 0;
let currentPrior;


/*
* render todo box
*/
function createTodo() {
    updateArrayTodo();
    let todo = document.getElementById('todo');
    todo.innerHTML += templateCreateTodo();
    currentTitle.value = ``;
    currentDescription.value = ``;
    currentDuedate.value = ``;
    changeColorAfterCreateTask();
    closeForm();
    changeColorOfCategory();
    changePrior();
    index++;
}


function changePrior() {
    if (currentPrior == 'Urgent') {
        let firstImage = document.getElementById('createFirstImg' + index);
        let secondImage = document.getElementById('createSecondImg' + index);
        firstImage.src = "assets/img/board/arrow-urgent.svg";
        secondImage.src = "assets/img/board/arrow-urgent.svg";
        prior.push(currentPrior);
    }
    if (currentPrior == 'Medium') {
        let firstImage = document.getElementById('createFirstImg' + index);
        let secondImage = document.getElementById('createSecondImg' + index);
        firstImage.src = "assets/img/board/arrow-medium.svg";
        secondImage.src = "assets/img/board/arrow-medium.svg";
        prior.push(currentPrior);
    }
    if (currentPrior == 'Low') {
        let firstImage = document.getElementById('createFirstImg' + index);
        let secondImage = document.getElementById('createSecondImg' + index);
        firstImage.src = "assets/img/board/arrow-low.svg";
        secondImage.src = "assets/img/board/arrow-low.svg";
        prior.push(currentPrior);
    }
}


function changePriorAfterDragAndDrop(i) {
    if (prior[i] == 'Urgent') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-urgent.svg";
        secondImage.src = "assets/img/board/arrow-urgent.svg";
    }
    if (prior[i] == 'Medium') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-medium.svg";
        secondImage.src = "assets/img/board/arrow-medium.svg";
    }
    if (prior[i] == 'Low') {
        let firstImage = document.getElementById('createFirstImg' + i);
        let secondImage = document.getElementById('createSecondImg' + i);
        firstImage.src = "assets/img/board/arrow-low.svg";
        secondImage.src = "assets/img/board/arrow-low.svg";
    }
}

/*
* render todo box
*/
function updateArrayTodo() {
    currentTitle = document.getElementById('title');
    title.push(currentTitle.value);
    currentDescription = document.getElementById('descriptionPopup');
    description.push(currentDescription.value);
    currentCategory = document.getElementById('category-popup');
    category.push(currentCategory.value);
    currentAssigned = document.getElementById('assignedto-popup');
    assigned.push(currentAssigned.value);
    currentDuedate = document.getElementById('duedate');
    duedate.push(currentDuedate.value);
    statusContainer.push('todo');
    id.push(index);
}


function templateCreateTodo() {
    return `    
    <div draggable="true" ondragstart="startDragging(${index})" class="box">
        <div id="changeColorOfCategory${index}" class="category">${category[index]}</div>
        <div class="title">${title[index]}</div>
        <div class="description">${description[index]}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${assigned[index]}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${index}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${index}" src=""></div>
                </div>
        </div>
    </div>`;
}


function updateTodo() {
    let todo = document.getElementById('todo');
    todo.innerHTML = ``;
    for (let i = 0; i < statusContainer.length; i++) {
        if (statusContainer[i] == 'todo') {
            todo.innerHTML += templateUpdateTodo(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
        }
    }
}


function templateUpdateTodo(i) {
    return `    
    <div draggable="true" ondragstart="startDragging(${i})" class="box">
        <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${category[i]}</div>
        <div class="title">${title[i]}</div>
        <div class="description">${description[i]}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${assigned[i]}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}


function updateInProgress() {
    let inProgress = document.getElementById('inProgress');
    inProgress.innerHTML = ``;
    for (let i = 0; i < statusContainer.length; i++) {
        if (statusContainer[i] == 'inProgress') {
            inProgress.innerHTML += templateUpdateInProgress(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
        }
    }
}


function templateUpdateInProgress(i) {
    return `    
    <div draggable="true" ondragstart="startDragging(${i})" class="box">
        <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${category[i]}</div>
        <div class="title">${title[i]}</div>
        <div class="description">${description[i]}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${assigned[i]}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}



function updateAwaitingFeedback() {
    let awaitingFeedback = document.getElementById('awaitingFeedback');
    awaitingFeedback.innerHTML = ``;
    for (let i = 0; i < statusContainer.length; i++) {
        if (statusContainer[i] == 'awaitingFeedback') {
            awaitingFeedback.innerHTML += templateUpdateAwaitingFeedback(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
        }
    }
}


function templateUpdateAwaitingFeedback(i) {
    return `    
    <div draggable="true" ondragstart="startDragging(${i})" class="box">
        <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${category[i]}</div>
        <div class="title">${title[i]}</div>
        <div class="description">${description[i]}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${assigned[i]}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}


function updateDone() {
    let done = document.getElementById('done');
    done.innerHTML = ``;
    for (let i = 0; i < statusContainer.length; i++) {
        if (statusContainer[i] == 'done') {
            done.innerHTML += templateUpdateDone(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
        }
    }
}


function templateUpdateDone(i) {
    return `    
    <div draggable="true" ondragstart="startDragging(${i})" class="box">
        <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${category[i]}</div>
        <div class="title">${title[i]}</div>
        <div class="description">${description[i]}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${assigned[i]}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}

/*
* drag and drop a task
*/
function startDragging(id) {
    currentDraggedElement = id;
}


function allowDrop(ev) {
    ev.preventDefault();
}


function moveTo(changeStatus) {
    statusContainer[currentDraggedElement] = changeStatus;
    updateTodo();
    updateInProgress();
    updateAwaitingFeedback();
    updateDone();
}


/*
* delete icon if someone is tiping
*/
function deleteIconInSearchInputField() {
    let line = document.getElementById('line');
    let iconSearch = document.getElementById('iconSearch');

    line.classList.add('d-none');
    iconSearch.classList.add('d-none');
}


/*
* remov line and icon if inputfield is empty
*/
function loadIconAndLine() {
    let searchTask = document.getElementById('searchTask');
    searchTask = searchTask.value;
    if (searchTask == ``) {
        let line = document.getElementById('line');
        let iconSearch = document.getElementById('iconSearch');

        line.classList.remove('d-none');
        iconSearch.classList.remove('d-none');
    }
}


/*
* change bg color of urgent
*/
function changeColorUrgent() {
    currentPrior = document.getElementById('urgentPopup').innerText;
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.add('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.remove('low-bg-color');

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


/*
* change bg color of medium
*/
function changeColorMedium() {
    currentPrior = document.getElementById('mediumPopup').innerText;
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.add('medium-bg-color');
    low.classList.remove('low-bg-color');

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


/*
* change bg color of low
*/
function changeColorLow() {
    currentPrior = document.getElementById('lowPopup').innerText;
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.add('low-bg-color');

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


/*
* open the pop-up
*/
function openForm() {
    document.getElementById('popup-window').style.display = 'unset';
    document.getElementById('mainContainer').style.opacity = '0.5';
}


/*
* close the pop-up
*/
function closeForm() {
    document.getElementById('popup-window').style.display = "none";
    document.getElementById('mainContainer').style.opacity = 'unset';
}


/*
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


function changeColorOfCategory() {
    let categoryAddColor = document.getElementById('changeColorOfCategory' + index);
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