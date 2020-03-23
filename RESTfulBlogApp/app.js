const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
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

//RESTful Routes

app.get('/', function(req, res) {
	res.redirect('/blogs');
});

//INDEX

app.get('/blogs', function(req, res) {
	Blog.find({}, function(err, blogs) {
		if (err) {
			console.log('Error!');
		} else {
			res.render('index', { blogs: blogs });
		}
	});
});

//NEW
app.get('/blogs/new', function(req, res) {
	res.render('new');
});

//CREATE
app.post('/blogs', function(req, res) {
	Blog.create(req.body.blog, function(err, newBlog) {
		if (err) {
			res.render('new');
		} else {
			res.redirect('/blogs');
		}
	});
});

//SHOW

app.get('/blogs/:id', function(req, res) {
	res.send('Show page');
});

app.listen(3000, function() {
	console.log('Server listening on port 3000');
});
