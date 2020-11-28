"use strict";

var express = require('express');

var mongoose = require('mongoose');

var User = require('./modules/user');

var app = express(); //connect mongoose

mongoose.connect("mongodb://localhost/sample", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  console.log(err ? err : "database connected");
});
app.use(express.json());
app.get('/', function (req, res) {
  res.send("Welcome");
});
app.post('/users', function (req, res) {
  User.create(req.body, function (err, user) {
    console.log(err, user);
  });
});
app.listen(3000, function () {
  console.log('Server listening at port 3000');
});