function onClick() {
    console.log("Something was clicked");
}
function addEventHandlers () {
    console.log("Adding Event Handlers");
    const myEl = document.getElementById("box-id01");
    myEl.onclick - onMyClick;
    document.getElementById("box-id02").onclick = onBoxClick;
    document.getElementById("box-id03").onclick = () =>
    console.log("Clicked Box 3");
}

function addSecondaryHandlers() {
    const myElements = document.getElementsByClassName("secondary");
}