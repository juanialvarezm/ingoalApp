const mongoose = require("mongoose")

const PuntosSchema = mongoose.Schema({
    jugador:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    partido:{
        type:mongoose.Types.ObjectId,
        ref:"Partidos"
    },
    minuto:{
        type:String,
        // required:true
    },
    tipo:{
        type:String,
        enum:["try", "conversion", "penal", "trypenal"],
        required:true
    }
})


module.exports =  mongoose.model("Puntos", PuntosSchema)
