
let mongoose = require('mongoose');

let Schema = mongoose.Schema;










//user schema
let userSchema = new Schema({
    name:{type:string},
    email:{type:string},
    age:{type:Number}
},{timestamps:true});


let User = mongoose.model('User',userSchema);


module.exports = User;
