let express = require('express');
const { Mongoose } = require('mongoose');

let Schema = Mongoose.Schema;

let addressSchema = new Schema({
    village:{type:String},
    city:{type:String,required},
    state:{type:String,required},
    pin:{type:Number},
    user:Schema.types.objectId
},{timestamps:true});


let Address = Mongoose.model('Address',addressSchema);

module.exports(Address);