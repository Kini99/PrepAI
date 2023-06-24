const express = require("express");
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { blackmodel } = require("../model/black.model");
const bcrypt = require("bcrypt");
const Userroute = express.Router();


// Userroute.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   const user = await UserModel.find({ email });
//   if (user.length <= 0) {
//     try {
//       bcrypt.hash(password, 6, async (err, hash) => {
//         if (err) {
//           res.send({ msg: "somthing went wrong" });
//         } else {
//           const user = new UserModel({
//             name,
//             email,
//             password: hash,
//           });

//           await user.save();
//           res.send({ msg: "New user has been signup" });
//         }
//       });
//     } catch (err) {
//       res.send({ msg: "Something went Wrong", err: err.message });
//     }
//   } else {
//     res.send({ msg: "User already exist, please login" });
//   }
// });

Userroute.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  // Regular expression to validate password
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      if (passwordRegex.test(password)) {
        bcrypt.hash(password, 5, async (err, hash) => {
          const newUser = new UserModel({ name, email, password: hash });
          await newUser.save();
          res.status(200).send({ message: "Registration successful" });
        });
      } else {
        res
          .status(400)
          .send({
            message:
              "Password should have a minimum length of 8 and contain at least one uppercase letter, one symbol, and one number",
          });
      }
    } else {
      res.status(400).send({ message: "There’s already an account with that email" });
    }
  } catch (error) {
    console.log(error.message)
    res.status(400).send({ message: error.message });
  }
});


Userroute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({userID:user[0]._id}, process.env.TOKENKEY,{expiresIn:"7d"})
          const refreshToken = jwt.sign({userID:user[0]._id},process.env.REFRESHTOKENKEY,{expiresIn:"28d"})

          res.send({ msg: " user has been Logged in ", token: token, user });
        }
      });
    } else {
      res.send({ msg: "Wrong credentials" });
    }
  } catch (error) {
    res.send({ msg: "Something went wrong", error: error.message });
  }
});

Userroute.get("/logout", async (req, res) => {
  let token = req.headers.authorization?.split(" ")[1];
  let black = new blackmodel({ token });
  await black.save();
  res.send({ msg: "logout done" });
});

module.exports = { Userroute };
