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


async function getTaskFromBackendAddTask() {
    let allTasksAsJson = await backend.getItem('allTasks');
    if (allTasksAsJson != null) {
        allTasks = JSON.parse(allTasksAsJson);
    }
}


function openWindow() {
    let url = 'board.html';
    setTimeout(function() {window.open(url) }, 4000);

}


/*
 * create form addTask a task in the board page
*/
function createTodoAddTask() {
    currentTitle = document.getElementById('title').value;
    currentDescription = document.getElementById('descriptionPopup').value;
    currentDuedate = document.getElementById('duedate').value;
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