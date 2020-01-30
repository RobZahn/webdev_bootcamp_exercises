// Write a function printReverse that takes in an array as an argument
// and prints out the elements in reverse order.

function printReverse(array) {
	for (let i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

// printReverse([ 1, 2, 3, 4, 5 ]);
// printReverse([ 'a', 'b', 'c' ]);

// Write a function isUniform() that takes in an array as an argument
// and returns true if all elements in the array are identical.

function isUniform(array) {
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i] !== array[i + 1]) return false;
	}
	return true;
}

// isUniform([ 1, 1, 1, 1 ]); // true
// isUniform([ 2, 1, 1, 1 ]); // false
// isUniform([ 'a', 'b', 'p' ]); // false
// isUniform([ 'b', 'b', 'b' ]); // true

// Write a function sumArray() that takes in an array of numbers as an argument and
// returns the sum of all the numbers in the array.

function sumArray(numsArr) {
	let sum = 0;

	numsArr.forEach(function(num) {
		sum += num;
	});
	return sum;
}

// Write a function max() that takes in an array of numbers as an argument and
// returns the maximum number in the array.

function max(numsArr) {
	let largestNum = numsArr[0];

	for (let i = 0; i < numsArr.length; i++) {
		if (numsArr[i] < numsArr[i + 1]) {
			largestNum = numsArr[i + 1];
		}
	}
	return largestNum;
}
