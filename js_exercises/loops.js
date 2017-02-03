var i = -10;
console.log("Task 1\n");
while (i < 20) {
	console.log(i);
	i++;
}

i = 10;
console.log("Task 2\n");

while (i <= 40) {
	if (i % 2 === 0) {
		console.log(i);
	}
	i++;
}

console.log("Task 3\n");

i = 300;

while (i <= 333) {
	if (i % 2 !== 0) {
		console.log(i);
	}
	i++;
}

console.log("Task 4\n");

i = 5;

while (i <= 50) {
	if ((i % 3 === 0 ) && (i % 5 === 0)) {
		console.log(i);
	}
	i++;
}