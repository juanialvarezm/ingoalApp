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
        default:"0"
    },
    resultadoVisitante:{
        type:String,
        default:"0"
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
    finalizado:{
        type:Boolean,
        default:false
    },
    fixture:{
        type:mongoose.Types.ObjectId,
        ref:"Fixture"
    }
})

module.exports = mongoose.model("Partidos", partidosSchema)