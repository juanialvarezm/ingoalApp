const express = require("express")
const router = express.Router()
const {crearPartido, actualizarPartido, fetchPartidos, cargarUnPartido, actualizarPuntos} = require("../controllers/partidosControllers")
const {protect} = require("../middleware/auth")

router.route("/").post(protect,crearPartido)
router.route("/actualizar").post(actualizarPartido)
router.route("/").get(fetchPartidos)
router.route("/details").get(cargarUnPartido)
router.route("/puntos").post(actualizarPuntos)


module.exports = router