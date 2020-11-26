let express = require('express');
const { Mongoose, mongo } = require('mongoose');
let Schema = Mongoose.Schema;





let userSchema = new Schema({
    name: {type:String,required:true},
    age:{type:Number,min:18}
})

let User = Mongoose.model('User',userSchema);