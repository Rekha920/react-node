const User = require("../model/User");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const getUsers = (req, res) => {
  res.json("Hello Rekha Dodani..!");
};

const createUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      city,
      contactNumber,
    } = req.body;
    if (!errors.isEmpty()) {
      res.json({
        error: errors.message,
      });
    }
    //check If email already exist
    await User.checkEmailExist(email);
    const salt = parseInt(process.env.SALTROUNDS);
    const hashPassword = await bcrypt.hash(password, salt);
    if (password === confirmPassword) {
      const userDetails = new User({
        firstName,
        lastName,
        email,
        password:hashPassword,
        contactNumber,
        city,
      });
      const saveUserDetails = await userDetails.save();
      res.json({
        status: 200,
        message: "User Details Saved Successfully",
        data: saveUserDetails,
      });
    } else {
      res.json({
        status: 404,
        message: "Password Mismatch",
      });
    }
  } catch (error) {
    res.json({
      status: 404,
      message: error.message,
    });
  }
};

const loginUser=async (req,res)=>{
   try {
    console.log(req.body);
      const errors=validationResult(req);
      if(!errors.isEmpty()){
         res.json({
            error: errors.message,
         })
      }
      const {email,password}=req.body;
      const user=await User.findByCredentials(email,password);
     res.json({
      status:200,
      data:user.user,
      token:user.token
     })
   } catch (error) {
      console.log(error);
      res.json({
        error:error.message
      })
   }
}


module.exports = { getUsers, createUser,loginUser };
