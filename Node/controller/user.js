const {User}=require('../model/User');
const {validationResult}=require('express-validator');
const  getUsers=(req,res)=>{
    
res.json("Hello Rekha Dodani..!")
}

const createUser=async(req,res)=>{
   const errors=validationResult(req);
   console.log(errors,"line number 10");
}

module.exports={getUsers,createUser};