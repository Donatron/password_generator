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
  }
});

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
