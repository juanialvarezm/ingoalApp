const mongoose = require("mongoose")

const equiposGrupoSchema = mongoose.Schema({
    nombreEquipo:{
        type:String,
        required:true
    },
    grupo:{
        type:mongoose.Types.ObjectId,
        ref:"Grupos",
        required:true
    },
    jugadores:[{
        type:mongoose.Types.ObjectId,
        ref:"User",
    }],
    fecha:{
        // type:Date()
        type:String
    }
})

module.exports= new mongoose.model("EquiposGrupo",equiposGrupoSchema)