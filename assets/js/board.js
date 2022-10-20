let allTasks = [];
let currentTitle;
let currentDescription;
let currentCategory;
let currentAssigned;
let currentDuedate;
let currentDraggedElement;
let index = 0;
let currentPrior;
let currentPriorEdit;
let splitFirstAndSecondNameOfAssignedAsArray;
let firstNameLetter;
let secondNameLetter;
let currentTitleValue;
let currentDescriptionValue;
let currentDuedateValue;
let assignedEdit;
let firstNameLetterEdit;
let secondNameLetterEdit;
let splitFirstAndSecondNameOfAssignedAsArrayEdit;


/**
* load task from server
*/
async function initialize() {
    await downloadFromServer();
    await getTasksFromBackend();
}


/**
* update the board
*/
function updateBoard() {
    updateTodo();
    updateInProgress();
    updateAwaitingFeedback();
    updateDone();
}


/**
* render todo box
*/
function createTodo() {
    updateArrayTodo();
    pushTask();
    let todo = document.getElementById('todo');
    todo.innerHTML += templateCreateTodo();
    changeBgColorOfInitialLetters();
    changePrior();
    cleanValues();
    changeColorOfCategory();
    addInBackend();
    index++;
}


function templateCreateTodo() {
    return `  
    <div onclick="openTaskDetails(${index}, event)" draggable="true" ondragstart="startDragging(${index})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategory${index}" class="category">${allTasks[index]['category']}</div>
            <div><img onclick="deleteTask(${index}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[index]['title']}</div>
        <div class="description">${allTasks[index]['description']}</div>
        <div class="assigned-and-prio">
            <div id="assignedForInitialLetters${index}" class="assigned">${allTasks[index]['firstLetter']}${allTasks[index]['secondLetter']}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${index}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${index}" src=""></div>
                </div>
        </div>
    </div>`;
}


/**
* reset the inputfield
*/
function cleanValues() {
    currentTitle.value = ``;
    currentDescription.value = ``;
    currentDuedate.value = ``;
    selectedCategoryDefaultValue();
    selectedAssignedDefaultValue();
    changeColorAfterCreateTask();
    closeForm();
}


/**
* update todo array
*/
function updateArrayTodo() {
    currentTitle = document.getElementById('title');
    currentTitleValue = currentTitle.value;
    currentDescription = document.getElementById('descriptionPopup');
    currentDescriptionValue = currentDescription.value;
    currentDuedate = document.getElementById('duedate');
    currentDuedateValue = currentDuedate.value;
}


/**
* push task
*/
function pushTask() {
    let task = {
        'title': currentTitleValue,
        'description': currentDescriptionValue,
        'category': currentCategory,
        'assigned': currentAssigned,
        'duedate': currentDuedateValue,
        'firstLetter': firstNameLetter,
        'secondLetter': secondNameLetter,
        'prior': currentPrior,
        'status': 'todo',
    };
    allTasks.push(task);
}


/**
* change the color depend on the inital letters
*/
function changeBgColorOfInitialLetters() {
    if (allTasks[index]['firstLetter'] == 'A' && allTasks[index]['secondLetter'] == 'O') {
        document.getElementById('assignedForInitialLetters' + index).classList.add('assigned-for-initial-letters-first');
    }
    if (allTasks[index]['firstLetter'] == 'M' && allTasks[index]['secondLetter'] == 'H') {
        document.getElementById('assignedForInitialLetters' + index).classList.add('assigned-for-initial-letters-second');
    }
    if (allTasks[index]['firstLetter'] == 'M' && allTasks[index]['secondLetter'] == 'K') {
        document.getElementById('assignedForInitialLetters' + index).classList.add('assigned-for-initial-letters-third');
    }
}


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
* safe all task in backend
*/
async function addInBackend() {
    await backend.setItem('allTasks', JSON.stringify(allTasks));
}


/**
* get all task from backend and update board
*/
async function getTasksFromBackend() {
    let allTasksAsJson = await backend.getItem('allTasks');
    if (allTasksAsJson != null) {
        allTasks = JSON.parse(allTasksAsJson);
        updateBoard();
    }
}


/**
* delete a task
*/
async function deleteTask(i, event) {
    event.stopPropagation();
    allTasks.splice(i, 1);
    if (allTasks.length < 1) {
        await deleteAllTasksArray();
        updateBoard();
    } else {
        await addInBackend();
        await initialize();
    }
}


async function deleteAllTasksArray() {
    await backend.deleteItem('allTasks');
}


/**
* set the default value of category after submit form
*/
function selectedCategoryDefaultValue() {
    document.getElementById("category-popup").selectedIndex = "0";
}


/**
* set the default value of assign after submit form
*/
function selectedAssignedDefaultValue() {
    document.getElementById("assignedto-popup").selectedIndex = "0";
}


/**
* render todo box from addTask
*/
function createTodoFromAddTask() {
    let todo = document.getElementById('todo');
    todo.innerHTML += templateCreateTodo();
    changeColorOfCategory();
    changeBgColorOfInitialLetters();
    index++;
}


/**
* change color prior in task box
*/
function changePrior() {
    if (currentPrior == 'Urgent') {
        let firstImage = document.getElementById('createFirstImg' + index);
        let secondImage = document.getElementById('createSecondImg' + index);
        firstImage.src = "assets/img/board/arrow-urgent.svg";
        secondImage.src = "assets/img/board/arrow-urgent.svg";
    }
    if (currentPrior == 'Medium') {
        let firstImage = document.getElementById('createFirstImg' + index);
        let secondImage = document.getElementById('createSecondImg' + index);
        firstImage.src = "assets/img/board/arrow-medium.svg";
        secondImage.src = "assets/img/board/arrow-medium.svg";
    }
    if (currentPrior == 'Low') {
        let firstImage = document.getElementById('createFirstImg' + index);
        let secondImage = document.getElementById('createSecondImg' + index);
        firstImage.src = "assets/img/board/arrow-low.svg";
        secondImage.src = "assets/img/board/arrow-low.svg";
    }
}


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


/**
* render todo area after drag and drop
*/
function updateTodo() {
    let todo = document.getElementById('todo');
    todo.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['status'] == 'todo') {
            todo.innerHTML += templateUpdateTodo(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
            changeBgColorOfInitialLettersAfterDragAndDrop(i);
            addInBackend();
        }
    }
}


function templateUpdateTodo(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div id="assignedForInitialLetters${i}" class="assigned">${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}


/**
* render in progress area after drag and drop
*/
function updateInProgress() {
    let inProgress = document.getElementById('inProgress');
    inProgress.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['status'] == 'inProgress') {
            inProgress.innerHTML += templateUpdateInProgress(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
            changeBgColorOfInitialLettersAfterDragAndDrop(i);
            addInBackend();
        }
    }
}


function templateUpdateInProgress(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div id="assignedForInitialLetters${i}" class="assigned">${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}


/**
* render awaiting feedback area after drag and drop
*/
function updateAwaitingFeedback() {
    let awaitingFeedback = document.getElementById('awaitingFeedback');
    awaitingFeedback.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['status'] == 'awaitingFeedback') {
            awaitingFeedback.innerHTML += templateUpdateAwaitingFeedback(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
            changeBgColorOfInitialLettersAfterDragAndDrop(i);
            addInBackend();
        }
    }
}


function templateUpdateAwaitingFeedback(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div  id="assignedForInitialLetters${i}" class="assigned">${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}


/**
* render done area after drag and drop
*/
function updateDone() {
    let done = document.getElementById('done');
    done.innerHTML = ``;
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['status'] == 'done') {
            done.innerHTML += templateUpdateDone(i);
            changeColorOfCategoryAfterDragAndDrop(i);
            changePriorAfterDragAndDrop(i);
            changeBgColorOfInitialLettersAfterDragAndDrop(i);
            addInBackend();
        }
    }
}


function templateUpdateDone(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div  id="assignedForInitialLetters${i}" class="assigned">${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}


/**
* drag and drop a task
*/
function startDragging(id) {
    currentDraggedElement = id;
}


function allowDrop(ev) {
    ev.preventDefault();
}


function moveTo(changeStatus) {
    allTasks[currentDraggedElement]['status'] = changeStatus;
    updateTodo();
    updateInProgress();
    updateAwaitingFeedback();
    updateDone();
}


/**
* delete icon if someone is tiping
*/
function deleteIconInSearchInputField() {
    let line = document.getElementById('line');
    let iconSearch = document.getElementById('iconSearch');

    line.classList.add('d-none');
    iconSearch.classList.add('d-none');
}


/**
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


/**
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
    changeColorUrgentReverse();
}


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
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.add('medium-bg-color');
    low.classList.remove('low-bg-color');
    changeColorMediumReverse();
}


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
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.add('low-bg-color');
    changeColorLowReverse();
}


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
* open the pop-up
*/
function openForm(event) {
    event.stopPropagation();
    document.getElementById('overlayAddTask').classList.add('overlay-bg');
    document.getElementById('popup-window').style.display = 'unset';
    document.getElementById('mainContainer').classList.add('hide-mobile');
}


/**
* close the pop-up
*/
function closeForm() {
    document.getElementById('overlayAddTask').classList.remove('overlay-bg');
    document.getElementById('popup-window').style.display = "none";
    document.getElementById('mainContainer').style.opacity = 'unset';
    currentTitle = document.getElementById('title');
    currentDescription = document.getElementById('descriptionPopup');
    currentDuedate = document.getElementById('duedate');
    document.getElementById('mainContainer').classList.remove('hide-mobile');
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


/**
 * open details of the task
*/
function openTaskDetails(i, event) {
    event.stopPropagation();
    document.getElementById('mainContainer').classList.add('hide-mobile');
    document.getElementById('overlay').classList.add('hide-mobile');
    let edit = document.getElementById('editOpenTaskDetails');
    edit.classList.add('d-none');
    edit.classList.remove('open-position-for-edit')
    document.getElementById('overlay').classList.add('overlay-bg');
    document.getElementById('openTask').classList.remove('d-none');
    document.getElementById('openTask').classList.add('open-position');
    let openTask = document.getElementById('openTask');
    openTask.innerHTML = templateOpenTaskDetails(i);
    changeColorPriorInShowDetails(i);
    changePriorShowDetails(i);
    changeCategoryShowDetails(i);
    changeBgColorOfInitialLettersDetails(i);
}


function templateOpenTaskDetails(i) {
    return `
    <div>
    <div onclick="closeTaskDetails()" class="close-open-task">
    <img src="assets/img/board/close-popup.svg" class="hide-mobile">
    <img src="assets/img/board/goback.svg" class="hide arrow-back-mobile">
    </div>
    <div id="categoryOpenTask${i}" class="category-open-task">${allTasks[i]['category']}</div>
    <div class="title-open-task">${allTasks[i]['title']}</div>
    <div class="description-open-task">${allTasks[i]['description']}</div>
    <div class="duedate-open-task">Due date: <span class="date-open-task">${allTasks[i]['duedate']}</span></div>
    <div class="container-priority-open-task">
        <div class="priority-open-task">Priority:</div>
        <div id="currentPriorOpenTask${i}" class="current-prior-open-task">${allTasks[i]['prior']}
            <div class="current-prior-img-position-open-task">
                <img id="currentPriorImgFirstOpenTask${i}" class="current-prior-img-first-open-task" src="">
                <img id="currentPriorImgSecondOpenTask${i}" class="current-prior-img-second-open-task" src="">
            </div>
        </div>
    </div>
    <div class="container-assigned-open-task">
        <div class="assigned-open-task">Assigned to:</div>
        <div class="person-and-profile-assigned-open-task-container-hook">
            <div class="person-assigned-open-task-container">
                <div  id="assignedForInitialLettersDetails${i}" class="profile-assigned-open-task">${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}</div>
                <div class="name-assigned-open-task">${allTasks[i]['assigned']}</div>
            </div>
            <div onclick="editShowDetails(${i})" class="edit-open-task">
                <img class="edit-img-pen-open-task" src="assets/img/board/pen.svg">
                <img class="edit-img-penpeak-open-task" src="assets/img/board/penpeak.svg">
            </div>
        </div>
    </div>
</div>`;
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


/**
 * get the current date for the inputfield type date
*/
function getCurrentDate() {
    let now = new Date();
    let day = ("0" + now.getDate()).slice(-2);
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let today = now.getFullYear() + "-" + (month) + "-" + (day);
    document.getElementById('duedate').value = today;
}


/**
 * function for stop propagation
*/
function doNotCloseDiv(event) {
    event.stopPropagation();
}


/**
 * show edit details 
*/
function editShowDetails(i) {
    closeTaskDetails();
    document.getElementById('mainContainer').classList.add('hide-mobile');
    document.getElementById('overlay').classList.add('hide-mobile');
    document.getElementById('overlay').classList.add('overlay-bg');
    let edit = document.getElementById('editOpenTaskDetails');
    edit.classList.add('open-position-for-edit');
    edit.classList.remove('d-none');
    edit.innerHTML = templateEditShowDetails(i);
    let titleEdit = document.getElementById('titleEdit');
    titleEdit.value = allTasks[i]['title'];
    let descriptionEdit = document.getElementById('descriptionPopupEdit');
    descriptionEdit.value = allTasks[i]['description'];
    let duedateEdit = document.getElementById('duedateEdit');
    duedateEdit.value = allTasks[i]['duedate'];
    let profile = document.getElementById('profileAssignedEdit' + i);
    profile.innerHTML = `${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}`;
    changeBgColorOfInitialLettersEdit(i);
    changePriorColorByEdit(i);
}


function openTaskDetailsAfter(i, event) {
    saveEditDetails(i);
    openTaskDetails(i, event);
}


/**
 * save new task details
*/
function saveEditDetails(i) {
    let titleEdit = document.getElementById('titleEdit');
    allTasks[i]['title'] = titleEdit.value;
    let descriptionEdit = document.getElementById('descriptionPopupEdit');
    allTasks[i]['description'] = descriptionEdit.value;
    let duedateEdit = document.getElementById('duedateEdit');
    allTasks[i]['duedate'] = duedateEdit.value;
    if (assignedEdit != undefined) {
        allTasks[i]['firstLetter'] = firstNameLetterEdit;
        allTasks[i]['secondLetter'] = secondNameLetterEdit;
        allTasks[i]['assigned'] = assignedEdit;
    }
    if (currentPriorEdit != undefined) {
        allTasks[i]['prior'] = currentPriorEdit;
    }
    changeBgColorOfInitialLettersDetails(i);
    addInBackend();
    updateBoard();
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


function templateEditShowDetails(i) {
    return `
        <div>
            <div class="margin-popup">
            <label class="pop-up-child" for="title">Title</label><br>
            </div>
            <input class="title-popup" type="text" id="titleEdit" name="title" placeholder="Enter a title" required>
        </div>

        <div>
            <div class="margin-popup">
            <label class="pop-up-child" for="descriptionPopup">Description</label><br>
            </div>
            <textarea class="description-popup" type="text" id="descriptionPopupEdit" name="descriptionPopup" rows="5" cols="20"
            placeholder="Enter a Description" required></textarea>
        </div>

        <div>
            <div class="margin-popup">
            <label class="pop-up-child" for="duedate">Due Date</label>
            </div>
            <input class="duedate-popup" type="date" id="duedateEdit" name="duedate" required>
        </div>

        <div>
        <div class="margin-popup pop-up-child">Prio</div>
        <div class="prio-popup edit-prio-popup">
            <div id="urgentPopupEdit" onclick="changeColorUrgentEdit()" class="urgent-popup">Urgent
                <div class="urgent-popup-child">
                    <div class="position-urgent-arrow-popup-first"><img id="urgentFirstPopupEdit"
                            src="assets/img/board/arrow-urgent.svg"></div>
                    <div class="position-urgent-arrow-popup-second"><img id="urgentSecondPopupEdit"
                            src="assets/img/board/arrow-urgent.svg"></div>
                </div>
            </div>
            <div id="mediumPopupEdit" onclick="changeColorEditMedium()" class="medium-popup">Medium
                <div class="medium-popup-child">
                    <div class="position-medium-arrow-popup-first"><img id="mediumFirstPopupEdit"
                            src="assets/img/board/arrow-medium.svg"></div>
                    <div class="position-medium-arrow-popup-second"><img id="mediumSecondPopupEdit"
                            src="assets/img/board/arrow-medium.svg"></div>
                </div>
            </div>
            <div id="lowPopupEdit" onclick="changeColorEditLow()" class="low-popup">Low
                <div class="low-popup-child">
                    <div class="position-low-arrow-popup-first"><img id="lowFirstPopupEdit"
                            src="assets/img/board/arrow-low.svg"></div>
                    <div class="position-low-arrow-popup-second"><img id="lowSecondPopupEdit"
                            src="assets/img/board/arrow-low.svg"></div>
                </div>
            </div>
        </div>
        </div>

        <div>
        <div class="margin-popup"><label class="pop-up-child" for="assignedto-popup">Assigned
                to</label><br>
        </div>
        <select class="assignedto-popup" id="assignedEdit" onChange="identifySelectedAssigneEdit(this);">
            <option value="" disabled selected>Select contacts to assign</option>
            <option value="marcushaas">Marcus Haas</option>
            <option value="mariuskatzer">Marius Katzer</option>
            <option value="anilorhan">Anil Orhan</option>
        </select>
        </div>

        <div>
        <div class="person-and-profile-assigned-open-task-container">
            <div class=".person-assigned-open-task-container-edit">
                <div id="profileAssignedEdit${i}" class="profile-assigned-open-task-edit"></div>
            </div>
            <div onclick="openTaskDetailsAfter(${i}, event);" class="edit-open-task-okay-and-hook">
                <div class="edit-open-task-okay">Ok</div>
                <div class="edit-open-task-hook-container"><img class="edit-open-task-hook" src="assets/img/board/hook.svg"></div>
            </div>
        </div>
        </div>`;
}


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