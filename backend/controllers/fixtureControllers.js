const express = require("express")
const Fixture = require("../models/Fixture")
const Grupos = require("../models/Grupos")
const Partidos = require("../models/Partidos")
const Teams = require("../models/Teams")


const fetchFixture = async(req,res)=>{
    try {
        const {categoria,grupo} = req.body
        // const {grupo} = req.body

        var fixture = await Fixture.findOne({categoria:categoria, grupo:grupo})
        // var fixture = await Fixture.findOne({grupo:grupo})


        // .populate("partidos")
        // fixture  = await fixture.populate("partidos.equipoLocal","nombre logo")
        // fixture  = await fixture.populate("partidos.equipoVisitante","nombre logo")


        res.json(fixture)

    } catch (error) {
        throw new Error(error.message)
    }
}

const crearFixture = async(req,res)=>{
    try {
        const {grupo,categoria} = req.body
        

        var fixture = await Fixture.create({grupo,categoria})
        fixture  = await fixture.populate("partidos",)
        fixture  = await fixture.populate("partidos.equipoLocal","nombre")

        var addFixturetoGrupo = await Grupos.findByIdAndUpdate(grupo,{$push:{fixture:fixture}})
        // addFixturetoGrupo  = await addFixturetoGrupo.populate("fixture", "partidos")
        // addFixturetoGrupo = await addFixturetoGrupo.populate("fixture")


        res.json(fixture)

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