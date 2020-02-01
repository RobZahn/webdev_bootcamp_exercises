const colorButton = document.querySelector('button');
const body = document.querySelector('body');

// colorButton.addEventListener('click', function() {
// 	body.style.background = body.style.background === 'white' ? 'purple' : 'white';
// });

colorButton.addEventListener('click', function() {
	body.classList.toggle('purple');
});
