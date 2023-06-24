const express  = require("express");
const { HistoryModel } = require("../model/history.model");
const { UserModel } = require("../model/user.model");

const historyRoute = express.Router();

historyRoute.get("/data",(req,res)=>{
    res.send("hello")
})
historyRoute.get("/",async(req,res)=>{
    console.log(req.body)
  try {
    const user = await UserModel.find({_id:req.body.userID});
    if(!user){
        return res.status(400).send({ msg: "User not found" });
    }
    const history = await HistoryModel.find({ userID:req.body.userID});
    res.status(200).send({"msg":"All history" , history})
  } catch (error) {
    console.log(error.message)
    return res.status(400).send({ msg: error.message });
  }
})


module.exports={historyRoute}