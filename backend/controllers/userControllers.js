const express = require("express")
const User = require("../models/Users")
const generateJWT = require("../helpers/generateJWT")
const Partidos = require("../models/Partidos")
const Grupos = require("../models/Grupos")

const signUp = async(req,res)=>{
    try {
        const {name,password,club,posicion,username} = req.body

        if(!name || !password){
            throw new Error ("Empty values while signing up")
        }

        const user = await User.create({name,password,club,posicion,username})
        console.log(user)
        res.json(user)

    } catch (error) {
        throw new Error(error.message)
    }
}


const fetchUserGrupo = async(req,res)=>{
    try {
        const {userId} = req.params

        const usuario = await User.findById(userId)
        var grupo = await Grupos.findOne({jugadores:usuario})
        .populate("jugadores", "name username")
        .populate("partidos", "equipoVisitante equipoLocal fecha")
        .populate("fixture")

        res.json(grupo)

    } catch (error) {
        throw new Error(error.message)
    }
}


const login = async (req,res)=>{
    try {
        const {name,password} = req.body

        const user = await User.findOne({name})
        
        if(!user){
            throw new Error("el usuario no existe")        

        }

        const grupoo = await Grupos.find({jugadores:user})

        if(user && await user.comparePassword(password)){
            res.json({
                _id:user._id,
                name:user.name,
                username:user.username,
                grupo:user.grupo,
                password:user.password,
                posicion:user.posicion,
                isAdmin:user.isAdmin,
                token: generateJWT(user._id),
            })    
        }else{
            res.send("Error while logging in")
        }

    
    } catch (error) {
        throw Error(error.message)        
    }
}

const editUser = async(req,res)=>{
    try{
        const {name, username,userId} = req.body

        const user = await User.findByIdAndUpdate(userId,{name,username})
        res.json(user)
    }catch(e){
        throw new Error(e.message)
    }
}


const searchUsers = async(req,res)=>{
    try {
        const query = req.query.search

        const find = await User.find(
            { name: { $regex: query, $options: "i" } },
        )            
            res.json(find)

    } catch (error) {
        throw new Error(error.message)   
    }
}




module.exports = {signUp,login,editUser,searchUsers,fetchUserGrupo}