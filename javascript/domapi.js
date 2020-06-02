function main() {
    console.log("Running domapi examples");    
    console.log("Running main");  
    const app = document.getElementById('myApp');
    app.style.height = "200px"; 
    app.style.backgroundColor = "rgb(219, 127, 142)"; 
    app.innerText = "My big bad application";
    app.style.border = "bold";
    app.style.width = "100%";
    const boxes = document.getElementsByClassName("boxy");
}

main();