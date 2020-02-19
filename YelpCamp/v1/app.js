const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

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

app.get('/', function(req, res) {
	res.render('landing');
});

app.get('/campgrounds', function(req, res) {
	res.render('campgrounds', { campgrounds: campgrounds });
});

app.post('/campgrounds', function(req, res) {
	const name = req.body.name;
	const image = req.body.image;
	const newCampground = { name: name, image: image };
	campgrounds.push(newCampground);
	res.redirect('/campgrounds');
	//get data from form and add to campgrounds array
	//redirect back to campgrounds page
});

app.get('/campgrounds/new', function(req, res) {
	res.render('new.ejs');
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});
