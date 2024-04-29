const express = require("express")
const router = express.Router()
const {sendMessage} = require("../controllers/messageControllers")
const {protect} = require("../middleware/auth")

router.route("/").post(sendMessage,protect)

module.exports = router 