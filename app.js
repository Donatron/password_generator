// This is a simple web app to generate secure passwords
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

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

// GET passwords page
app.get('/passwords', function(req, res, next) {
  res.render('passwords');
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
