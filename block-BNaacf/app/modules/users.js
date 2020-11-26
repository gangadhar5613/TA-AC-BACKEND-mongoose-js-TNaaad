let express = require('express');
const { Mongoose } = require('mongoose');

let Schema = Mongoose.Schema;

let userSchema = new Schema({
    village:String,
    city:String,
    pin:Number,
    marks:[Number],
    favorites:[String],
    user:Schema.types.ObjectId
})