const http = require('http');
const mongoose = require("mongoose");
const User= require("./users");
const Login =require('./login');
const express =require("express");
const app = express();
// const express =require('express');
var bodyPraser = require('body-parser');
var jsonParser=bodyPraser.json();  
const bcrypt =require('bcrypt');



mongoose.connect('mongodb+srv://Devbhatt:xXcI2Vztbc6aeil2@cluster0.s6gdr.mongodb.net/Nodedb?retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true

}
);
// ).then(()=>{console.log("db connection done");
// });
app.get('/login',function(req,res){
    Login.find().then((data)=>{
        res.status(201).json(data);
    })
})
app.post('/login',jsonParser,function(req,res){
    bcrypt.hash(req.body.password,10,(err,hash)=>
    {
        if(err){
            return res.status(500).json({
                error:err
            })         
        }
        else
     {
          const data =new Login({
         _id:new mongoose.Types.ObjectId(),
          username:req.body.username,
          password:req.body.password,
          userType:req.body.userType,

              
       })
            
    data.save().then((result)=>{
        res.status(201).json(result)({
    })
})
.catch((err=>{
    res.status(500).json({
        errpr:err
    })
   
})
)
        }
    })
})

app.post('sing',(req,res,next)=>{
    Login.find({username:req.body.username}).exec().then(Login=>
        {
            if(Login.length< 1){
                return res.status(401).json({
                    meg:'user not exist'
                })
                bcrypt.compare(req.body.password,Login[0].password,(err,result)=>
                {
                    if(! result){
                        return res.status(401).json({
                            meg:'password matching fail'
                        })

                    }
                    if(result){
                        const token=jwt.sing({
                            username:Login[0].username,
                            userType:Login[0].userType,
                        })
                        'this is dummy result'
                    }
                    expiresIn:'24h'
                })
            }
            res.status(200).json({
                username:Login[0].username,
                userType :Login[0].userType,
                token:token
            })
        })
        .catch(err=>{
            res.status(500).json({
                err:err
            })
        })
})
            

app.get('/users',function(req,res){
    User.find().then((data)=>{
        res.status(201).json(data);
    })
})

 app.post('/users',jsonParser,function(req,res){
     const data=new User({
       _id:new mongoose.Types.ObjectId(),
       FirstName:req.body.FirstName,
       LastName:req.body.LastName,
       Pincode:req.body.Pincode,
       Email:req.body.Email,
       Address:req.body.Address,
       Country:req.body.Country
   });
   data.save().then((result)=>{
       res.status(201).json(result) 
}).catch((error)=>console.log(error));

})

app.delete('/users/:id',function(req,res){
    User.deleteOne({_id:req.params.id}).then((result)=>
        {
            res.status(200).json(result);
        }) .catch((err)=>console.log(err))
    })
       
        
    



// User.find({},function(err,users){
//     // console.log(users);

// }).then((users)=>{
    
// }).catch((err)=>
// {
//     console.log(err);
// })


    

// http.createServer(function(req,res){
//     res.write("Server Runnin on port 3001");
//     res.end();

app.listen(3001);