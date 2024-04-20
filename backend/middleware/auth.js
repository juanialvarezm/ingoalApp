const User = require("../models/Users")
const jwt = require("jsonwebtoken")

const JWT = require('jsonwebtoken')

module.exports.protect = (req, res, next) => {
  const token = req.headers?.authorization?.split(' ')[1]

  if (!token) {
    res.status(400).json({ status: false, message: 'Token required' })
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(`JWT: ${err.message}`)
      return res
        .status(401)
        .json({ status: false, error: 'Token is not valid' })
    }

    req.user = decoded

    next()
  })
}