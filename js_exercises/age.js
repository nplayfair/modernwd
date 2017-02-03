var age = prompt("Please enter your age:");

// Check age
if (age < 0) {
	alert("Error: You can't be less than 0 years old!");
}
else if (age == 21) {
	alert("Happy 21st Birthday!");
}

if (age % 2 != 0) {
	alert("Your age is odd");
}

ageRoot = Math.sqrt(age);

if (Math.round(ageRoot) - ageRoot == 0) {
	alert("Perfect square!");
}