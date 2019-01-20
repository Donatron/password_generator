// This is a simple web app to generate secure passwords
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var app = express();
var User = require("./models/user");
var logger = require("morgan");

app.use(logger("dev"));

// db config
const db = require("./config/keys").mongoUri;

// Connect Mongo Database
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongo DB connected"))
  .catch(err => console.log(err));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set template rendering engine
app.set("view engine", "pug");
app.set("views", __dirname + "/views");

// include routes
var routes = require("./routes/index");
app.use("/", routes);

// serve static files from /public
app.use(express.static(__dirname + "/public"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("File Not Found");
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {}
  });
});

const port = process.env.PORT || 3000;

// listen on port 3000
app.listen(port, function() {
  console.log(`Password Generator listeing on port ${port}`);
});
