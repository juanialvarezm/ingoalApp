const cors = require("cors")
const connectDB = require("./helpers/connect")
const dotenv =require("dotenv").config()

const userRoutes = require("./routes/userRoutes")
const gruposRoutes = require("./routes/gruposRoutes")
const partidosRoutes = require("./routes/partidosRoutes")
const {Server} = require("socket.io")
const {createServer} = require("http")

const express = require("express")
const app = express()

const httpServer = createServer(app)

app.use(cors())
app.use(express.json())

connectDB()

const io = new Server(httpServer,{})
io.on("connection",(socket)=>{
    console.log("socket connected")
})

httpServer.listen(3000)


app.listen(5000,()=>{
    console.log("port running on port 5000")
})

app.use("/api/user",userRoutes)
app.use("/api/grupos",gruposRoutes)
app.use("/api/partidos",partidosRoutes)

app.get("/",(req,res)=>{
    res.send("hello")
})



