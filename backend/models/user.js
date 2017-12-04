var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.getUsers = function(callback, limit) {
  User.find(callback).limit(limit);
};

module.exports.addUser = function(user, callback) {
  User.create(user, callback);
};