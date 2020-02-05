const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res) {
	const critter = req.params.animal.toLowerCase();
	const sounds = {
		pig: 'Oink',
		cow: 'Moo',
		dog: 'Woof',
		cat: 'Meow'
	};

	res.send(`The ${critter} says '${sounds[critter]}.'`);
});

app.get('/repeat/:word/:numTimes', function(req, res) {
	const word = req.params.word;
	const numTimes = parseInt(req.params.numTimes);
	display = '';
	for (let i = 0; i < numTimes; i++) {
		display += `${word} `;
	}
	res.send(display);
});

app.get('*', function(req, res) {
	res.send('Sorry, page not found...What are you doing with your life?');
});

app.listen(3000, function() {
	console.log('Server listening on port 3000.');
});
