let express = require('express');
const { Mongoose } = require('mongoose');

let Schema = Mongoose.Schema;

let userSchema = new Schema({
    name:{type:String},
    email:{type:String,lowercase},
    age:{type:Number,default:0},
    password:{type:String,minlenght:5},
    createdAt:{type:Date,default:new Date()},
    favorites:{type:[String]}
},{timestamps:true});



let User = Mongoose.model('User',userSchema);

module.exports = User;