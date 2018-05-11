//Page Elements

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.getElementsByTagName("input")[0];
var goalDisplay = document.querySelector("p span");
//Score variables

var gameOver = false;
var winningScore = 5;
var p1Score = 0;
var p2Score = 0;

//Functions

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}

//Events

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      //Player 1 has won
      p1Display.classList.add("winner");
      gameOver = true;
      console.log("Game Over!");
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      //Player 2 has won
      p2Display.classList.add("winner");
      gameOver = true;
      console.log("Game Over!");
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function() {
  reset();
});

numInput.addEventListener("change", function() {
  winningScore = Number(numInput.value);
  goalDisplay.textContent = winningScore;
  reset();
})
