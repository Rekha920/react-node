const {User}=require('../model/User');

const  getUsers=(req,res)=>{
    
res.json("Hello Rekha Dodani..!")
}

const createUser=async(req,res)=>{
    console.log(req.body)
}

module.exports={getUsers,createUser};