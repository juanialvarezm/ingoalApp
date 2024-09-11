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
    },
    tipo:{
        type:String,
        enum:["Try", "Conversion", "Penal", "Tarjeta"],
        // required:true
    }
})


module.exports =  mongoose.model("Puntos", PuntosSchema)
