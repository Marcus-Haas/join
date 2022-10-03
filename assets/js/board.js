let title = [];
let description = [];
let category = [];
let assigned = [];
let duedate = [];
let currentTitle;
let currentDescription;
let currentCategory;
let currentAssigned;
let currentDuedate;
let currentDraggedElement;
let index = 0;


/*
* render todo box
*/
function createTodo() {
    updateArray();
    let todo = document.getElementById('todo');
    todo.innerHTML += templateCreateTodo();
    currentTitle.value = ``;
    currentDescription.value = ``;
    currentDuedate.value = ``;
    closeForm();
    changeColorAfterCreateTask();
    changeColorOfCategory();
    index++;
}


/*
* render todo box
*/
function updateArray() {
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
}


function templateCreateTodo() {
    return `    
    <div draggable="true" ondragstart="startDragging(${index})" class="box">
        <div id="changeColorOfCategory${index}" class="category">${category[index]}</div>
        <div class="title">${title[index]}</div>
        <div class="description">${description[index]}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${assigned[index]}</div>
                <div class="prio">
                    <div class="first-arrow"><img src="assets/img/board/arrow-low.svg"></div>
                    <div class="second-arrow"><img src="assets/img/board/arrow-low.svg"></div>
                </div>
        </div>
    </div>`;
}


/*
* drag and drop a task
*/
function startDragging(id) {
    currentDraggedElement = id;
}


function allowDrop(ev) {
    ev.preventDefault();
}


function moveTo(getIdOfBox) {
    let dragAndDrop = document.getElementById(getIdOfBox);
    dragAndDrop.innerHTML += templateDragAndDrop();
    changeColorOfCategoryAfterDragAndDrop();
}


function templateDragAndDrop() {
    return `    
    <div draggable="true" ondragstart="startDragging(${currentDraggedElement})" class="box">
        <div id="changeColorOfCategoryAfterDragAndDrop${currentDraggedElement}" class="category">${category[currentDraggedElement]}</div>
        <div class="title">${title[currentDraggedElement]}</div>
        <div class="description">${description[currentDraggedElement]}</div>
        <div class="assigned-and-prio">
            <div class="assigned">${assigned[currentDraggedElement]}</div>
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


/*
* open the pop-up
*/
function openForm() {
    document.getElementById('popup-window').style.display = 'unset';
    document.getElementById('mainContainer').style.opacity = '0.5';
}


/*
* close the pop-up
*/
function closeForm() {
    document.getElementById('popup-window').style.display = "none";
    document.getElementById('mainContainer').style.opacity = 'unset';
}


/*
 * change the prio to the basic form 
*/
function changeColorAfterCreateTask() {
    let urgent = document.getElementById('urgentPopup');
    let medium = document.getElementById('mediumPopup');
    let low = document.getElementById('lowPopup');
    urgent.classList.remove('change-color-img');
    medium.classList.remove('change-color-img');
    low.classList.remove('change-color-img');
    urgent.classList.remove('urgent-bg-color');
    medium.classList.remove('medium-bg-color');
    low.classList.remove('low-bg-color');
}


function changeColorOfCategory() {
    let category = document.getElementById('category-popup')
    let categoryAddColor = document.getElementById('changeColorOfCategory' + index);
    category = category.value;
    if (category == 'Sales') {
        categoryAddColor.classList.add('sales');
    }
    if (category == 'Design') {
        categoryAddColor.classList.add('design');
    }
    if (category == 'Backoffice') {
        categoryAddColor.classList.add('backoffice');
    }
    if (category == 'Marketing') {
        categoryAddColor.classList.add('marketing');
    }
    if (category == 'IT') {
        categoryAddColor.classList.add('it');
    }
    if (category == 'Media') {
        categoryAddColor.classList.add('media');
    }

}

function changeColorOfCategoryAfterDragAndDrop() {
    let category = document.getElementById('category-popup')
    let categoryAddColor = document.getElementById('changeColorOfCategoryAfterDragAndDrop' + currentDraggedElement);
    category = category.value;
    if (category == 'Sales') {
        categoryAddColor.classList.add('sales');
    }
    if (category == 'Design') {
        categoryAddColor.classList.add('design');
    }
    if (category == 'Backoffice') {
        categoryAddColor.classList.add('backoffice');
    }
    if (category == 'Marketing') {
        categoryAddColor.classList.add('marketing');
    }
    if (category == 'IT') {
        categoryAddColor.classList.add('it');
    }
    if (category == 'Media') {
        categoryAddColor.classList.add('media');
    }
}