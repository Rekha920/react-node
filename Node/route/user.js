const express=require('express');
const {check,validateResult}=require('express-validator');
const {getUsers,createUser,loginUser} =require('../controller/user');
const router=express.Router();

router.get("/users",getUsers);
router.post("/users",[
    check('email').isEmail().isLength({min:10,max:30}),
    check('firstName','first name should be 10').isAlpha().isLength({min:3,max:10}),
    check('lastName','last name should be 10').isAlpha().isLength({min:3,max:10}),
    check('contactNumber','contact number should contain 10 digits').isNumeric().isLength({min:10,max:10}),
    check('city','city should be of 50 characters').isAlphanumeric().isLength({min:10,max:50}),
    check('password').isLength({min:7,max:10}),
    check('confirmPassword').isLength({min:7,max:10})
],createUser);

router.post("/login",
[
    check('email').isEmail(),
    check('password')
],loginUser)
module.exports=router