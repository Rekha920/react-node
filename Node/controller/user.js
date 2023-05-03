const User = require("../model/User");
const Token = require("../model/token.model");
const { validationResult } = require("express-validator");
const sendMail = require("../utils/nodeMailer");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
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
        password: hashPassword,
        contactNumber,
        city,
      });
      const saveUserDetails = await userDetails.save();
      const token = jwt.sign(
        {
          id: saveUserDetails._id,
          email: saveUserDetails.email,
          name: saveUserDetails.firstName,
        },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
      res.json({
        status: 200,
        message: "User Details Saved Successfully",
        data: {
          userId: saveUserDetails._id,
          token: token,
          email: saveUserDetails.email,
        },
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

const loginUser = async (req, res) => {
  try {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({
        error: errors.message,
      });
    }
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    res.json({
      status: 200,
      data: user.user,
      token: user.token,
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: error.message,
    });
  }
};

const resetPasswordRequest = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User Doesnt Exist");
    }
    const token = await Token.findOne({ userId: user._id });
    if (token) {
      await token.deleteOne();
    }
    let resetToken = crypto.randomBytes(20).toString("hex");
    const hash = bcrypt.hash(resetToken, Number(process.env.SALTROUNDS));
    console.log(hash);
    console.log(user._id, "line number 106");
    const uuserToken = await new Token({
      userId: user._id,
      token: resetToken,
      date: Date.now(),
    }).save();
    const link = `localhost:3001/resetPassword?token=${resetToken}&id=${user._id}`;
    console.log(link, "link");
    // Claim.findOne({_id : claimId}).populate({path: 'billed_insurances'})
    // const data=await Token.findOne({_id:uuserToken._id}).populate({path:"userId"});
    //  console.log("line number",data);
    //user.email,"Password Reset Request",{name: user.name,link: link,}
    const data = await sendMail(user.email, "Password Reset Request", {
      name: user.firstName,
      link: link,
    });
   res.json({
    data:data
   })
  } catch (error) {
    console.log(error);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    const { token, userId } = req.params;
    console.log(typeof token,token)
    const tokenFetched = await Token.findOne({ token:token });
    console.log(tokenFetched,typeof tokenFetched.token)
    if (!tokenFetched) {
      throw new Error("Invalid Or Token Expired..!");
    }
    const validToken =token== tokenFetched.token;
    if (!validToken) {
      throw new Error("Invalid Or Expired request Token");
    }
    const hash = await bcrypt.hash(password, Number(process.env.SALTROUNDS));

    await User.updateOne(
      { _id: userId },
      {
        $set: {
          password: hash,
        },
      },
      { new: true }
    );
    const user = await User.findById({ _id: userId });
    await tokenFetched.deleteOne();
    res.json({
      data: user,
      message: "Password updated successfully",
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
  resetPasswordRequest,
  resetPassword,
};
