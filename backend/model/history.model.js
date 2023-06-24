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
  ],
});
const HistoryModel = mongoose.model("history", histroyschema);

module.exports = { HistoryModel };
