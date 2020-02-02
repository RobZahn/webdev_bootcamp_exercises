const colors = generateColors(6);

const squares = document.querySelectorAll('.square');
const pickedColor = pickRandomColor();
const colorDisplay = document.getElementById('color-display');
let messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
	//add init colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click', function() {
		let clickedColor = this.style.backgroundColor;

		if (clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	});
}

//changes all squares to correct color
function changeColors(correctColor) {
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = correctColor;
	}
}

function pickRandomColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//returns array of num length containing random colors
function generateColors(num) {
	let arr = [];

	for (let i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

//generates random rgb color
function randomColor() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}
