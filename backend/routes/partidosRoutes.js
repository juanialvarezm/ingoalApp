const express = require("express")
const router = express.Router()
const {empezarPartido, actualizarPartido} = require("../controllers/partidosControllers")
const {protect} = require("../middleware/auth")

router.route("/").post(protect,empezarPartido)
router.route("/actualizar").post(protect,actualizarPartido)


module.exports = router