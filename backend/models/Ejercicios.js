const mongoose = require("mongoose")

const ejerciciosSchema = mongoose.Schema({

    nombreEjercicio:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
    },
    grupo:{
        type:String
    }
})

module.exports = new mongoose.model("Ejercicios", ejerciciosSchema)