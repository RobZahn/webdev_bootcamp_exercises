const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const uri = require('./config/keys').mongoURI;

mongoose
	.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const campgrounds = [
	{
		name: 'Salmon Creek',
		image: 'https://pixabay.com/get/50e9d4474856b108f5d084609620367d1c3ed9e04e507441772c79d6954ac5_340.jpg'
	},

	{
		name: 'Granite Hill',
		image: 'https://pixabay.com/get/54e5dc474355a914f6da8c7dda793f7f1636dfe2564c704c7d2d78d6954fc258_340.jpg'
	},

	{
		name: "Mountain Goat's Rest",
		image: 'https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2d78d6954fc258_340.jpg'
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
