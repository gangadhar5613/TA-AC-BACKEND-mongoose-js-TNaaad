let express = require('express');
let mongoose = require('mongoose');
let User = require('./modules/user');

let app = express();

//connect mongoose

mongoose.connect("mongodb://localhost/sample",
{useNewUrlParser:true,useUnifiedTopology:true},
(err) => {
    console.log(err ? err : "database connected")
});

app.use(express.json());

app.get('/',(req,res) => {
    res.send("Welcome")
})

app.post('/users',(req,res) => {
    User.create(req.body,(err,user) => {
        console.log(err,user);
        
    })
});

app.get('/users/:id',(req,res) => {
    let id = req.params.id;
    console.log(id);
    // console.log(User.findById(id));
  User.findById(id,(err,user) => {
      console.log(err);
      res.json(user);
  })
});

app.put('/users/:id',(req,res) => {
    let id = req.params.id;
    console.log(id);
    User.findByIdAndUpdate(id,req.body,{new:true}, (err,updatedUser) => {
      if(err) return next(err);
      res.json(updatedUser)
    })
})
app.delete('/users/:id',(req,res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id,(err,user) => {
        if(err) return next (err);
        res.send(`${User.findById(id)} is deleted successfully`)
    })
})

//checking the database data
   // use sample
   // db.users.find().pretty() // this will give us the data here.

//

app.use((err,req,res,next) => {
    res.send(err);
})

app.listen(3000,() => {
    console.log('Server listening at port 3000');
})
