const mongoose = require("mongoose")

const FixtureSchema = mongoose.Schema({
    partidos:[{
        type:mongoose.Types.ObjectId,
        ref:"Partidos"
    }],
    grupo:{
        type:mongoose.Types.ObjectId,
        ref:"Grupos"
    },
    categoria:{
        type:String
    }
})

module.exports = mongoose.model("Fixture", FixtureSchema)
