const express  = require("express");
const { HistoryModel } = require("../model/history.model");
const { UserModel } = require("../model/user.model");

const historyRoute = express.Router();


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

historyRoute.get("/feedback/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Find the history document by ID
    const history = await HistoryModel.findById({_id:id});

    if (!history) {
      return res.status(404).json({ error: "History not found" });
    }

    // Get the last conversation history entry
    const feedbackEntry = history.conversationHistory[history.conversationHistory.length - 1];
   console.log(feedbackEntry.content)
    // Extract feedback and score from the content
   let text = feedbackEntry.content
    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});



historyRoute.get("/:id",async(req,res)=>{
try {
  const {id}=req.params;
  const user = await UserModel.find({_id:req.body.userID});
  if(!user){
      return res.status(400).send({ msg: "User not found" });
  }
    const singleInterview = await HistoryModel.find({_id:id});
    if(!singleInterview){
        return res.status(400).send({ msg: "Interview not found" });
    }
    res.status(200).send({"msg":"Interview Details" , singleInterview})
} catch (error) {
  console.log(error.message)
  return res.status(400).send({ msg: error.message });
}
})

module.exports={historyRoute}