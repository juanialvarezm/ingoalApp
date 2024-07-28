const express = require("express")
const Partidos = require("../models/Partidos")

const crearPartido = async(req,res)=>{
    try {
        const {equipoVisitante,equipoLocal,creador,categoria,
            tries,grupoId} = req.body
            
            if(!equipoVisitante || !equipoLocal){
                throw new Error("Se necesitan los equipos")
            }

            // let creador = req.user

            let partido = await Partidos.create({equipoLocal,equipoVisitante,creador,categoria,grupoId})
            partido =  await partido.populate("equipoLocal", "nombre logo") 
            partido =  await partido.populate("equipoVisitante", "nombre , logo") 
            partido =  await partido.populate("grupoId") 
            partido =  await partido.populate("categoria") 
            // partido =  await partido.populate("fecha") 



            res.json(partido)

    } catch (error) {
        throw new Error(error.message)        
    }
}


const actualizarPartido = async(req,res)=>{
    try{

        const {resultadoLocal,resultadoVisitante,
            partidoId,puntos} = req.body


            const actualizarPartido = await Partidos.findByIdAndUpdate(partidoId,
                {resultadoLocal,resultadoVisitante,puntos}
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
        .populate("equipoLocal equipoVisitante")
        res.json(partidos)
    } catch (error) {
        throw new Error(error.message)
    }
}


const cargarUnPartido = async(req,res)=>{
    try {
        const {partidoId} = req.body

        if(!partidoId){
            throw new Error("No hay id")
        }

        const partido = await   Partidos.findById(partidoId)
        res.json(partido)

    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {crearPartido,actualizarPartido,fetchPartidos,cargarUnPartido}