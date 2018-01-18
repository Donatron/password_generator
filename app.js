// This is a simple web app to generate secure passwords
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var User = require('./models/user');

// Connect Mongo Database
mongoose.connect('mongodb://localhost:27017/password_generator');
var db = mongoose.connection;

// Handle database connection errors
db.on('error', console.error.bind(console, 'Connection error:'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set template rendering engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// GET index page
app.get('/', function (req, res, next) {
  return res.render('index');
});

// GET about page
app.get('/about', function(req, res, next) {
  res.render('about');
});

// GET sign up page
app.get('/signup', function(req, res, next) {
  res.render('signup');
});

// POST sign up page
app.post('/signup', function(req, res, next) {
  if(req.body.email &&
    req.body.name &&
    req.body.password &&
    req.body.passwordConfirm) {
      if (req.body.password !== req.body.passwordConfirm) {
        var err = new Error('Passwords do not match');
        err.status = 400;
        return next(err);
      }

    // Create user object from form input
    var userData = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    // add UserData to mongo database
    User.create(userData, function(error, user) {
      if (error) {
        return next(error);
      } else {
        return res.redirect('/passwords');
      }
    });

    } else {
    var err = new Error("You must fill in all fields to create an account.");
    err.status = 400;
    return next(err);
  }
});

// GET passwords page
app.get('/passwords', function(req, res, next) {
  res.render('passwords');
});

// GET login page
app.get('/login', function(req, res, next) {
  res.render('login');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// listen on port 3000
app.listen(3000, function () {
  console.log('Password Generator app listening on port 3000');
});
