let express = require('express');
let mongoose = require('mongoose');

let app = express();

mongoose.connect("mongodb://localhost",{useNewUrlParser:true,useUnifiedTopology:true}, (err) => {
    console.log(err ? err : "database connected");
})






app.listen(3000,() => {
    console.log('Server is listening at port 3000');
})