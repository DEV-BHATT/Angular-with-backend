const mongooes =require('mongoose');
let userSchema =new mongooes.Schema({
    _id:mongooes.Schema.Types.ObjectId,
    FirstName:String,
    LastName:String,
    Pincode:String,
    Email:String,
    Address:String,
    Country:String


    });
    module.exports=mongooes.model('users',userSchema);
