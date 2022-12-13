/*
 * create task for board
*/
async function createTodoForBoard() {
    if (checkPriority()) {
        await downloadFromServer();
        await getTaskFromBackendAddTask();
        loadTheParameterJ();
        createTodoAddTask();
        let addTask = document.getElementById('addedTask');
        addTask.style = "display: flex;";
        clearTodo();
        openWindow();
    } else {
        alert('Please select a priority');
    }
}

/*
 * check Priorty and return value
*/

function checkPriority() {
    return  checkCurrentPrior == 'Urgent' ||
            checkCurrentPrior == 'Medium' ||
            checkCurrentPrior == 'Low'
}

/**
 * load j 
 */
function loadTheParameterJ() {
    let length = allTasks.length - 1;
    if (j > 0 || length >= 0) {
        j = allTasks[length]['id'];
        j++;
    }
}



/*
 * get the task in backend
*/
async function getTaskFromBackendAddTask() {
    let allTasksAsJson = await backend.getItem('allTasks');
    if (allTasksAsJson != null) {
        allTasks = JSON.parse(allTasksAsJson);
    }
}


/*
 * forward to board page after create task
*/
function openWindow() {
    let url = 'board.html';
    setTimeout(function () { window.open(url, '_self') }, 2700);

}


/*
 * create form addTask a task in the board page
*/
function createTodoAddTask() {
    currentTitle = document.getElementById('title');
    currentTitleValue = currentTitle.value;
    currentDescription = document.getElementById('descriptionPopup');
    currentDescriptionValue = currentDescription.value;
    currentDuedate = document.getElementById('duedate');
    currentDuedateValue = currentDuedate.value;
    pushTask();
    addInBackend();
}


/*
 * clear the form
*/
function clearTodo() {
    currentTitle.value = ``;
    currentDescription.value = ``;
    currentDuedate.value = ``;
    selectedCategoryDefaultValue();
    selectedAssignedDefaultValue();
    changeColorAfterCreateTask();
    duedateChangeColorToStandard();
}


/*
 * change color of cross
*/
function changeColorOfCross() {
    document.getElementById('getCrossForHover').style = 'filter: invert(39%) sepia(66%) saturate(1450%) hue-rotate(184deg) brightness(107%) contrast(102%);';
}


function changeColorOfCrossToStandard() {
    document.getElementById('getCrossForHover').style = 'black;';
}


function cleanFormAddTask() {
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
* Show active site on the navigation bar -> Add Task
*/
function addActiveClass2() {
    setTimeout(function () {
        document.getElementById('addActiveClass-2').classList.add('active');
        document.getElementById('addActiveClassResponsive-2').classList.add('active');
        document.getElementById('sidebar-main-frame').classList.add('sidebar-fit');
    }, 150);
}