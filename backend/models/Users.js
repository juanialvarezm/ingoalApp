const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "a name is required"],
    },
    username:{
        type:String,
        required:[true, "a username is required"],
    },
    pic:{
        type:String,
        // required:[true,"Se necesita una foto"]
    },
    password:{
        type:String,
        required:true
    },
    posicion:{
        type:String,
        // required:[true,"Una posicion es necesaria"]
    },
    grupo:{
        type:mongoose.Types.ObjectId,
        ref:"Grupos",
        default:null
    },
    isAdmin:[{
        type:Array
    }]
})


UserSchema.methods.comparePassword = async function(enteredPass){
    const compare =  bcrypt.compare(enteredPass, this.password) 
    return compare
}




UserSchema.pre("save",async function(next){
    if(!this.isModified){
        return next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})




module.exports = mongoose.model("User", UserSchema)