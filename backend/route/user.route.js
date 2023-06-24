const express = require("express")
const {UserModel}=require("../model/user.model")
 const jwt = require("jsonwebtoken")

require("dotenv").config()
const {blackmodel}=require("../model/black.model")
 const bcrypt = require("bcrypt")
const Userroute = express.Router()




Userroute.post("/signup",async (req,res)=>{
    const{ name, email, phone, password}=req.body

    const passwordReq =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordReq.test(password)) {
    return res.status(200).json({
      msg: "Invalid password format! Password format Should contain atleast one uppercase character, one number, special character and length greater then 8.",
    });
  }

    const user =await UserModel.find({email})
    if(user.length<=0){
        try{
            bcrypt.hash(password,6,async(err,hash)=>{
                if(err){
                    res.send({msg:"somthing went wrong"})
                }else{
                    const user = new UserModel({
                     name, 
                     email,
                     phone,
                      password:hash})

                      await user.save();
                      res.send({msg:"New user has been signup"})

                }
            })
        }catch(err){
            res.send({ msg: "Something went Wrong", err: err.message });  
        }
    }else{
            res.send({ msg: "User already exist, please login" });
        }
    
})


Userroute.post("/login", async(req,res)=>{
    const {email,password}=req.body
    try {

        const user = await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    const token =jwt.sign({userid:user[0]._id},"fitindia")

                    res.send({ msg: " user has been Logged in ", token: token });
                }
            })
        }else{
            res.send({ msg: "Wrong credentials" }); 
        }
        
    } catch (error) {
        res.send({ msg: "Something went wrong", error: error.message });
    }
})








Userroute.get("/logout",async(req,res)=>{

    let token = req.headers.authorization?.split(" ")[1]
let black =new blackmodel({token})
await black.save()
res.send({msg:"logout done"})
    
    })










module.exports={Userroute}