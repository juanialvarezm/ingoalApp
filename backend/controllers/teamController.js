const express = require("express")
const Teams = require("../models/Teams")

const fetchTeams = async(req,res)=>{
    try {
        const teams = await Teams.find({})
        res.json(teams)
        // res.send("hello")
    } catch (error) {
        throw new Error(error.message)
    }
}


const createTeam = async(req,res)=>{
    try {
        const info = {
            nombre:req.body.nombre,
            logo:req.body.logo,
            alias:req.body.alias,
            followers:[]
        }

        if(!info.nombre || !info.logo){
            throw new Error("valores incompletos")
        }

        const equipo = await Teams.create(info)
        res.json(equipo)

    } catch (error) {
        throw new Error(error.message)
    }

}

const detallesEquipo = async(req,res)=>{
    try {
        const {teamId} = req.body

        if(teamId){
            const equipo = await Teams.find({_id:teamId})
            if(equipo){
                res.json(equipo)
            }
        }else{
            return res.send("bad") 
        }
    } catch (error) {
        throw new Error(error.message)
    }
}


module.exports = {fetchTeams,createTeam,detallesEquipo}