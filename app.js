// This is a simple web app to generate secure passwords
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// GET index page
app.get('/', function (req, res, next) {
  return res.sendFile(__dirname + '/index.html');
});

// listen on port 3000
app.listen(3000, function () {
  console.log('Password Generator app listening on port 3000');
});
