/**
 * Setting all required varibles and arrays
 */
let duedate = [];
let showUrgency = []
let showUrgencyCounter = 0;
let tasksInProgress = 0;
let awaitingFeedback = 0;
let date = new Date();
let showTimeFormat = { month: 'long', day: 'numeric', year: 'numeric' } // Customize date display according to specific options
let showDueDate = date.toLocaleString('en-US', showTimeFormat);
let tasksToDo = 0;
let tasksDone = 0;

/**
 * Downloading files vom backend server, and run first functions
 */
async function initializeSummary() {
    await init();
    await initStart();
    await downloadFromServer();
    let allTasksAsJson = await backend.getItem('allTasks');
    allTasks = JSON.parse(allTasksAsJson);
    showMyName();
    amounts();
}

/**
 * Show user login name or guest login name at start
 */
function showMyName() {
    let myName = activeUser[0];
    let Name = document.getElementById('my-name');
    if (activeUser == 0) {
        Name.innerHTML = 'Guest';
    } else {
        Name.innerHTML = myName;
    }
}

/**
 * Run serval functions to build the page summary.html with all variables.
 * Change time format for 'showDueDate'.
 */
function amounts() {
    let tasksInBoard = allTasks.length;
    amountStatusSetDueDate();
    resetSummary();
    pushAllDueDatesAndPrios();
    checkIfUrgencyIsLow(showUrgency);
    checkIfUrgencyIsMedium(showUrgency);
    checkIfUrgencyIsUrgent(showUrgency);
    getDateAndTime();
    date = new Date(showDueDate);
    showDueDate = date.toLocaleString('en-US', showTimeFormat);
    showSummaryResult(tasksInBoard, tasksInProgress, awaitingFeedback, showUrgencyCounter, showDueDate, tasksToDo, tasksToDo, tasksDone);
}

/**
 * Check all registered tasks with different status from the array 'allTasks'. 
 * Push all duedates from the array 'allTasks' into the array 'singleDueDate'.
 * Put all duedates in order from the array 'singleDueDate', beginning at the first date.
 * Show only the first date from the array 'singleDueDate'.
 */
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

/**
 * Run serval functions to build the page summary.html with all variables
 */
function checkIfUrgencyIsLow(showUrgency) {
    if (showUrgency.find(x => x === 'Low')) {
        document.getElementById('summary-urgency-image-arrow-urgent1').src = 'assets/img/summary/urgency-low.png';
        document.getElementById('summary-urgency-image-arrow-urgent2').src = 'assets/img/summary/urgency-low.png';
        document.getElementById('summary-urgency-image').classList.add('summary-urgency-image-low');
        document.getElementById('summary-urgency-text').innerHTML = `Low`;
        return showUrgency
    }
}

/**
 * At reloading the page, all entries are reset.
 */
function resetSummary() {
    document.getElementById('summary-urgency-image-arrow-urgent2').src = '';
    document.getElementById('summary-urgency-image-arrow-urgent2').src = '';
    document.getElementById('summary-urgency-image').classList.remove('summary-urgency-image-low');
    document.getElementById('summary-urgency-image').classList.remove('summary-urgency-image-medium');
    document.getElementById('summary-urgency-image').classList.remove('summary-urgency-image-urgent');
    document.getElementById('summary-urgency-text').innerHTML = '';
}

/**
 * Push all found duedates and urgencies into the array 'showUrgency'. 
 * Count the number of all tasks.
 */
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

/**
 * If the urgency from the array 'showUrgency' is 'medium', let all medium-elements shown.
 * Find 'Medium' in the array 'showUrgency' and filter all entries with 'low' away.
 * The aim is that only entries with the urgency 'medium' are displayed.
 */
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

/**
 * If the urgency from the array 'showUrgency' is 'urgent', let all urgent-elements shown.
 * Find 'Urgent' in the array 'showUrgency' and filter all entries with 'low' and medium away.
 * The aim is that only entries with the urgency 'urgent' are displayed.
 */
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

/**
 * Insert all values for the html part
 */
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

/**
 * Change greeting at summary depending on the time of day
 */
function getDateAndTime() {
    let currentDate = new Date();
    let welcome = document.getElementById('welcome');
    welcome.innerHTML = ``;
    let hour = currentDate.getHours();
    if (hour < 12) {
        welcome.innerHTML = "Good morning";
      } else if (hour > 12 && hour < 17) {
        welcome.innerHTML = "Good afternoon";
      } else {
        welcome.innerHTML = "Good evening";
      }
}