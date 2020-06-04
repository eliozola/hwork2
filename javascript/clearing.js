console.log("Started Clearing js");
//globals
const innerCont = document.getElementById("id-inner-cont");
const maxCountEl = document.getElementById("max-count");
let maxCount = 20;
const MAX = 100;
const MIN = 0;

//Add Listeners to each button

function onAddElement(event) {
    console.log("Adding SingleElement call from", event.currentTarget.id);
    //Avoid using innerHTML because it is easy to mess up HTML and introduce security issues
    // innerCont.innerHTML += "<div class='inner-box'>Kaste</div>";
    addElement(innerCont, "div", null, ["box", "red-box"], "Kaste");
}

function addElement(parent, tag, id, classList, content) {
    const newEl = document.createElement(tag);
    if (id !== null) newEl.id = id;
    newEl.classList.add(...classList);
    newEl.innerText = content;
    parent.appendChild(newEl);
}

function addManyElements() {
    console.log("Adding Many Elements");
    //TODO get rid of magic 10
    for (let i = 0; i < maxCount; i++) {
        const id = "b-id-" + i;
        const classList = ["box"];
        //backticks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        console.log(`Adding index ${i} id ${id} with `);
        if (i % 2 === 0) {
            classList.push("red-box");
        } else {
            classList.push("green-box");
        }
        // console.log(classList);
        addElement(innerCont, "div", id, classList, "Kaste " + i);
    }
}

function deleteElements() {
    console.log("Clearing Elements");
    while (innerCont.firstChild) {
        innerCont.removeChild(innerCont.firstChild);
    }
}

function onMaxChange() {
    console.log("New value might be", maxCountEl.value);
    //IMPORTANT need to convert to Number instead of String
    const tvalue = parseInt(maxCountEl.value);
    //sanity check
    if (tvalue > MAX || tvalue < MIN) return;

    maxCount = tvalue;
    console.log("Actually maxcount is", maxCount);
    console.log(maxCount, typeof maxCount);
}

function addEventHandlers() {
    console.log("adding Handlers");
    const addBtn = document.getElementById("btn-id-add");
    addBtn.onclick = onAddElement;
    const addManyBtn = document.getElementById("btn-id-add-many");
    addManyBtn.onclick = addManyElements;
    //we do not even need to save the buttons
    document.getElementById("btn-id-clear").onclick = deleteElements;
    maxCountEl.onchange = onMaxChange; //this happens when value is finalize
    //so there is difference between onchange and oninput
    //oninput fires whenever value is changed on the fly
    maxCountEl.oninput = (ev) =>
        console.log("Fires while changing", ev.target.value);
    //add event handlers here
    //you will need to find the elements
    //TODO add button should call addElements
    //TODO clear button should call deleteElements
}

addEventHandlers();