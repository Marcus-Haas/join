let allTasks = [];
let currentTitle;
let currentDescription;
let currentCategory;
let currentAssigned;
let currentDuedate;
let currentDraggedElement;
let index = 0;
let j = 0;
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
    identifyId();
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


function identifyId() {
    let length = allTasks.length - 1;
    if(j > 0 || length > 0) {
        j = allTasks[length]['id'];
        j++;
    }
}


function oneHigherId() {
    if(j >= 0) {
        j++;
    }
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
    oneHigherId();
    index++;
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
        'id': j,
    };
    allTasks.push(task);
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


function changeStatus(i) {
    let status = document.getElementById('changeStatus' + i).value;
    allTasks[i]['status'] = status;
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