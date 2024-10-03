const express = require("express")
const router = express.Router()
const {fetchFixture,crearFixture,addPartidoAlFixture, agregarPartidoAlFixture} = require("../controllers/fixtureControllers")

router.route("/").post(fetchFixture)
router.route("/crear").post(crearFixture)
router.route("/agregarpartido").post(addPartidoAlFixture)


module.exports = router