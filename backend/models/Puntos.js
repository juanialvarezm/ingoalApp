const mongoose = require("mongoose")

const PuntosSchema = new mongoose.Schema({
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
        required:true
    },
    tipo:{
        type:String,
        required:true
    }
})


module.exports = new mongoose.model("Puntos", PuntosSchema)