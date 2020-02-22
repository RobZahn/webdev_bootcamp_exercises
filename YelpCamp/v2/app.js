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

//Schema Setup

const campgroundSchema = new mongoose.Schema({
	name: String,
	image: String
});

const Campground = mongoose.model('Campground', campgroundSchema);

// Campground.create(
// 	{
// 		name: 'Granite Hill',
// 		image: 'https://pixabay.com/get/54e5dc474355a914f6da8c7dda793f7f1636dfe2564c704c7d2d78d6954fc258_340.jpg'
// 	},
// 	function(err, campground) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log('Created New Campground');
// 			console.log(campground);
// 		}
// 	}
// );

app.get('/', function(req, res) {
	res.render('landing');
});

app.get('/campgrounds', function(req, res) {
	// res.render('campgrounds', { campgrounds: campgrounds });
	//Get all campgrounds from db and render
	Campground.find({}, function(err, allCampgrounds) {
		if (err) {
			console.log(err);
		} else {
			res.render('campgrounds', { campgrounds: allCampgrounds });
		}
	});
});

app.post('/campgrounds', function(req, res) {
	const name = req.body.name;
	const image = req.body.image;
	const newCampground = { name: name, image: image };
	// Create new campground and save to DB
	Campground.create(newCampground, function(err, newlyCreated) {
		if (err) {
			console.log(`Something went wrong: ${err}`);
		} else {
			res.redirect('/campgrounds');
		}
	});
});

app.get('/campgrounds/new', function(req, res) {
	res.render('new.ejs');
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});
