myitem = document.getElementById("firsttest");
//creates a variable that represents the text selected using the id
myitem.addEventListener("click", onClick);
// myitem.addEventListener("mouseout",mouseOut);
//creates the eventlistner and establishes its type
function onClick() {  
    myitem.style.color = "green";  
    myitem.style.fontSize = "36px";
}
//establishes what the fucntion does
// function mouseOut(){
//     myitem.style.color = "";
//     myitem.style.fontSize = "";

// }