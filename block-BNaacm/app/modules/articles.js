let express = require('express');
const { Mongoose } = require('mongoose');

let Schema = Mongoose.Schema;


let articleSchema = new Schema({
    title:{type:String,minlenght:20},
    description:{type:String,minlenght:30,maxlenght:100},
});


module.exports = Mongoose.model('Article',articleSchema);