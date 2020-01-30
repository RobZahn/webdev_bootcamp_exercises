let answer = prompt('Are we there yet?');

while (
	answer.indexOf('yes') === -1 &&
	answer.indexOf('yeah') === -1 &&
	answer.indexOf('yup') === -1 &&
	answer.indexOf('yep') === -1
) {
	answer = prompt('Are we there yet?');
}

alert('Yay we made it!');
