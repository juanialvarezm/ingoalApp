const mongoose = require("mongoose")

const teamSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    alias:{
        required:false,
        type:String
    },
    logo:{
        type:String
    },
    followers:[{
        type:Array
    }],
    isVerified:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("Teams", teamSchema)