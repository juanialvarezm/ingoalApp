const express = require("express")
const Partidos = require("../models/Partidos")

const empezarPartido = async(req,res)=>{
    try {
        const {equipoVisitante,equipoLocal,creador,
            tries} = req.body
            
            if(!equipoVisitante || !equipoLocal){
                throw new Error("Se necesitan los equipos")
            }

            // let creador = req.user

            let partido = await Partidos.create({equipoLocal,equipoVisitante,creador}) 
            
            res.json(partido)

    } catch (error) {
        throw new Error(error.message)        
    }
}


const actualizarPartido = async(req,res)=>{
    try{

        const {resultadoLocal,resultadoVisitante,
            tries,conversiones,partidoId} = req.body


            const actualizarPartido = await Partidos.findByIdAndUpdate(partidoId,
                {resultadoLocal,resultadoVisitante,tries,conversiones}
                )
                
            res.json(actualizarPartido)

    }catch(e){
        throw new Error(error.message)
    }
} 


module.exports = {empezarPartido,actualizarPartido}