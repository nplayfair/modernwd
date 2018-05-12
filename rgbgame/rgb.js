var colors = ["rgb(255, 0, 0)",
              "rgb(255, 255, 0)",
              "rgb(0, 255, 0)",
              "rgb(0, 255, 255)",
              "rgb(0, 0, 255)",
              "rgb(255, 0, 255)"
            ];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
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
    }
    else {
      //Incorrect
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });

}
