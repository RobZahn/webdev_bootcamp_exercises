// Write a function isEven() that takes in a single number as an argument and returns true
// if the number is even and false otherwise.

function isEven(num) {
	return num % 2 === 0;
}

// console.log(isEven(2)); // true
// console.log(isEven(7)); // false
// console.log(isEven(10)); // true
// console.log(isEven(13)); // false

//#############################################

// Write a function factorial() that takes in a single number as an argument and returns
// the factorial of that number.
// 4! is 4x3x2x1
// 0! is 1

function factorial(num) {
	let result = 1;

	for (let i = num; i >= 1; i--) {
		result *= i;
	}
	return result;
}

// console.log(factorial(5)); // 120
// console.log(factorial(2)); // 2
// console.log(factorial(10)); // 3628800
// console.log(factorial(0)); // 1

// Write a function kebabToSnake() that takes a single kebab-cased string as an argument
// and returns the snake_cased version.

function kebabToSnake(string) {
	return string.replace('-', '_');
}

// console.log(kebabToSnake('hello-world'));
// console.log(kebabToSnake('dogs-are-awesome'));
// console.log(kebabToSnake('blah'));
