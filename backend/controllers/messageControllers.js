const express = require("express")
const Message = require("../models/Messages")
const Grupos = require("../models/Grupos")

const sendMessage = async(req,res)=>{
    try {
        const {grupo,content,sender} = req.body

        const chat = await Grupos.findById(grupo)

        const messageInfo ={
            grupo,
            content,
            sender,
            receiver:chat.jugadores
        }

        messageInfo.receiver = messageInfo.receiver.pull(messageInfo.sender)

        var message = await Message.create(messageInfo)
        message = await message.populate("sender","name pic")
        message = await message.populate("grupo")
        console.log(message)

        res.json(message)

    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {sendMessage}