// require necessary dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var app = express();

//
app.use(cors());
app.use(express.static(__dirname +'/client'));
app.use(bodyParser.json());

// get models
User = require('./models/user');

// connect to database
mongoose.connect('mongodb://localhost:27018/mongodb', {
  useMongoClient: true,
});
var db = mongoose.connection;

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// get a set of users
app.get('/api/users', function(req, res) {
  User.getUsers(function(err, users) {
    if(err) {
      throw err;
    }

    res.json(users);
  });
});

// add a user
app.post('/api/users', function(req, res) {
  var user = req.body;
  User.addUser(user, function(err, user) {
    if(err) {
      throw err;
    }

    res.json(user);
  });
});

app.listen(3000);
console.log('App running on port 3000...');
