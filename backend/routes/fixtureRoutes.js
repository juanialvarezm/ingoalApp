const express = require("express")
const router = express.Router()
const {fetchFixture,crearFixture,addPartidoAlFixture, agregarPartidoAlFixture} = require("../controllers/fixtureControllers")

router.route("/").get(fetchFixture)
router.route("/").post(crearFixture)
router.route("/agregarpartido").post(addPartidoAlFixture)


module.exports = router