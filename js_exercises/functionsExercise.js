function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
	else 
		return false;
}


function factorial(num) {
	var factorialNum = 1;
	for (var i = num; i > 0; i--) {
		factorialNum *= i;
	}
	return factorialNum;
}


function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}