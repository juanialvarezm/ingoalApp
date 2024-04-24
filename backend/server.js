const cors = require("cors")
const connectDB = require("./helpers/connect")
const dotenv =require("dotenv").config()

const userRoutes = require("./routes/userRoutes")
const gruposRoutes = require("./routes/gruposRoutes")
const partidosRoutes = require("./routes/partidosRoutes")

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



io.on("connection", (socket) => {
    console.log("a user connected");
});
  
httpServer.listen(5000, function(){
    console.log('listening on *:5000');
});