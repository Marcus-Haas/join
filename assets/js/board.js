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
    <div class="todo-child-container">
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
    <div class="todo-child-container">
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
    <div class="todo-child-container">
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
    <div class="todo-child-container">
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