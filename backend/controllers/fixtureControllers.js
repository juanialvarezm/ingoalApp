const express = require("express")
const Fixture = require("../models/Fixture")
const Grupos = require("../models/Grupos")
const Partidos = require("../models/Partidos")

const fetchFixture = async(req,res)=>{
    try {
        const {categoria,grupo} = req.body

        const fixture = await Fixture.find({grupo:grupo,categoria:categoria})
        .populate("partidos","equipoLocal nombre  equipoVisitante nombre fecha")

        res.json(fixture)

    } catch (error) {
        throw new Error(error.message)
    }
}

const crearFixture = async(req,res)=>{
    try {
        const {grupo,categoria,partidos} = req.body
        

        var fixture = await Fixture.create({grupo,categoria,partidos})
        fixture  = await fixture.populate("partidos", "equipoLocal equipoVisitante")

        var addFixturetoGrupo = await Grupos.findByIdAndUpdate(grupo,{$push:{fixture:fixture}})
        //addFixturetoGrupo  = await addFixturetoGrupo.populate("fixture", "partidos")
        addFixturetoGrupo = await addFixturetoGrupo.populate("fixture")


        res.json(addFixturetoGrupo)

    } catch (error) {
        throw new Error(error.message)
        
    }
}

const addPartidoAlFixture = async(req,res)=>{
    try {
        const {partido,fixture} = req.body
        
        // const grupo = await Grupos.findById(grupoId)
        const match = await Partidos.findById(partido)

        const AddToFixture = await Fixture.findByIdAndUpdate(fixture,{$push:{partidos:match}})
        res.json(AddToFixture)
    } catch (error) {
        throw new Error(error.message)
        
    }
}

// const agregarPartidoAlFixture = async(req,res)=>{
//     try {
//         const {fixture,partido,userId} = req.body

//         //hacer que solo el admin lo pueda agregar

//         const add = await Fixture.findByIdAndUpdate(fixture,{$push:{partidos:partido}})
        

//         res.json(add)

//     } catch (error) {
//         throw new Error(error.message)
//     }
// }

module.exports = {fetchFixture,crearFixture,addPartidoAlFixture}