const express = require("express")
const User = require("../models/Users")
const Grupos = require("../models/Grupos")
const Partidos = require("../models/Partidos")
const Ejercicios = require("../models/Ejercicios")
const EquiposGrupo = require("../models/EquiposGrupo")


const createGroup = async(req,res)=>{
    try {
        const {club,division,jugadores,fixture,admin} = req.body

        if(!club || !division || !admin){
            console.log("es necesario un nombre , division y admin ")
        }

        console.log(req.user)
        const groupInfo = {
            club,
            division,
            jugadores,
            admin,
        }
        

        var createGroup = await Grupos.create(groupInfo)
        createGroup = await createGroup.populate("jugadores", "name username")
        createGroup = await createGroup.populate("jugadores", "name username")

        
        var addJugadores = await User.findByIdAndUpdate(jugadores,{grupo:createGroup._id})
        // addJugadores = await addJugadores.populate("grupo division")


        const nowAdmin = await User.findByIdAndUpdate(admin,{isAdmin:createGroup})


        res.json(createGroup)

    } catch (error) {
        throw new Error(error.message)
    }
}


const fetchGrupo = async(req,res)=>{
    try {
        const {groupId} = req.body

        const find = await Grupos.findById(groupId)
        res.json(find)

    } catch (error) {
        throw new Error(error.message)
    }
}

const quitGroup = async(req,res)=>{
    try {
        const {groupId,userId} = req.body

        const leave = await Grupos.findByIdAndUpdate(groupId,{$pull:{jugadores:userId}})
        res.json(leave)

    } catch (error) {
        throw new Error(error.message)
    }
}


const addJugadores = async(req,res)=>{
    try{
        const {userId,grupoId} = req.body

        if(!userId ||!grupoId){
            throw new Error("incompleto")
        }

        const grupo = await Grupos.findByIdAndUpdate(grupoId,{$push:{jugadores:userId}})
        const player = await User.findByIdAndUpdate(userId,{$push:{grupo:grupoId}})
        res.json(grupo)

    }catch(e){
        throw new Error(e.message)
    }
}

const removeJugadores = async(req,res)=>{
    try{
        const {userId,grupoId} = req.body

        if(!userId ||!grupoId){
            throw new Error("incompleto")
        }

        const grupo = await Grupos.findByIdAndUpdate(grupoId,{$pull:{jugadores:userId}})
        const player = await User.findByIdAndUpdate(userId,{$pull:{grupo:grupoId}})
        res.json(grupo)

    }catch(e){
        throw new Error(e.message)
    }
}



const joinGroup = async(req,res)=>{
    try {
        const {groupId,userId} = req.body

        if(!groupId || !userId){
            console.log("Un grupo y un usuario se necesita")
        }

        const grupo = await Grupos.findByIdAndUpdate(groupId,{$push:{jugadores:userId}})
        res.json(grupo)

    } catch (error) {
        throw new Error(error.message)
    }
}

const fetchGrupos = async(req,res)=>{
    try {
        const grupos = await Grupos.find()
        res.json(grupos)
    } catch (error) {
        console.log(error.message)
    }
}


const makeGroupAdmin = async(req,res)=>{
    try {
        const {userId,groupId,reqUser} = req.body


        const isReqAdmin = await User.findById(reqUser)
        // console.log(isReqAdmin)
        if(!isReqAdmin.isAdmin)return console.log("no es admin ") 

        const make = await User.findByIdAndUpdate(userId,{isAdmin:groupId})
        
        res.json(make)

    } catch (error) {
        throw new Error(error.message)
    }
}

const agregarEjercicios = async(req,res)=>{
    try {
        const {nombreEjercicio, descripcion,grupo} = req.body

        const ejer = await Ejercicios.create({nombreEjercicio,descripcion,grupo}) 
        const rutina = await Grupos.findByIdAndUpdate(grupo,{$push:{rutina:{ejer}}}) 
        
        res.json(ejer)
    } catch (error) {
        throw new Error(error.message)
    }
}

const addPartidoAlFixture = async (req,res) => {
    try {

        const {fecha,equipoLocal,equipoVisitante,grupoId} = req.body
        
            if(!equipoLocal || !equipoVisitante){
                throw new Error("Se necesitan equipos")
            }
        
        const partido = await Partidos.create({equipoLocal,equipoVisitante,fecha,grupoId})
        
        const alFixture = await Grupos.findByIdAndUpdate(grupoId,
            {$push:{partidos:partido}}
        ).populate("partidos", "equipoLocal equipoVisitante fecha")
        
        res.json(alFixture) 

    } catch (error) {
        throw new Error(error.message)
    }
}


const citarJugadores = async(req,res)=>{
    try {
        const {nombreEquipo,grupo,jugadores,fecha} = req.body


        var crearEquipo = await EquiposGrupo.create({nombreEquipo,grupo,jugadores,fecha})
        crearEquipo = await crearEquipo.populate("jugadores")
        
        var addToGroup = await Grupos.findByIdAndUpdate(grupo,{$push:{equipos:crearEquipo}})
        addToGroup = await addToGroup.populate("equipos")

        res.json(addToGroup)

    } catch (error) {
        throw new Error(error.message)
    }
}



module.exports = {createGroup,addPartidoAlFixture,addJugadores,
                removeJugadores,agregarEjercicios,joinGroup,fetchGrupos,
                makeGroupAdmin,citarJugadores,quitGroup,fetchGrupo}
                