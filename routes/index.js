var express = require('express');
var router = express.Router();
var User = require('../models/user');

// GET index page
router.get('/', function (req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

// GET sign up page
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up'});
});

// POST sign up page
router.post('/signup', function(req, res, next) {
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
        req.session.userId = user._id;
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
router.get('/passwords', function(req, res, next) {
  // Check to see if a user is succesfully logged in
  if (!req.session.userId) {
    var err = new Error('You must be signed in to view this page!');
    err.status = 403;
    return next(err);
  }

  // Search mongo for user details
  User.findById(req.session.userId)
    .exec(function( error, user) {
      if (error) {
        return next(error)
      } else {
        return res.render('passwords', { title: 'My Passwords', name: user.name, savedPasswords: user.savedPasswords});
      }
    });
});

// GET login page
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});

// POST log in page
router.post('/login', function(req, res, next) {
  if(req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, function(error, user) {
      if (error || !user) {
        var err = new Error('Wrong email or password');
        err.status = 401;
        return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/passwords');
      }
    });
  } else {
    var err = new Error('Please input both email and password to sign in');
    err.status = 400;
    return next(err);
  }
});

// GET /logout
router.get('/logout', function(req, res, next) {
  if (req.session) {
    //delete the session
    req.session.destroy(function(err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});

// POST /save
router.post('/save', function(req, res, next) {
  if(req.body.description === "" || req.body.url === "") {
    var err = new Error('Please enter a site description and the website URL');
    err.status = 401;
    return next(err);
  } else {

    // Create object with form data
    var passwordData = {
      siteName: req.body.description,
      siteURL: req.body.url,
      sitePassword: req.body.generatedPassword
    };

    User.update(
      { _id: req.session.userId },
      { $push:
        { savedPasswords: {
          passwordData
          }
        }
      }
    );

    res.redirect('passwords');
  }

});


module.exports = router;
