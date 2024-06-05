const express = require("express")
const router = express.Router()
const {fetchTeams, createTeam, detallesEquipo} = require("../controllers/teamController") 

router.route("/").get(fetchTeams)
router.route("/").post(createTeam)
router.route("/details").get(detallesEquipo)

module.exports = router