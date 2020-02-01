const p1Button = document.querySelector('#p1');
let p1Display = document.querySelector('#p1Display');
let p1Score = 0;

const p2Button = document.querySelector('#p2');
let p2Display = document.querySelector('#p2Display');
let p2Score = 0;

let gameOver = false;
let winningScore = 5;
let numInput = document.querySelector('input');
let winningScoreDisplay = document.querySelector('#target-score');

const resetButton = document.querySelector('#reset');

p1Button.addEventListener('click', function() {
	if (!gameOver) {
		p1Score++;
		console.log(p1Score, winningScore);
		if (p1Score === winningScore) {
			p1Display.classList.toggle('winner');
			p2Display.classList.toggle('loser');
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener('click', function() {
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			p2Display.classList.toggle('winner');
			p1Display.classList.toggle('loser');
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener('click', function() {
	reset();
});

function reset() {
	p1Score = 0;
	p1Display.textContent = 0;
	p1Display.classList.remove('winner');
	p1Display.classList.remove('loser');
	p2Score = 0;
	p2Display.textContent = 0;
	p2Display.classList.remove('winner');
	p2Display.classList.remove('loser');
	gameOver = !gameOver;
}

numInput.addEventListener('change', function() {
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
	reset();
});
