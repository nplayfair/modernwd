console.log("Numbers between -10 and 19:\n");

for (var i = -10; i < 20; i++) {
	console.log(i);
}

console.log("\nEven numbers between 10 and 40:\n");

for (var i = 10; i <= 40; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

console.log("\nOdd numbers between 300 and 333:\n");

for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}

console.log("\nAll numbers divisible by 5 and 3 between 5 and 50:\n")

for (var i = 5; i <= 50; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
}




// var i = -10;
// console.log("Task 1\n");
// while (i < 20) {
// 	console.log(i);
// 	i++;
// }

// i = 10;
// console.log("Task 2\n");

// while (i <= 40) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// 	i++;
// }

// console.log("Task 3\n");

// i = 300;

// while (i <= 333) {
// 	if (i % 2 !== 0) {
// 		console.log(i);
// 	}
// 	i++;
// }

// console.log("Task 4\n");

// i = 5;

// while (i <= 50) {
// 	if ((i % 3 === 0 ) && (i % 5 === 0)) {
// 		console.log(i);
// 	}
// 	i++;
// }