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

}