var fruits = ["Apple", "Banana", "Orange", "Pear"];
var veg = ["Carrot", "Carrot", "Carrot", "Carrot"]


function printReverse(array) {
	var numElements =  array.length -1;
	for (var i = numElements; i >= 0; i--) {
		console.log(i + " " + array[i]);
	}
}

function isUniform(array) {
	var uniform = false;
	var firstElement = array[0];
	array.forEach(function(element) {
		if (element === firstElement) {
			uniform = true;
		} 
		else (uniform = false)
	});
	return uniform;
}

function sumArray(array) {
	var total = 0;
	array.forEach(function(element) {
		total += element;
	});
	console.log(total);
}

function max(array) {
	var max = 0;
	array.forEach(function(element) {
		if (element > max) {
			max = element;
		}
	});
	console.log(max);
}