var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function() {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

    reset();
  });
}

function reset() {
  //generate all new colours
  colors = generateRandomColors(numSquares);
  //pick new random colour
  pickedColor = pickColor();
  //change colordisplay to match
  colorDisplay.textContent = pickedColor;
  //change square colours
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  //reset header background
  h1.style.backgroundColor = "steelblue";
  //change button text
  resetButton.textContent = "New colours";
  //reset messageDisplay
  messageDisplay.textContent = "";
}

//button events

resetButton.addEventListener("click", function() {
  reset();
});

//display which colour to guess
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
      h1.style.backgroundColor = clickedColor;
      //change reset button text
      resetButton.textContent = "Play again?";
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
