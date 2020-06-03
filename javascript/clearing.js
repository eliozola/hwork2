console.log("Started clearing js");
const innerCont = document.getElementById("id-inner-cont"); 

function addElement() {

    console.log("Adding Single element");
}
function addManyElements() {

    console.log("Adding Many elements");
    for (let i=0; i<10; i++) {
        addElement();
    }
}

function deleteElements() {
    console.log("Clearing elements")
}

function addEventHandlers() {
    console.log("adding Handlers");
    const addBtn = document.getElementById("btn-id-add");
    addBtn.onclick = addElement;
    const addManyBtn = document.getElementById("btn-id-clear");
    clearBtn.onclick = deleteElements;
}