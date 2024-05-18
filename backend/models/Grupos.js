const mongoose = require("mongoose")

const canchasSchema = mongoose.Schema({
    club:{
        type:String,
        required:[true,"Un equipo es necesario"]
    },
    division:{
        type:String, 
        required:[true, "Especifique la division"]
    },
    admin:[{
        type:Array
    }],
    jugadas:[{
        type:Array
    }],
    partidos:[{
        // type:Array
        type:mongoose.Types.ObjectId,
        ref:"Partidos"

    }],
    jugadores:[{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"User"
    }],
    rutina:[{
        type:Array
    }],
    codigo:{
        type:String,
        unique:true
    },
    esPrivado:{
        type:Boolean,
        default:true
    },
    equipos:{
        type:Array
    },
})


canchasSchema.pre("save",async function(next){
    if(!this.isModified){
        return next()
    }

    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        this.codigo = code
    }
    // return codigo;

})


module.exports = mongoose.model("Grupos", canchasSchema)