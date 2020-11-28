

let mongoose = require('mongoose');

let Schema = mongoose.Schema;






//comment schema
let commentSchema = new Schema({
    content:{type:string},
    author:Schema.Types.ObjectId,
    article:{type:string}
},{timestamps:true});




let Comment = mongoose.model('Comment',commentSchema);

module.exports = Comment;