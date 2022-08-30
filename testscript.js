myitem = document.getElementById("firsttest");
//creates a variable that represents the text selected using the id
myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseout",mouseOut);
//creates the eventlistner and establishes its type
function onClick() {  
    myitem.style.color = "green";  
    myitem.style.fontSize = "36px";
}
//establishes what the fucntion does
function mouseOut(){
    myitem.style.color = "";
    myitem.style.fontSize = ".95em";

}

thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {  
    otheritem.style.color = "red";  
}

enlargeButton = document.getElementById("enlargeButton");  
secondimg = document.getElementById("secondimg");
enlargeButton.addEventListener("click", onButtonClick2);
function onButtonClick2() {  
    secondimg.style.transform= "scale(1.2)";
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);
function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}