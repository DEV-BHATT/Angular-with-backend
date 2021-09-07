const mongooes =require('mongoose');
let loginSchema =new mongooes.Schema({
    _id:mongooes.Schema.Types.ObjectId,
    username:String,
    password:String,
    userType:String
    


    });
    module.exports=mongooes.model('logins',loginSchema);