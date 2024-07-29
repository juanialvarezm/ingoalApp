const mongoose = require("mongoose")

const partidosSchema = mongoose.Schema({
    equipoLocal:{
        type:mongoose.Types.ObjectId,
        ref:"Teams"
    },
    division:{
        type:String
    },
    equipoVisitante:{
        type:mongoose.Types.ObjectId,
        ref:"Teams",

    },
    resultadoLocal:{
        type:String,
    },
    resultadoVisitante:{
        type:String,
    },
    puntos:[{
        type:mongoose.Types.ObjectId,
        ref:"Puntos"
    }],
    conversiones:[{
        type:Array,
    }],
    creador:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    grupoId:{
        type:String
    },
    categoria:{
        type:String,
        required:true
        //A , B, C
    },
    empezo:{
        type:Boolean,
        default:false
    },
    kaka:{
        type:String
    }
})

module.exports = mongoose.model("Partidos", partidosSchema)