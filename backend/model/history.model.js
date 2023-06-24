const mongoose = require("mongoose");
const histroyschema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  conversationHistory: [
    {
      role: { type: String, required: true },
      content: { type: String, required: true },
    },
    { _id: false },
  ],
  title:"String",
  type:"String",
  field:"String",
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
const HistoryModel = mongoose.model("history", histroyschema);

module.exports = { HistoryModel };
