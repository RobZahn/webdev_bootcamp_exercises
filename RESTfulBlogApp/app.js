const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	uri = require('./config/keys').mongoURI;

mongoose
	.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log('Connected to mongoDB'))
	.catch((err) => console.log(err));
