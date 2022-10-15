async function initializeSummary() {
    await downloadFromServer();
    await getTasksFromBackend();
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

function amounts() { //ACHTUNG, JEDE ÄNDERUNG IM BOARD MUSS GEPUSHT WERDEN INS BACKEND?!
    let tasksInBoard = allTasks.length;
    let tasksInProgress = 0;
    let awaitingFeedback = 0;
    let urgendSymbol = 0; // //nach frühestem Datum suchen bei allen Tasks, Anzahl der Tasks an diesem Tag, Bild ermitteln
    let urgendTask = allTasks.length; // //nach frühestem Datum suchen bei allen Tasks, Anzahl der Tasks an diesem Tag
    let date = new Date();
    let showTimeFormat = { month: 'long', day: 'numeric', year: 'numeric' } // Datumsanzeige anpassen nach bestimmten Optionen
    let urgendTaskDate = date.toLocaleString('en-US', showTimeFormat); //nach frühestem Datum suchen bei allen Tasks, Datum, ohne Zeit, Format
    let tasksToDo = 0;
    let tasksDone = 0;
let minDate = 0;



    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i]['status'] == 'inProgress') {
            tasksInProgress++;
        }
        if (allTasks[i]['status'] == 'awaitingFeedback') {
            awaitingFeedback++;
        }

        // let minDate = new Date(
        //     Math.min(
        //         ...allTasks.map(element => {
        //             return new Date(element.duedate);
        //         }),
        //     ),
        // );
        // console.log(minDate);

        // https://stackoverflow.com/questions/20079837/how-to-find-the-earliest-date-in-an-array-using-javascript

    //     minDate = allTasks.duedate.sort(function(a,b){
    //         return Date.parse(a) > Date.parse(b);
    //     });
    
    // console.log(minDate); // ["10-Jan-2013", "1-Sep-2013", "15-Sep-2013", "12-Dec-2013"]




        if (allTasks[i]['prior'] == 'Urgent') { //muss an die Zeit gebunden werden
            document.getElementById('summary-urgency-image-arrow-urgent1').src = 'assets/img/summary/urgency-high.png';
            document.getElementById('summary-urgency-image-arrow-urgent2').src = 'assets/img/summary/urgency-high.png';
            document.getElementById('summary-urgency-image').classList.add('summary-urgency-image-urgent');
            document.getElementById('summary-urgency-text').innerHTML = `Urgent`;
        }
        if (allTasks[i]['prior'] == 'Medium') {
            document.getElementById('summary-urgency-image-arrow-urgent1').src = 'assets/img/summary/urgency-medium.png';
            document.getElementById('summary-urgency-image-arrow-urgent2').src = 'assets/img/summary/urgency-medium.png';
            document.getElementById('summary-urgency-image').classList.add('summary-urgency-image-medium');
            document.getElementById('summary-urgency-text').innerHTML = `Medium`;
        }
        if (allTasks[i]['prior'] == 'Low') {
            document.getElementById('summary-urgency-image-arrow-urgent1').src = 'assets/img/summary/urgency-low.png';
            document.getElementById('summary-urgency-image-arrow-urgent2').src = 'assets/img/summary/urgency-low.png';
            document.getElementById('summary-urgency-image').classList.add('summary-urgency-image-low');
            document.getElementById('summary-urgency-text').innerHTML = `Low`;
        }

        if (allTasks[i]['status'] == 'todo') {
            tasksToDo++;
        }
        if (allTasks[i]['status'] == 'done') {
            tasksDone++;
        }
    }

    document.getElementById('summary-tasks-amount-alltasks').innerHTML = `${tasksInBoard}`;
    document.getElementById('summary-tasks-amount-task-in-progress').innerHTML = `${tasksInProgress}`;
    document.getElementById('summary-tasks-amount-awaiting-feedback').innerHTML = `${awaitingFeedback}`;
    document.getElementById('summary-tasks-amount-urgend').innerHTML = `${urgendTask}`;
    document.getElementById('summary-tasks-amount-urgend-date').innerHTML = `${urgendTaskDate}`;
    document.getElementById('summary-tasks-amount-to-do').innerHTML = `${tasksToDo}`;
    document.getElementById('summary-tasks-amount-done').innerHTML = `${tasksDone}`;


}
