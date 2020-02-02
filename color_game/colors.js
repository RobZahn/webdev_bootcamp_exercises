let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('color-display');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

init();

function init() {
	setModeButtons();
	configSquares();
	reset();
}

// listener logic for mode buttons
function setModeButtons() {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener('click', function() {
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');

			this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
			reset();
		});
	}
}

function configSquares() {
	for (let i = 0; i < squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener('click', function() {
			let clickedColor = this.style.backgroundColor;

			if (clickedColor === pickedColor) {
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = 'Play Again?';
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				resetButton.textContent = 'New Colors';
				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

function reset() {
	colors = generateColors(numSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = '';
	resetButton.textContent = 'New Colors';

	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
	h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function() {
	reset();
});

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
