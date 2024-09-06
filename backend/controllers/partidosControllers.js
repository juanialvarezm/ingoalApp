const express = require("express")
const Partidos = require("../models/Partidos")
const Puntos = require("../models/Puntos")

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

        const {
            resultadoLocal,
            resultadoVisitante,
            partidoId,
            puntos,
            kaka} = req.body


            const actualizarPartido = await Partidos.findByIdAndUpdate(
                partidoId,{resultadoLocal,resultadoVisitante,puntos,kaka})
                
                const getMatch = await Partidos.findById(actualizarPartido._id)
                .populate("resultadoLocal resultadoVisitante")

            res.json(getMatch)

    }catch(e){
        throw new Error(error.message)
    }
} 


const actualizarPuntos = async(req,res)=>{
    try {
        const {tipo} = req.body

        if( !tipo  ){
            throw new Error("Campos incompletos")
        }

        var puntos = await Puntos.create({tipo})
        puntos = await puntos.populate("jugador")
        puntos = await puntos.populate("partido")
        res.json(puntos)

    } catch (error) {
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


const empezarPartido = async(req,res)=>{
    try {
        const {partidoId} = req.body

        const partido = await Partidos.findByIdAndUpdate(partidoId,{empezo:true})
        res.json(partido)

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

module.exports = {crearPartido,actualizarPartido,fetchPartidos,cargarUnPartido,actualizarPuntos,empezarPartido}