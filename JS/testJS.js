// step 0: what do we want to do? change the color and the 
// size and the content of the text
// when the user moves the mouse over it, and change it
// back when the user moves off the text

// step 1: get the element that we want to affect
// store it away so that we're ready to respond to 
// the event

ourText = document.getElementById("newtext");

// this code asks the document for the element that has 
// id newtext and sotres the response in something named
// ourText



//step 2: we want to tell ourtext to change when the
// mouse moves over it, so we attach an event listener
// to ourText

ourText.addEventListener("mouseover", onMouseOver);


// heres our event listener
function onMouseOver() {
  ourText.style.color = "red";
  ourText.style.fontSize = "3em";
  ourText.innerHTML = "And we changed the text";
}

myCard = document.getElementById("card");//get the div that holds the card image

ourText.addEventListener("mouseout",onMouseOut);
function onMouseOut(){
  ourText.style.color = "black";
  ourText.style.fontSize = "1em";
  ourText.innerHTML = "<strong> And we Changed it back </strong>";
}

ourButton = document.getElementById("mybutton");
ourButton.addEventListener("click", onClick);
//write the event handler
function onClick(){
    ourText.innerHTML="I clicked the button";
    ourText.style.color = "red";
myCard.style.display= "block";
}

// get the textfield with the id myinput
ourInput = document.getElementById("myinput"); // this contains the new text
ourHeading = document.getElementById("header"); // what we're going to modify

// tell the textfield what event listener is connected to its events
ourInput.addEventListener("change", changeText); // the text int he field changes
ourInput.addEventListener("blur", changeText);

//the textfield has focus when we're typing into it
// when we click out of it, the text field loses foucs, and theat generates
// a blur event 

function changeText() {
    // Get the text that the user entered
    newtext = ourInput.value; // we ask our input for its value , which is the entered text
    ourHeading.innerHTML = newtext;
}
myCardImage = document.getElementById("cardimage");
myCard.addEventListener("click", changeImage);

function changeImage() {
  if (myCard.style.position == ""){
    myCard.style.position = "absolute"; // make the position of the div absolute and 100px from the top left corner
    myCard.style.top= "100px";
    myCard.style.left="100px";
    myCardImage.style.width="80px"; // make the width 
    // not the wdith of the div because that won't after\
    myCardImage.src="jsImages/2_of_diamonds.png";
  }else{
    myCard.style.position = ""; //""means use orginal value
    myCard.style.top="";
    myCard.style.left="";
    myCardImage.style.width = "auto";
    myCardImage.src="jsImages/2_of_clubs.png";

  }



}