const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('landing');
});

app.get('/campgrounds', function(req, res) {
	const campgrounds = [
		{
			name: 'Salmon Creek',
			image: 'https://pixabay.com/get/5fe8d143495ab108f5d084609620367d1c3ed9e04e507441772e7fdc9e4dc4_340.jpg'
		},

		{
			name: 'Granite Hill',
			image: 'https://pixabay.com/get/57e0d6424954ac14f6da8c7dda793f7f1636dfe2564c704c7d2d7ad09f44c559_340.jpg'
		},

		{
			name: "Mountain Goat's Rest",
			image: 'https://pixabay.com/get/54e5dd424856ae14f6da8c7dda793f7f1636dfe2564c704c7d2d7ad09f44c559_340.jpg'
		}
	];
	res.render('campgrounds', { campgrounds: campgrounds });
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});
