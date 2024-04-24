const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    sender:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    },
    receiver:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    },
    grupo:{
        type:mongoose.Types.ObjectId,
        ref:"Grupos"
    },
    content:{
        type:String
    },
    seen:{
        type:Boolean,
        default:false
    }
    
})

module.exports = mongoose.model("Message", messageSchema)