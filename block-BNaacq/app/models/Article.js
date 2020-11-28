let mongoose = require('mongoose');

let Schema = mongoose.Schema;




// article schema
let articleSchema = new Schema({
    title:String,
    description:String,
    tags:String,
    author:String,
    
},{timestamps:true});











let Article = mongoose.model('Article',articleSchema);





//exporting schemas


module.exports = Article;





