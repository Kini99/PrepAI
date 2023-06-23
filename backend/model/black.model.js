const mongoose =require("mongoose")

const blackschema = mongoose.Schema({token:String})

const blackmodel =mongoose.model("black",blackschema)

module.exports={blackmodel}