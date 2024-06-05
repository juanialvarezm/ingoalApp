const cors = require("cors")
const connectDB = require("./helpers/connect")
const dotenv =require("dotenv").config()

const userRoutes = require("./routes/userRoutes")
const gruposRoutes = require("./routes/gruposRoutes")
const partidosRoutes = require("./routes/partidosRoutes")
const messageRoutes = require("./routes/messageRoutes")
const teamRoutes = require("./routes/teamRoutes")

const express = require("express")
const app = express()

const httpServer = require("http").Server(app)
const io = require("socket.io")(httpServer,{
    cors:{
        origin:"http://localhost:5000"
    }
})

connectDB()


app.use(cors())
app.use(express.json())

app.use("/api/user",userRoutes)
app.use("/api/grupos",gruposRoutes)
app.use("/api/partidos",partidosRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/teams",teamRoutes)



// io.on("connection", (socket) => {
//     console.log(`User connected ${socket.id}`);


//     socket.on("setup",()=>{
//         socket.emit("connected")
//     })

//     socket.on("new-message",(messagesReceived)=>{
//         socket.broadcast.emit("message received", messagesReceived)
//     })

//     socket.off("setup",()=>{
//         console.log("Disconnected")
//     })
// });
  
httpServer.listen(5000, function(){
    console.log('listening on *:5000');
});