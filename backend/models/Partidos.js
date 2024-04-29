const mongoose = require("mongoose")

const partidosSchema = mongoose.Schema({
    equipoLocal:{
        type:String
    },
    equipoVisitante:{
        type:String
    },
    resultadoLocal:{
        type:Number,
        default:0
    },
    resultadoVisitante:{
        type:Number,
        default:0
    },
    tries:[{
        type:Array,
    }],
    conversiones:[{
        type:Array,
    }],
    creador:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },

})

module.exports = mongoose.model("Partidos", partidosSchema)