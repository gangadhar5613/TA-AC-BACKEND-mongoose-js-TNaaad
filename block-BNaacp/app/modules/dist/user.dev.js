"use strict";

var express = require('express');

var _require = require('mongoose'),
    Mongoose = _require.Mongoose;

var Schema = Mongoose.Schema;
console.log(Schema); // let userSchema = new Schema({
//     name:String,
//     email:String,
//     sports:[String],
// });
// // let User = Mongoose.model('User',userSchema);
// // module.exports = User;