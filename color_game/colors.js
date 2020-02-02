let numSquares = 6;
let colors = generateColors(numSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickRandomColor();
let colorDisplay = document.getElementById('color-display');
let messageDisplay = document.querySelector('#message');
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let easyBtn = document.querySelector('#easyBtn');
let hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function() {
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	numSquares = 3;
	colors = generateColors(numSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
});

hardBtn.addEventListener('click', function() {
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	numSquares = 6;
	colors = generateColors(numSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
});

resetButton.addEventListener('click', function() {
	//generate new random colors
	colors = generateColors(numSquares);
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;

	for (let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
	//add init colors to squares
	squares[i].style.backgroundColor = colors[i];

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
