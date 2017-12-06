var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  }
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.getUsers = function(callback, limit) {
  User.find(callback).limit(limit);
};

module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

module.exports.updateUser = function(id, user, options, callback) {
  var query = { _id: id };
  var update = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone
  };

  User.findOneAndUpdate(query, update, options, callback);
};

module.exports.addUser = function(user, callback) {
  User.create(user, callback);
};