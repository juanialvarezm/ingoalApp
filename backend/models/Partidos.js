const mongoose = require("mongoose")

const partidosSchema = mongoose.Schema({
    equipoLocal:{
        //type:mongoose.Types.ObjectId,
        //ref:"Teams"
         type:String
    },
    division:{
        type:String
    },
    equipoVisitante:{
        //type:mongoose.Types.ObjectId,
        //ref:"Teams",
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
    grupoId:{
        type:String
    },
    categoria:{
        type:String,
        required:true
        //A , B, C
    }
})

module.exports = mongoose.model("Partidos", partidosSchema)