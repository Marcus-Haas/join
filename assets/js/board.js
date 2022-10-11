let allTasks = [];
let prior = [];
let currentTitle;
let currentDescription;
let currentCategory;
let currentAssigned;
let currentDuedate;
let currentDraggedElement;
let index = 0;
let currentPrior;


/**
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


/**
* render todo box from addTask
*/
function createTodoFromAddTask() {
    let todo = document.getElementById('todo');
    todo.innerHTML += templateCreateTodo();
    changeColorOfCategory();
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


/**
* update todo array
*/
function updateArrayTodo() {
    currentTitle = document.getElementById('title').value;
    currentDescription = document.getElementById('descriptionPopup').value;
    currentCategory = document.getElementById('category-popup').value;
    currentAssigned = document.getElementById('assignedto-popup').value;
    currentDuedate = document.getElementById('duedate').value;
    let task = {
        'title': currentTitle,
        'description': currentDescription,
        'category': currentCategory,
        'assigned': currentAssigned,
        'duedate': currentDuedate,
        'status': 'todo',
        'id': index,
    };
    allTasks.push(task);
}


function templateCreateTodo() {
    return `    
    <div draggable="true" ondragstart="startDragging(${index})" class="box">
        <div id="changeColorOfCategory${index}" class="category">${allTasks[index]['category']}</div>
        <div class="title">${allTasks[index]['title']}</div>
        <div class="description">${allTasks[index]['description']}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${allTasks[index]['assigned']}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${index}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${index}" src=""></div>
                </div>
        </div>
    </div>`;
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
        }
    }
}


function templateUpdateTodo(i) {
    return `    
    <div draggable="true" ondragstart="startDragging(${i})" class="box">
        <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${allTasks[i]['assigned']}</div>
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
        }
    }
}


function templateUpdateInProgress(i) {
    return `    
    <div draggable="true" ondragstart="startDragging(${i})" class="box">
        <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${allTasks[i]['assigned']}</div>
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
        }
    }
}


function templateUpdateAwaitingFeedback(i) {
    return `    
    <div draggable="true" ondragstart="startDragging(${i})" class="box">
        <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${allTasks[i]['assigned']}</div>
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
        }
    }
}


function templateUpdateDone(i) {
    return `    
    <div draggable="true" ondragstart="startDragging(${i})" class="box">
        <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${allTasks[i]['assigned']}</div>
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
function openForm() {
    document.getElementById('popup-window').style.display = 'unset';
}


/**
* close the pop-up
*/
function closeForm() {
    document.getElementById('popup-window').style.display = "none";
    document.getElementById('mainContainer').style.opacity = 'unset';
    currentTitle = document.getElementById('title');
    currentDescription = document.getElementById('descriptionPopup');
    currentDuedate = document.getElementById('duedate');
    currentTitle.value = ``;
    currentDescription.value = ``;
    currentDuedate.value = ``;
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
function openTaskDetails() {
    document.getElementById('openTask').classList.remove('d-none');
    let openTask = document.getElementById('openTask');
    openTask.innerHTML = templateOpenTaskDetails();
}


function templateOpenTaskDetails() {
    return `
    <div class="open-taks">
    <div onclick="closeTaskDetails()" class="close-open-task"><img src="assets/img/board/close-popup.svg"></div>
    <div class="category-open-task">Sales</div>
    <div class="title-open-task">Call potencial clients</div>
    <div class="description-open-task">Make the product presentation to prospective buyers</div>
    <div class="duedate-open-task">Due date: <span class="date-open-task">05-08-2022</span></div>
    <div class="container-priority-open-task">
        <div class="priority-open-task">Priority:</div>
        <div class="current-prior-open-task">Urgent
            <div class="current-prior-img-position-open-task">
                <img class="current-prior-img-first-open-task" src="assets/img/board/arrow-urgent.svg"><img
                    class="current-prior-img-second-open-task" src="assets/img/board/arrow-urgent.svg">
            </div>
        </div>
    </div>
    <div class="container-assigned-open-task">

        <div class="assigned-open-task">Assigned to:</div>
        <div class="person-and-profile-assigned-open-task-container">
            <div class="person-assigned-open-task-container">
                <div class="profile-assigned-open-task">MM</div>
                <div class="name-assigned-open-task">Max Mustermann</div>
            </div>
            <div class="edit-open-task">
                <img class="edit-img-pen-open-task" src="assets/img/board/pen.svg">
                <img class="edit-img-penpeak-open-task" src="assets/img/board/penpeak.svg">
            </div>
        </div>

    </div>
</div>`;
}


function closeTaskDetails() {
    document.getElementById('openTask').classList.add('d-none');
}