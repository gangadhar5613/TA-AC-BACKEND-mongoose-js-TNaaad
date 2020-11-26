let express = require('express');
let mongoose = require('mongoose');



let app = express();

mongoose.connect(" mongodb://localhost/sample",{useNewUrlParser:true,useUnifiedTopology:true},
(err) => {
console.log(err ? err : "Connected to database");
})

app.listen(3000,() => {
    console.log("Server connected")
})