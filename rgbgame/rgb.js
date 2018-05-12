var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

//Set square colors and events

for (var i = 0; i < squares.length; i++) {
  //Add initial colors
  squares[i].style.backgroundColor = colors[i];
  //Add listeners
  squares[i].addEventListener("click", function() {
    //Get color of clicked square
    var clickedColor = this.style.backgroundColor;
    //Compare color to pickedColor
    if (clickedColor === pickedColor) {
      //Correct
      messageDisplay.textContent = "Correct!";
      changeColors(pickedColor);
    }
    else {
      //Incorrect
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });

}

function changeColors(color) {
  //Loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //Change square to given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(numColors) {
  //Add numColors colors to array
  var arr = [];

  for (var i = 0; i < numColors; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return array
  return arr;
}

function randomColor() {
  //pick red value from 0-255
  var r = Math.floor(Math.random() * 256);
  //pick green value from 0-255
  var g = Math.floor(Math.random() * 256);
  //pick blue value from 0-255
  var b = Math.floor(Math.random() * 256);

  //return rgb string
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
