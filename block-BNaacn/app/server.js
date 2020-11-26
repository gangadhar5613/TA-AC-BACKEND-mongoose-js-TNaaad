//requires

let express = require('express');
let mongoose = require('mongoose');


//creating server

let app = express();


//connect database with mongodb with mongoose

mongoose.connect("mongodb://localhost/sample",
{useUnifiedTopology:true,useNewUrlParser:true},
(err) => {
    console.log(err ? err : "Database connected");
});



//server listening

app.listen(3000,() => {
    console.log('Server started and listening at port 3000');
})
