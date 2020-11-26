let express = require('express');
let mongoose = require('mongoose');


let app = express();

mongoose.connect("mongodb://localhost/sample",
{useUnifiedTopology:true,useNewUrlParser:true},
(err) => {
    console.log(err ? err : "Database connected");
});



app.get('/',(req,res) => {
    res.send("Welcome")
})



app.listen(3000,() => {
    console.log('Server is listening at port 3000');
})