const express =require("express");
const router = express.Router();
const User = require('../users');
const mongoose = require('mongoose');
router.get('/',(req,res)=> {
    res.status(200).json({
        msg:"this is user get request"
    })

})
