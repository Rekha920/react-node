const mongoose=require('mongoose');
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');
const Schema=mongoose.Schema;

const userModel=new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
userModel.set('timestamps',true);//automatically creates createdAT and UpdatedAt in each row/documents


userModel.statics.checkEmailExist=async(email)=>{
    const user=await User.findOne({email});
    if(user){
        throw new Error('User Already Exist')
    }
    return user;
}

userModel.statics.findByCredentials=async(email,password)=>{
    const user =await User.findOne({email});
    if(!user)
    {
         throw new Error('Unable to Login.')
    }
    const isMatch=bcrypt.compare(password,user.password);
    if(!isMatch) 
    {throw new Error('Unable to Login.!');}
    const token= jwt.sign({id:user._id,email:user.email,name:user.firstName}, process.env.SECRET, { expiresIn: '1h' });
    return {user,token};
}


const User=mongoose.model('User',userModel);
module.exports=User;