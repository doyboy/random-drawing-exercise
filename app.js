import 'jquery';

// Initialization
const results = $('#results'),
    list = $('#list');

const getExerciseBtn = $('#getExerciseBtn'),
    addItemBtn = $('#addItemBtn'),
    clearItemsBtn = $('#clearItemsBtn'),
    hideListBtn = $('#hideListBtn');

const addItemInput = $('#addItemInput');

let exercises = [],
    listArr = [];

assembleArrays();

// Triggers
addItemInput.keypress(e => {
    if (e.which == 13) {
        addItem();
    }
});
addItemBtn.click(addItem);

getExerciseBtn.click(getExercise);

hideListBtn.click(hideList);

// Functions: 
function assembleArrays() {
    listArr = $.makeArray(list.children());

    listArr.forEach(item => {
        exercises.push(item.innerHTML);
    });
}

function addItem() {
    if (addItemInput.val()) {
        list.append(`<li>${addItemInput.val()}</li>`)

        addItemInput.val('');

        assembleArrays();
    }
}

function getExercise() {
    let randomNum = Math.floor(Math.random() * exercises.length);
    results.html(exercises[randomNum]);
}

function hideList() {
    if (hideListBtn.html() === "Hide List") {
        list.hide();
        hideListBtn.html("Show List");
    } else {
        list.show();
        hideListBtn.html("Hide List");
    }
}