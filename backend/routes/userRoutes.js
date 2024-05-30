const express = require("express")
const router = express.Router()
const {signUp,login, searchUsers, fetchUserGrupo} = require("../controllers/userControllers")
const {protect} = require("../middleware/auth")



router.route("/").post(signUp)
router.route("/login").post(login)
router.route("/find").get(searchUsers)
router.route("/grupo/:userId").get(fetchUserGrupo)

module.exports = router