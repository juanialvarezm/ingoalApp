const express = require("express")
const router = express.Router()
const {empezarPartido, actualizarPartido, fetchPartidos, cargarUnPartido} = require("../controllers/partidosControllers")
const {protect} = require("../middleware/auth")

router.route("/").post(protect,empezarPartido)
router.route("/actualizar").post(protect,actualizarPartido)
router.route("/").get(fetchPartidos)
router.route("/details").get(cargarUnPartido)


module.exports = router