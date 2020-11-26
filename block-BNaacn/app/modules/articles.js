let express = require('express');
const { Mongoose } = require('mongoose');
let Schema = Mongoose.Schema;

let articleSchema = new Schema({
    title:{type:String},
    description:{type:String},
    tags:[String],
    createAt:{type:Date,default:new Date()},
    likes:{type:Number,default:0}
});



let Article = Mongoose.model('Article',articleSchema);

module.exports = Article;