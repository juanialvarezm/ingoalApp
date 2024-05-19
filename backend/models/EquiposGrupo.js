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
    jugadores:{
        type:Array
    },
    fecha:{
        type:Date()
    }
})

module.exports= new mongoose.model("EquiposGrupo",equiposGrupoSchema)