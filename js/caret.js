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
  function typeIt(from, e) {
    e = e || window.event;
    var w = $("typer");
    var tw = from.value;
    if (!pw) {
      w.innerHTML = newLine(tw);
    }
  }
  
  // Function to move the cursor left or right
  function moveIt(count, e) {
    e = e || window.event;
    var keycode = e.keyCode || e.which;
    if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
      cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
    } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
      cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
    }
  }
  
  // Custom alert function (logs to console)
  function alert(txt) {
    console.log(txt);
  }
  