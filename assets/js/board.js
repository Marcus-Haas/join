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
let alreadyEmpty = true;
let checkCurrentPrior;


/**
* load task from server
*/
async function initialize() {
    await downloadFromServer();
    await getTasksFromBackend();
    identifyId();
    addActiveClass1();
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
* update the board
*/
function identifyId() {
    let length = allTasks.length - 1;
    if (j > 0 || length >= 0) {
        j = allTasks[length]['id'];
        j++;
    }
}


/**
* update the board
*/
function oneHigherId() {
    if (j >= 0) {
        j++;
    }
}


/**
* render todo box
*/
function createTodo() {
    if (checkCurrentPrior == 'Urgent' || checkCurrentPrior == 'Medium' || checkCurrentPrior == 'Low') {
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
        checkCurrentPrior = '';
    } else {
        alert('Please select a priority');
    }
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


function cleanForm() {
    let title = document.getElementById('title');
    let description = document.getElementById('descriptionPopup');
    let dudate = document.getElementById('duedate');
    title.value = ``;
    description.value = ``;
    dudate.value = ``;
    selectedCategoryDefaultValue();
    selectedAssignedDefaultValue();
    changeColorAfterCreateTask();
    duedateChangeColorToStandard();
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


/**
* delete a task
*/
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


/**
* drag and drop a task
*/
function allowDrop(ev) {
    ev.preventDefault();
}


/**
* drag and drop a task
*/
function moveTo(changeStatus) {
    allTasks[currentDraggedElement]['status'] = changeStatus;
    updateTodo();
    updateInProgress();
    updateAwaitingFeedback();
    updateDone();
}


/**
* drag and drop a task
*/
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
    duedateChangeColorToStandard();
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
    //closeTaskDetails();
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


/**
 * open tasks after detail
*/
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
 * change color of due date after select
*/
function duedateChangeColor() {
    document.getElementById('duedate').style.color = 'black';
}


/**
 * change color of due date after clear
*/
function duedateChangeColorToStandard() {
    document.getElementById('duedate').style.color = '#D1D1D1';
}


/**
 * change color of cross to blue
*/
function changeCrossToBlue() {
    document.getElementById('crossForHoverInBoard').style = 'filter: invert(39%) sepia(66%) saturate(1450%) hue-rotate(184deg) brightness(107%) contrast(102%);';
}


/**
 * change color of cross to black
*/
function changeColorOfCrossToBlack() {
    document.getElementById('crossForHoverInBoard').style = 'black;';
}


/**
 * search task
*/
function searchFilter() {
    let search = document.getElementById('searchTask');
    clearBoardBeforeFilter();
    if (search.value == '' && alreadyEmpty == true) {
        updateBoard();
        alreadyEmpty = false;
    } else {
        ifSearchFilterIsNotEmpty(search);
    }
}


/**
 * search task
*/
function ifSearchFilterIsNotEmpty(search) {
    alreadyEmpty = true;
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['title'].includes(search.value)) {
            if (allTasks[i]['status'] == 'todo') {
                todoFilter(i);
            }
            if (allTasks[i]['status'] == 'inProgress') {
                inProgressFilter(i);
            }
            if (allTasks[i]['status'] == 'awaitingFeedback') {
                inAwaitingFeedbackFilter(i);
            }
            if (allTasks[i]['status'] == 'done') {
                doneFilter(i);
            }
        }
    }
}

/**
 * filter for todo
*/
function todoFilter(i) {
    let todo = document.getElementById('todo');
    todo.innerHTML += templateUpdateTodo(i);
    executeFunction(i);
    changeColorOfCategoryAfterSearchFilter(i);
}


/**
 * filter for in progress
*/
function inProgressFilter(i) {
    let inProgress = document.getElementById('inProgress');
    inProgress.innerHTML += templateUpdateInProgress(i);
    executeFunction(i);
    changeColorOfCategoryAfterSearchFilter(i);
}


/**
 * filter for in awaiting feedback
*/
function inAwaitingFeedbackFilter(i) {
    let awaitingFeedback = document.getElementById('awaitingFeedback');
    awaitingFeedback.innerHTML += templateUpdateAwaitingFeedback(i);
    executeFunction(i);
    changeColorOfCategoryAfterSearchFilter(i);
}


/**
 * filter for done
*/
function doneFilter(i) {
    let done = document.getElementById('done');
    done.innerHTML += templateUpdateDone(i);
    executeFunction(i);
    changeColorOfCategoryAfterSearchFilter(i);
}



/**
 * clear the board before filter starts
*/
function clearBoardBeforeFilter() {
    let todo = document.getElementById('todo');
    let inProgress = document.getElementById('inProgress');
    let awaitingFeedback = document.getElementById('awaitingFeedback');
    let done = document.getElementById('done');
    todo.innerHTML = ``;
    inProgress.innerHTML = ``;
    awaitingFeedback.innerHTML = ``;
    done.innerHTML = ``;
}


/**
 * execution function in search task
*/
function executeFunction(i) {
    changeBgColorOfInitialLettersAfterSearch(i);
    changePriorAfterSearchFilter(i);
}

/**
 * Show active site on the navigation bar -> Board
 */
function addActiveClass1() {
    document.getElementById('addActiveClass-1').classList.add('active');
    document.getElementById('addActiveClassResponsive-1').classList.add('active');
}