const express = require("express")
const router = express.Router()
const {empezarPartido, actualizarPartido, fetchPartidos} = require("../controllers/partidosControllers")
const {protect} = require("../middleware/auth")

router.route("/").post(protect,empezarPartido)
router.route("/actualizar").post(protect,actualizarPartido)
router.route("/").get(fetchPartidos)


module.exports = router