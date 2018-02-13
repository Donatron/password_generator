var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// Create schema for users
var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  savedPasswords: []
});

// autheticate user login against database
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email })
    .exec(function(error, user) {
      if (error) {
        return callback(error);
      } else if (!user) {
        var err = new Error('User not found');
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, function(err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      });
    });
}

UserSchema.statics.changePassword = function(email, newPassword, callback) {
  User.findOne({email: email})
    .exec(function(error, user) {
      if (error) {
        return callback(error);
      } else {
        return callback(null, user);
      }
    })
}

// hash password before saving to database
UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      return next(err);
    } else {
      user.password = hash;
      return next();
    }
  });
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
