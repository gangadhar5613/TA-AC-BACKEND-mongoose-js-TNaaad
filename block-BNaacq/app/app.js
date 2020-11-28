let express = require('express');
let mongoose = require('mongoose');
let Article = require('./models/Article');

let app = express();


//connect to mongodb
mongoose.connect("mongodb://localhost/blog",{useNewUrlParser:true,useUnifiedTopology:true},
(err) => {
 console.log(err ? err : "database connected");
})

app.use(express.json());


app.get('/',(req,res) => {
    res.send('welcome');
})

app.put('/article',(req,res) => {
   
  Article.create(req.body,(err,article) => {
    console.log(req.body);
      console.log(err,article);
      res.send(article);
  })
})

app.listen(3000,() => {
    console.log('server listening at the port 3000');
})