const addBtn = document.querySelector(".btn-get-data")
const ajaxBtn = document.querySelector(".btn-ajax-data")
addBtn.onclick = onAddClick;
const containerEl = document.querySelector(".container");


function onAddClick() {
    console.log("Going to add some data")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => createMyElement(json))
}

function onAjaxClick() {
    console.click("Clicked AJAX"); 
    //https://api.jquery.com/jquery.ajax/
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/2",
        cache: true,

    }) .done(createMyElement);

}
function createMyElement(json) {
    console.log(json);
    console.log(json.title);
    const newEl = document.createElement("p");
    newEl.innerText = json.title;

}