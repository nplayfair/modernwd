//Page Elements

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

//Score variables

var gameOver = false;
var winningScore = 5;
var p1Score = 0;
var p2Score = 0;

//Events

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
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
      gameOver = true;
      console.log("Game Over!");
    }
    p2Display.textContent = p2Score;
  }
});
