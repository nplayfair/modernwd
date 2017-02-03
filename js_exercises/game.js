// Set number
var secretNumber = 4;

// Get guess and convert to num
var guess = Number(prompt("Guess the number:"));

// Check if guess is right
if (guess === secretNumber) {
	alert("Correct!");
}

// Wrong guess

else if (guess > secretNumber) {
	alert("Too high, guess again.");
}

else {
	alert("Too low, guess again.");
}