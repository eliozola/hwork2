function main() {
   
    console.log("Running main");  
    const app = document.getElementById('myApp');
    const boxes = document.getElementsByClassName("boxy");

    styleEl(app, "200px", "60%", "rgb(219, 127, 142)");
    styleEl(boxes, "100px", "200%", "rgb(70, 70, 110)");

}

function styleEl(el, height, width, backgroundColor)  {
    el.style.height = height; 
    el.style.width = width; 
    el.style.backgroundColor = backgroundColor; 
    ;
}

main();

// console.log("Running domapi examples"); 
  //;
    //app.style.height = "200px"; 
    //app.style.backgroundColor = "rgb(219, 127, 142)"; 
    //app.innerText = "My big bad application";
    //app.style.width = "100%";
    //const boxes = document.getElementsByClassName("boxy");