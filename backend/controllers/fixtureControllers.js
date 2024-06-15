const express = require("express")
const Fixture = require("../models/Fixture")
const Grupos = require("../models/Grupos")

const fetchFixture = async(req,res)=>{
    try {
        const {categoria,grupo} = req.body

        const fixture = await Fixture.find({grupo:grupo,categoria:categoria})
        res.json(fixture)

    } catch (error) {
        throw new Error(error.message)
    }
}

const crearFixture = async(req,res)=>{
    try {
        const {grupo,categoria,partidos} = req.body
        
        partidos = partidos.map((p)=>p)
        const fixture = await Fixture.create({grupo,categoria,partidos:p})
        const addFixturetoGrupo = await Grupos.findByIdAndUpdate(grupo,{$push:{fixture:fixture}})
        res.json(fixture)

    } catch (error) {
        throw new Error(error.message)
        
    }
}

const addPartidoAlFixture = async(req,res)=>{
    try {
        const {partido,userId,fixture,grupoId} = req.body
        
        // const grupo = await Grupos.findById(grupoId)

        const AddToFixture = await Fixture.findByIdAndUpdate(fixture,{$push:{partidos:partido}})
        res.json(AddToFixture)
    } catch (error) {
        throw new Error(error.message)
        
    }
}

module.exports = {fetchFixture,crearFixture,addPartidoAlFixture}