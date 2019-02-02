// This is a simple web app to generate secure passwords
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var app = express();
var logger = require("morgan");

app.use(logger("dev"));

// db config
const db = require("./config/keys").mongoUri;

// Connect Mongo Database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo DB connected"))
  .catch(err => console.log(err));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// include routes
var routes = require("./routes/index");
app.use("/", routes);

// serve static files from /public
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 8000;

// listen on port 8000
app.listen(port, function() {
  console.log(`Password Generator listening on port ${port}`);
});
