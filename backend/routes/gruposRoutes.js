const express = require("express")
const router = express.Router()
const {protect} = require("../middleware/auth")
const {createGroup, addPartidoAlFixture,addJugadores,
    agregarEjercicios,removeJugadores, joinGroup,
    makeGroupAdmin,
    citarJugadores,
    quitGroup,
    fetchGrupo} = require("../controllers/gruposControllers")


router.route("/").post(createGroup)
router.route("/fetch").post(fetchGrupo)
router.route("/join").post(joinGroup)
router.route("/fixture").post(addPartidoAlFixture)
router.route("/add").post(protect,addJugadores)
router.route("/ejercicio").post(protect,agregarEjercicios)
router.route("/remove").post(protect,removeJugadores)
router.route("/makeadmin").post(protect,makeGroupAdmin)
router.route("/citar").post(protect,citarJugadores)
router.route("/leave").post(quitGroup)



module.exports = router