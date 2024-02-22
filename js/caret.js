// Shortcut for selecting elements by their ID
function $(elid) {
    return document.getElementById(elid);
  }
  
  var cursor; // Declare the cursor variable
  window.onload = init;

  // Initialize function called when the window loads
  function init() {
    cursor = $("cursor"); // Initialize the cursor variable
    cursor.style.left = "0px"; // Set the initial position of the cursor
  }
  
  // Replace newline characters in a string with an empty string
  function newLine(txt) {
    return txt.replace(/\n/g, '');
  }
  

  // Function to handle typing input
  function typeIt(inputElement) {
    var typerElement = document.getElementById("typer"); // Get the typer element
    var inputValue = inputElement.value; // Get the value of the input element

    if(!pw){
      // Update the content of the typer element with the input value
      typerElement.innerHTML = newLine(inputValue);
    }
  }
  
  // Function to move the cursor left or right
  function moveIt(count, e) {
    var keycode = e.keyCode || e.which;
    // Move cursor left if left arrow key is pressed and within bounds
    if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
      cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } 
    // Move cursor right if right arrow key is pressed and within bounds
    else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
      cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
  }
  
  // Custom alert function (logs to console)
  function alert(txt) {
    console.log(txt);
  }
  
