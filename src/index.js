const express = require('express');
const app = express();
const user=[];

app.get('/', function(req,res){
   res.send("Hello World!");
})
app.get('/users', function(req,res){
    res.send(user);
 })

 app.post('/users',function(req,res){
     user.push(req.body);
     user = [
         {id:0}
     ]
 })

 app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message:'got one user',
        user: req.params.id
    })
})


app.listen(3000,function(){
    console.log("server is running")
    })