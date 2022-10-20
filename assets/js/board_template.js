function templateCreateTodo() {
    return `  
    <div onclick="openTaskDetails(${index}, event)" draggable="true" ondragstart="startDragging(${index})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategory${index}" class="category">${allTasks[index]['category']}</div>
            <div><img onclick="deleteTask(${index}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[index]['title']}</div>
        <div class="description">${allTasks[index]['description']}</div>
        <div class="assigned-and-prio">
            <div id="assignedForInitialLetters${index}" class="assigned">${allTasks[index]['firstLetter']}${allTasks[index]['secondLetter']}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${index}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${index}" src=""></div>
                </div>
        </div>
    </div>`;
}



function templateUpdateTodo(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div id="assignedForInitialLetters${i}" class="assigned">${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}


function templateUpdateInProgress(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div id="assignedForInitialLetters${i}" class="assigned">${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}


function templateUpdateAwaitingFeedback(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div  id="assignedForInitialLetters${i}" class="assigned">${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}


function templateUpdateDone(i) {
    return `    
    <div onclick="openTaskDetails(${i}, event)" draggable="true" ondragstart="startDragging(${i})" class="box">
        <div class="category-with-trash">
            <div id="changeColorOfCategoryAfterDragAndDrop${i}" class="category">${allTasks[i]['category']}</div>
            <div><img onclick="deleteTask(${i}, event)" src="assets/img/board/trash.png"></div>
        </div>
        <div class="title">${allTasks[i]['title']}</div>
        <div class="description">${allTasks[i]['description']}</div>
        <div class="assigned-and-prio">
            <div  id="assignedForInitialLetters${i}" class="assigned">${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}</div>
                <div class="prio">
                    <div class="first-arrow"><img id="createFirstImg${i}" src=""></div>
                    <div class="second-arrow"><img id="createSecondImg${i}" src=""></div>
                </div>
        </div>
    </div>`;
}



function templateOpenTaskDetails(i) {
    return `
    <div>
    <div onclick="closeTaskDetails()" class="close-open-task">
    <img src="assets/img/board/close-popup.svg" class="hide-mobile">
    <img src="assets/img/board/goback.svg" class="hide arrow-back-mobile">
    </div>
    <div id="categoryOpenTask${i}" class="category-open-task">${allTasks[i]['category']}</div>
    <div class="title-open-task">${allTasks[i]['title']}</div>
    <div class="description-open-task">${allTasks[i]['description']}</div>
    <div class="duedate-open-task">Due date: <span class="date-open-task">${allTasks[i]['duedate']}</span></div>
    <div class="container-priority-open-task">
        <div class="priority-open-task">Priority:</div>
        <div id="currentPriorOpenTask${i}" class="current-prior-open-task">${allTasks[i]['prior']}
            <div class="current-prior-img-position-open-task">
                <img id="currentPriorImgFirstOpenTask${i}" class="current-prior-img-first-open-task" src="">
                <img id="currentPriorImgSecondOpenTask${i}" class="current-prior-img-second-open-task" src="">
            </div>
        </div>
    </div>
    <div class="container-assigned-open-task">
        <div class="assigned-open-task">Assigned to:</div>
        <div class="person-and-profile-assigned-open-task-container-hook">
            <div class="person-assigned-open-task-container">
                <div  id="assignedForInitialLettersDetails${i}" class="profile-assigned-open-task">${allTasks[i]['firstLetter']}${allTasks[i]['secondLetter']}</div>
                <div class="name-assigned-open-task">${allTasks[i]['assigned']}</div>
            </div>
            <div onclick="editShowDetails(${i})" class="edit-open-task">
                <img class="edit-img-pen-open-task" src="assets/img/board/pen.svg">
                <img class="edit-img-penpeak-open-task" src="assets/img/board/penpeak.svg">
            </div>
        </div>
    </div>
</div>`;
}


function templateEditShowDetails(i) {
    return `
        <div>
            <div class="margin-popup">
            <label class="pop-up-child" for="title">Title</label><br>
            </div>
            <input class="title-popup" type="text" id="titleEdit" name="title" placeholder="Enter a title" required>
        </div>

        <div>
            <div class="margin-popup">
            <label class="pop-up-child" for="descriptionPopup">Description</label><br>
            </div>
            <textarea class="description-popup" type="text" id="descriptionPopupEdit" name="descriptionPopup" rows="5" cols="20"
            placeholder="Enter a Description" required></textarea>
        </div>

        <div>
            <div class="margin-popup">
            <label class="pop-up-child" for="duedate">Due Date</label>
            </div>
            <input class="duedate-popup" type="date" id="duedateEdit" name="duedate" required>
        </div>

        <div>
        <div class="margin-popup pop-up-child">Prio</div>
        <div class="prio-popup edit-prio-popup">
            <div id="urgentPopupEdit" onclick="changeColorUrgentEdit()" class="urgent-popup">Urgent
                <div class="urgent-popup-child">
                    <div class="position-urgent-arrow-popup-first"><img id="urgentFirstPopupEdit"
                            src="assets/img/board/arrow-urgent.svg"></div>
                    <div class="position-urgent-arrow-popup-second"><img id="urgentSecondPopupEdit"
                            src="assets/img/board/arrow-urgent.svg"></div>
                </div>
            </div>
            <div id="mediumPopupEdit" onclick="changeColorEditMedium()" class="medium-popup">Medium
                <div class="medium-popup-child">
                    <div class="position-medium-arrow-popup-first"><img id="mediumFirstPopupEdit"
                            src="assets/img/board/arrow-medium.svg"></div>
                    <div class="position-medium-arrow-popup-second"><img id="mediumSecondPopupEdit"
                            src="assets/img/board/arrow-medium.svg"></div>
                </div>
            </div>
            <div id="lowPopupEdit" onclick="changeColorEditLow()" class="low-popup">Low
                <div class="low-popup-child">
                    <div class="position-low-arrow-popup-first"><img id="lowFirstPopupEdit"
                            src="assets/img/board/arrow-low.svg"></div>
                    <div class="position-low-arrow-popup-second"><img id="lowSecondPopupEdit"
                            src="assets/img/board/arrow-low.svg"></div>
                </div>
            </div>
        </div>
        </div>

        <div>
        <div class="margin-popup"><label class="pop-up-child" for="assignedto-popup">Assigned
                to</label><br>
        </div>
        <select class="assignedto-popup" id="assignedEdit" onChange="identifySelectedAssigneEdit(this);">
            <option value="" disabled selected>Select contacts to assign</option>
            <option value="marcushaas">Marcus Haas</option>
            <option value="mariuskatzer">Marius Katzer</option>
            <option value="anilorhan">Anil Orhan</option>
        </select>
        </div>

        <div>
        <div class="person-and-profile-assigned-open-task-container">
            <div class=".person-assigned-open-task-container-edit">
                <div id="profileAssignedEdit${i}" class="profile-assigned-open-task-edit"></div>
            </div>
            <div onclick="openTaskDetailsAfter(${i}, event);" class="edit-open-task-okay-and-hook">
                <div class="edit-open-task-okay">Ok</div>
                <div class="edit-open-task-hook-container"><img class="edit-open-task-hook" src="assets/img/board/hook.svg"></div>
            </div>
        </div>
        </div>`;
}




