const express = require("express")
const router = express.Router()
const {protect} = require("../middleware/auth")
const {createGroup, addPartidoAlFixture,addJugadores,
    agregarEjercicios,removeJugadores, joinGroup} = require("../controllers/gruposControllers")


router.route("/").post(createGroup)
router.route("/fixture").post(protect,addPartidoAlFixture)
router.route("/add").post(protect,addJugadores)
router.route("/ejercicio").post(protect,agregarEjercicios)
router.route("/remove").post(protect,removeJugadores)
router.route("/join").post(protect,joinGroup)



module.exports = router