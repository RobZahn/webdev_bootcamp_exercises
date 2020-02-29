const express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express(),
	uri = require('./config/keys').mongoURI;

//App Config

mongoose
	.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log('Connected to mongoDB'))
	.catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Mongoose/Model Config

const blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

//Routes

app.get('/', function(req, res) {
	res.redirect('/blogs');
});

app.get('/blogs', function(req, res) {
	Blog.find({}, function(err, blogs) {
		if (err) {
			console.log(err);
		} else {
			res.render('index', { blogs: blogs });
		}
	});
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});
