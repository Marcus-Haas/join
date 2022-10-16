let duedate = [];
let showUrgency = []
let showUrgencyCounter = 0;
let tasksInProgress = 0;
let awaitingFeedback = 0;
let date = new Date();
let showTimeFormat = { month: 'long', day: 'numeric', year: 'numeric' } // Datumsanzeige anpassen nach bestimmten Optionen
let showDueDate = date.toLocaleString('en-US', showTimeFormat); //nach frühestem Datum suchen bei allen Tasks, Datum, ohne Zeit, Format
let tasksToDo = 0;
let tasksDone = 0;

async function initializeSummary() {
    await init();
    await initStart();
    await downloadFromServer();
    let allTasksAsJson = await backend.getItem('allTasks');
    allTasks = JSON.parse(allTasksAsJson);
    showMyName();
    amounts();
}

// show my Name or Guest at summary.html //
function showMyName() {
    let myName = activeUser[0];
    let Name = document.getElementById('my-name');
    if (activeUser == 0) {
        Name.innerHTML = 'Guest';
    } else {
        Name.innerHTML = myName;
    }
}

function amounts() {
    let tasksInBoard = allTasks.length;
    amountStatusSetDueDate();
    resetSummary();
    pushAllDueDatesAndPrios();
    checkIfUrgencyIsLow(showUrgency);
    checkIfUrgencyIsMedium(showUrgency);
    checkIfUrgencyIsUrgent(showUrgency);
    showSummaryResult(tasksInBoard, tasksInProgress, awaitingFeedback, showUrgencyCounter, showDueDate, tasksToDo, tasksToDo, tasksDone);
}

function checkIfUrgencyIsLow(showUrgency) {
    if (showUrgency.find(x => x === 'Low')) {
        document.getElementById('summary-urgency-image-arrow-urgent1').src = 'assets/img/summary/urgency-low.png';
        document.getElementById('summary-urgency-image-arrow-urgent2').src = 'assets/img/summary/urgency-low.png';
        document.getElementById('summary-urgency-image').classList.add('summary-urgency-image-low');
        document.getElementById('summary-urgency-text').innerHTML = `Low`;
        return showUrgency
    }
}

function checkIfUrgencyIsMedium(showUrgency) {
    if (showUrgency.find(x => x === 'Medium')) {
        showUrgency = showUrgency.filter(e => e !== 'Low');
        document.getElementById('summary-urgency-image').classList.remove('summary-urgency-image-low');
        document.getElementById('summary-urgency-image-arrow-urgent1').src = 'assets/img/summary/urgency-medium.png';
        document.getElementById('summary-urgency-image-arrow-urgent2').src = 'assets/img/summary/urgency-medium.png';
        document.getElementById('summary-urgency-image').classList.add('summary-urgency-image-medium');
        document.getElementById('summary-urgency-text').innerHTML = `Medium`;
        return showUrgency
    }
}

function checkIfUrgencyIsUrgent(showUrgency) {
    if (showUrgency.find(x => x === 'Urgent')) {
        showUrgency = showUrgency.filter(e => e !== 'Low', 'Medium');
        document.getElementById('summary-urgency-image').classList.remove('summary-urgency-image-low');
        document.getElementById('summary-urgency-image').classList.remove('summary-urgency-image-medium');
        document.getElementById('summary-urgency-image-arrow-urgent1').src = 'assets/img/summary/urgency-high.png';
        document.getElementById('summary-urgency-image-arrow-urgent2').src = 'assets/img/summary/urgency-high.png';
        document.getElementById('summary-urgency-image').classList.add('summary-urgency-image-urgent');
        document.getElementById('summary-urgency-text').innerHTML = `Urgent`;
        return showUrgency
    }
}

function showSummaryResult(tasksInBoard, tasksInProgress, awaitingFeedback, showUrgencyCounter, showDueDate, tasksToDo, tasksToDo, tasksDone) {
    document.getElementById('summary-tasks-amount-alltasks').innerHTML = `${tasksInBoard}`;
    document.getElementById('summary-tasks-amount-task-in-progress').innerHTML = `${tasksInProgress}`;
    document.getElementById('summary-tasks-amount-awaiting-feedback').innerHTML = `${awaitingFeedback}`;
    document.getElementById('summary-tasks-amount-urgend').innerHTML = `${showUrgencyCounter}`;
    document.getElementById('summary-tasks-amount-urgend-date').innerHTML = `${showDueDate}`;
    document.getElementById('summary-tasks-amount-to-do').innerHTML = `${tasksToDo}`;
    document.getElementById('summary-tasks-amount-done').innerHTML = `${tasksDone}`;
    return tasksInBoard, tasksInProgress, awaitingFeedback, showUrgencyCounter, showDueDate, tasksToDo, tasksToDo, tasksDone
}

function resetSummary() {
    document.getElementById('summary-urgency-image-arrow-urgent2').src = '';
    document.getElementById('summary-urgency-image-arrow-urgent2').src = '';
    document.getElementById('summary-urgency-image').classList.remove('summary-urgency-image-low');
    document.getElementById('summary-urgency-image').classList.remove('summary-urgency-image-medium');
    document.getElementById('summary-urgency-image').classList.remove('summary-urgency-image-urgent');
    document.getElementById('summary-urgency-text').innerHTML = '';
}

function amountStatusSetDueDate() {
    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['status'] == 'inProgress') {
            tasksInProgress++;
        }
        if (allTasks[i]['status'] == 'awaitingFeedback') {
            awaitingFeedback++;
        }
        if (allTasks[i]['status'] == 'todo') {
            tasksToDo++;
        }
        if (allTasks[i]['status'] == 'done') {
            tasksDone++;
        }
        let singleDueDate = allTasks[i]['duedate'];
        duedate.push(singleDueDate);
        showDueDate = duedate.reduce(function (a, b) { return a < b ? a : b; });
    }
}

function pushAllDueDatesAndPrios() {
    for (let j = 0; j < allTasks.length; j++) {

        let searchForDueDate = allTasks[j]['duedate'];
        let searchForUrgency = allTasks[j]['prior'];
        if (showDueDate == searchForDueDate) {
            showUrgency.push(searchForUrgency);
            showUrgencyCounter += 1;
        }
    }
}