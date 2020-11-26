let express = require('express');
const { Mongoose } = require('mongoose');
let Schema = Mongoose.Schema;


let articSchema = new Schema({
    name:String,
    author:String,
    price:Number
})