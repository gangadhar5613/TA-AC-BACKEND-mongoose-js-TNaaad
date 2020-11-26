let express = require('express');
let mongoose = require('mongoose');

let app = express();

mongoose.connect(" mongodb://localhost/sample",
{useNewUrlParser:true,useUnifiedTopology:true},
(err) => {
    console.log(err ? err : "Database Connected");
});



app.listen(3000,() => {
    console.log('Server listening at the port 3000')
})