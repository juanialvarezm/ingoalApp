const express = require("express")
const Partidos = require("../models/Partidos")

const empezarPartido = async(req,res)=>{
    try {
        const {equipoVisitante,equipoLocal,creador,categoria,
            tries} = req.body
            
            if(!equipoVisitante || !equipoLocal){
                throw new Error("Se necesitan los equipos")
            }

            // let creador = req.user

            let partido = await Partidos.create({equipoLocal,equipoVisitante,creador,categoria})
            partido =  await partido.populate("equipoLocal", "nombre , logo") 
            partido =  await partido.populate("equipoVisitante", "nombre , logo") 
            partido =  await partido.populate("categoria") 



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


const fetchPartidos = async(req,res)=>{
    try {
        const {grupoId,categoria} = req.body

        if(!grupoId  || !categoria){
             throw new Error("Incomplete fields")
        }

        const partidos = await Partidos.find({grupoId:grupoId, categoria:categoria})
        res.json(partidos)
    } catch (error) {
        throw new Error(error.message)
    }
}


module.exports = {empezarPartido,actualizarPartido,fetchPartidos}