const express = require("express");
const app = express();
const passport = require("passport");
const { connection } = require("./db");
const { Userroute } = require("./route/user.route");
const { HistoryModel } = require("./model/history.model");
const { auth } = require("./auth/auth");
require("./google.oauth");
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());

const { googleAuthentication } = require("./google.oauth");

app.use("/", Userroute);

//===================google===============================================================================

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  googleAuthentication
);
// ***********************************************************************************

const { Configuration, OpenAIApi } = require("openai");
const { UserModel } = require("./model/user.model");

const openAI = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

let conversationHistory = [];

const generateSystemPrompt = (field) => {
  return {
    role: "system",
    content: `You are an interviewer. Ask me 3 questions related to ${field}, one after the other. You should go to the next question only after I give an answer to the already asked question. Give me feedback at the end and give me rating out of 10 `,
  };
};

app.post("/chatPrompt", async (req, res) => {
  const { field, prompt } = req.body;
  conversationHistory.push(generateSystemPrompt(field));
  conversationHistory.push({
    role: "assistant",
    content: "Great, let's start the interview",
  });

  conversationHistory.push({ role: "user", content: prompt });

  if (conversationHistory.length === 5) {
    conversationHistory.push({
      role: "system",
      content: "Please provide your feedback and rating for the interview.",
    });
    conversationHistory.push({ role: "assistant", content: "" }); // Add an empty response for the assistant to fill

    return res.status(200).send({ status: 200, res: "", bot: "" });
  }

  const response = await openAI.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: conversationHistory,
    max_tokens: 100,
  });

  const reply = response.data.choices[0].message.content.trim();

  if (reply) {
    conversationHistory.push({ role: "assistant", content: reply });

    return res.status(200).send({ status: 200, res: reply, bot: reply });
  }

  return res.status(500).send({ status: 500, res: "Try again later" });
});

// console.log(conversationHistory);

app.get("/conversation", (req, res) => {
  res.status(200).send(conversationHistory);
});
app.use(auth);

app.post("/posthistory", async (req, res) => {
  let obj = {};
  obj.userID = req.body.userid; // Corrected key name

  // Make sure to import the correct model name
  try {
    const user = await UserModel.findById({ _id: req.body.userid }); // Corrected model name
    console.log(user);
    if (!user) {
      return res.send({ msg: "User not found" });
    }
    console.log(conversationHistory);
    obj.conversationHistory = conversationHistory;
    const history = new HistoryModel(obj);
    await history.save();
    return res.json(history);
  } catch (error) {
    return res.send({ msg: "Something went wrong", error: error.message }); // Corrected error variable name
  }
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`server is running at port ${process.env.port} `);
});
