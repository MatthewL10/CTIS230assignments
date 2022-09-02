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
    secondimg.style.transform= "scale(1.75)";
    secondimg.style.display="block";
    secondimg.style.margin="auto";
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);
function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}
secondimg.addEventListener("mouseout",mouseleave);
function mouseleave(){
    secondimg.style.transform= "";
    secondimg.style.display="";
    secondimg.style.margin="";
}
// Photo Gallery


mybigimage = document.getElementById("largeview");
img1 = document.getElementById("img1");


img1.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click", hideBigImage);

document.addEventListener("keyup", hideBigImage);

function makeBigImage() {
    mybigimage.innerHTML = '';
    bigimage = document.createElement("img");
    bigimage.src ="images/armbig.jpg";
 
    mybigimage.appendChild(bigimage);
    mybigimage.classList.remove("dontshow");
    img1.classList.add("dontshow");
}

function hideBigImage() {
    mybigimage.classList.add("dontshow");
    img1.classList.remove("dontshow");
}