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
    pushPrior();
    let addTask = document.getElementById('addedTask');
    addTask.style = "display: flex;";
    clearTodo();
    createTodoFromAddTask();
}

function clearTodo() {
    currentTitle.value = ``;
    currentDescription.value = ``;
    currentDuedate.value = ``;
    changeColorAfterCreateTask();
}


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