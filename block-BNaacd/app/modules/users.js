let express = require('express');
const { Mongoose } = require('mongoose');
let Schema = Mongoose.Schema;


let userSchema = new Schema ({
    name: {type:String,lowercase:true},
    email:{type:String,lowercase:true},
    age:{type:Number,default:0}
})