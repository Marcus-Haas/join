function onload() {
    todo();
    inProgress();
    awaitingFeedback();
    done();
}


/*
 * render todo box
 */
function todo() {
    let todo = document.getElementById('todo');
    todo.innerHTML = `
    <div onclick="openForm()" class="todo-child-container">
        <div class="title-area">To do</div>
        <img class="plus-button" src="assets/img/board/plus-button.svg">
    </div>
                
    <div class="box">
        <div class="category">Design</div>
        <div class="title">Here is the title of the task</div>
        <div class="description">Here is the description of the task</div>
        <div class="assigned-and-prio">
            <div class="assigned">SM</div>
                <div class="prio">
                    <div class="first-arrow"><img src="assets/img/board/arrow-low.svg"></div>
                    <div class="second-arrow"><img src="assets/img/board/arrow-low.svg"></div>
                </div>
        </div>
    </div>`;
}


/*
 * render inProgress box
 */
function inProgress() {
    let inProgress = document.getElementById('inProgess');
    inProgress.innerHTML = `
    <div onclick="openForm()" class="todo-child-container">
        <div class="title-area">In progress</div>
        <img class="plus-button" src="assets/img/board/plus-button.svg">
    </div>
                
    <div class="box">
        <div class="category">Design</div>
        <div class="title">Here is the title of the task</div>
        <div class="description">Here is the description of the task</div>
        <div class="assigned-and-prio">
            <div class="assigned">SM</div>
                <div class="prio">
                    <div class="first-arrow"><img src="assets/img/board/arrow-low.svg"></div>
                    <div class="second-arrow"><img src="assets/img/board/arrow-low.svg"></div>
                </div>
        </div>
    </div>`;
}


/*
 * render awaiting feedback box
 */
function awaitingFeedback() {
    let awaitingFeedback = document.getElementById('awaitingFeedback');
    awaitingFeedback.innerHTML = `
    <div onclick="openForm()" class="todo-child-container">
        <div class="title-area">Awaiting Feedback</div>
        <img class="plus-button" src="assets/img/board/plus-button.svg">
    </div>
                
    <div class="box">
        <div class="category">Design</div>
        <div class="title">Here is the title of the task</div>
        <div class="description">Here is the description of the task</div>
        <div class="assigned-and-prio">
            <div class="assigned">SM</div>
                <div class="prio">
                    <div class="first-arrow"><img src="assets/img/board/arrow-low.svg"></div>
                    <div class="second-arrow"><img src="assets/img/board/arrow-low.svg"></div>
                </div>
        </div>
    </div>`;
}


/*
 * render done box
 */
function done() {
    let done = document.getElementById('done');
    done.innerHTML = `
    <div onclick="openForm()" class="todo-child-container">
        <div class="title-area">Done</div>
        <img class="plus-button" src="assets/img/board/plus-button.svg">
    </div>
                
    <div class="box">
        <div class="category">Design</div>
        <div class="title">Here is the title of the task</div>
        <div class="description">Here is the description of the task</div>
        <div class="assigned-and-prio">
            <div class="assigned">SM</div>
                <div class="prio">
                    <div class="first-arrow"><img src="assets/img/board/arrow-low.svg"></div>
                    <div class="second-arrow"><img src="assets/img/board/arrow-low.svg"></div>
                </div>
        </div>
    </div>`;
}


/*
 * delete icon if someone is tiping
 */
function deleteIconInSearchInputField() {
    let line = document.getElementById('line');
    let iconSearch = document.getElementById('iconSearch');

    line.classList.add('d-none');
    iconSearch.classList.add('d-none');
}


/*
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


/*
 * change bg color of urgent
 */
function changeColorUrgent() {
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.add('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.remove('low-bg-color');

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


/*
 * change bg color of medium
 */
function changeColorMedium() {
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.add('medium-bg-color');
    low.classList.remove('low-bg-color');

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


/*
 * change bg color of low
 */
function changeColorLow() {
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.add('low-bg-color');

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


function openForm() {
    document.getElementById('popup-window').style.display = 'unset';
    document.getElementById('mainContainer').style.opacity = '0.5';
  }



function closeForm() {
    document.getElementById('popup-window').style.display = "none";
    document.getElementById('mainContainer').style.opacity = 'unset';
  }