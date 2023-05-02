const mongoose=require('mongoose');

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

const user=mongoose.model('User',userModel);

module.exports=user;