let express = require('express');
const { Mongoose } = require('mongoose');

let Schema = Mongoose.Schema;

let userSchema = new Schema({
    password:{type:String,minlength:5,maxlength:10},
    createAt: {type:Date,default:new Date()}
})