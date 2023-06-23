const mongoose=require("mongoose")
const userschema = mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
    resetToken:String,
    expireToken:{
        type:Date
    },
    date:{
        type:Date,
        default:Date.now
    }

})
const UserModel =mongoose.model("user",userschema)

module.exports={ UserModel}