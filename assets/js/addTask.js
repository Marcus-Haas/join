/*
 * create form addTask a task in the board page
*/
function createTodoInBoard() {
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
    let addTask = document.getElementById('addedTask');
    addTask.style = "display: flex;";
    clearAndPushPriorAndRenderTaskInBoard();
}


/*
 * clear form and push task before render task in board
*/
function clearAndPushPriorAndRenderTaskInBoard() {
    pushPrior();
    clearTodo();
    let url = '/board.html';
    window.location.href = url;
}

/*
 * clear the form
*/
function clearTodo() {
    currentTitle.value = ``;
    currentDescription.value = ``;
    currentDuedate.value = ``;
    changeColorAfterCreateTask();
}


/*
 * push prior status
*/
function pushPrior() {
    if (currentPrior == 'Urgent') {
        prior.push(currentPrior);
    }
    if (currentPrior == 'Medium') {
        prior.push(currentPrior);
    }
    if (currentPrior == 'Low') {
        prior.push(currentPrior);
    }
}