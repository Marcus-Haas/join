/*
 * create task for board
*/
async function createTodoForBoard() {
    await downloadFromServer();
    await getTaskFromBackendAddTask();
    createTodoAddTask();
    let addTask = document.getElementById('addedTask');
    addTask.style = "display: flex;";
    clearTodo();
    openWindow();
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
    setTimeout(function() {window.open(url, '_self') }, 2700);

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
}