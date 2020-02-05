const express = require('express');
const app = express();

// takes path and callback as args
// req is an object containing all the info about the request that was made
// res is an object containing all the info about the response that will be made
app.get('/', function(req, res) {
	res.send('Hi there!');
});

app.get('/bye', function(req, res) {
	res.send('Goodbye! :(');
});

app.get('/dog', function(req, res) {
	console.log('Someone made a get request to /dog.');
	res.send('MEOW ^_^');
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});
