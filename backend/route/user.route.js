const express = require("express")
const {UserModel}=require("../model/user.model")
const jwt = require("jsonwebtoken")
const {auth}=require("../auth/auth")
const nodemailer = require("nodemailer");
require("dotenv").config()
const crypto =require("crypto")
const {blackmodel}=require("../model/black.model")
const bcrypt = require("bcrypt")
const Userroute = express.Router()


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "guptamanshi606@gmail.com",
      pass: "pecdubvwywqpctqk",
    },
  });

Userroute.post("/signup",async (req,res)=>{
    const{ name, email, phone, password}=req.body

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



// Userroute.get("/refreshtoken "(req,res)=>{
//     try {
//         const refresh=req.
        
//     } catch (error) {
//         return res.status(400).send({msg:error.message}) 
//     }
// })




Userroute.get("/logout",async(req,res)=>{

    let token = req.headers.authorization?.split(" ")[1]
let black =new blackmodel({token})
await black.save()
res.send({msg:"logout done"})
    
    })

Userroute.post('/forget/pass',async(req,res)=>{
    try {
        crypto.randomBytes(32,(err,Buffer)=>{
            if(err){
                console.log(err.msg)
            }

             else{
                const token =Buffer.toString('hex')
                UserModel.findOne({email:req.body.email}).then(user=>{
                    if(!user){
                        return res.status(400).json({msg:[{msg:'please Enter calid email'}]})
                    }
                    user.resetToken=token
                    user.expireToken =Date.now()+36000
                   
                    user.save().then((result)=>{
                        transporter.sendMail({
                            from: "guptamanshi606@gmail.com",
                            to:user.email ,
                            subject: "password  from fitindia",
                            text: "welcome to manshigupta from manshu sucessfully login",
                            html:`<a href="http://localhost:1111/new-password/${token}">to reset pass</a>`
                        },(err,info)=>{
                            if(err){
                                res.json(err)
                            }else{
                                res.json({msg:'mail send:'+info.response})
                            }
                        })
                        // res.json('mailsend')
                    })
                })
             }
        })
    } catch (err) {


        console.log(err);
        res.status(500).send("err")
        
    }
})


// Userroute.post('/new/password', async(req,res)=>{
//     const newPassword = req.body.password;
//     const sendToken =req.body.token;
//    UserModel.findOne({resetToken: sendToken, expireToken: {$gt: Date.now()}}).then(user =>{
//         if (!user){
//             return res.status(400).json({msg: [{msg: 'try again expire'}]});
//         }
//         bcrypt.hash(newPassword, 6).then(hashedpassword =>{
//          user.password=hashedpassword,
//          console.log(hashedpassword)
//             user.resetToken=undefined,
//             user.expireToken=undefined,
//             user.save().then((saveUser)=>{
//                 res.json({msg:[{msg:"password change"}]})
//             })

//         })
//     })
// })





module.exports={Userroute}