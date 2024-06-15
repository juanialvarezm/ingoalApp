const express = require("express")
const router = express.Router()
const {fetchFixture,crearFixture,addPartidoAlFixture} = require("../controllers/fixtureControllers")

router.route("/").get(fetchFixture)


module.exports = router