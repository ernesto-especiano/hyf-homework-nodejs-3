const express = require('express');
const app = express();
var user=[];

app.get('/', function(req,res){
   res.send("Hello World!");
})
app.get('/users', function(req,res){
    res.send(user);
 })

 app.post('/user',function(req,res){
     user.push(req.body);
     res.status(200).json({user});
     user = [
         {id:0}
     ]
 })

 app.get('/user/:id',function(req,res){
     const users= user.find(us => us.id == req.params.id);
    //console.log(req.params.id)
    res.json({
        id:0
    });
})

app.delete('/user/:id',function(req,res){
 const users= user.find(us=> us.id == req.params.id);
 if(users){
    res.status(202).json({
        success:true,
        message: 'User Exist',
        id:0
    });
    user.pop();
    
 }else{
    res.status(204).json({
        success:false,
        message: 'User Not Exist'
        
    })

 }


})
app.listen(3000,function(){
    console.log("server is running")
    })