const express = require("express")
const router = express.Router()
const {fetchFixture,crearFixture,addPartidoAlFixture} = require("../controllers/fixtureControllers")

router.route("/").get(fetchFixture)
router.route("/").post(crearFixture)


module.exports = router