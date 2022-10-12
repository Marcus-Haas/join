/*
 * create task for board
*/
function createTodoForBoard() {
    createTodoAddTask();
    firstLetterFirstName.push(firstNameLetter);
    firstLetterSecondName.push(secondNameLetter);
    let addTask = document.getElementById('addedTask');
    addTask.style = "display: flex;";
    clearAndPushPriorAndRenderTaskInBoard();
}


/*
 * clear form and push task before render task in board
*/
function clearAndPushPriorAndRenderTaskInBoard() {
    pushPrior();
    saveInBackend();
    clearTodo();
    //let url = 'board.html';
    //window.open(url);
}


async function saveInBackend() {
    await backend.setItem('allTasks', JSON.stringify(allTasks));
    await backend.setItem('prior', JSON.stringify(prior));
    await backend.setItem('firstLetterFirstName', JSON.stringify(firstLetterFirstName));
    await backend.setItem('firstLetterSecondName', JSON.stringify(firstLetterSecondName));
}


/*async function deleteTasks() {
    await backend.deleteItem('allTasks');
    await backend.deleteItem('prior');
    await backend.deleteItem('firstLetterFirstName');
    await backend.deleteItem('firstLetterSecondName');
}*/


/*
 * create form addTask a task in the board page
*/
function createTodoAddTask() {
    currentTitle = document.getElementById('title').value;
    currentDescription = document.getElementById('descriptionPopup').value;
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