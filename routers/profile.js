const express = require('express')
const router = express.Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const jwtAuth = passport.authenticate('jwt', {session: false})

router.get('/', jwtAuth, async (req, res) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById({_id: decoded._id}).select('email')
    if(!user) {
      return res.status(400).json({
        success: false,
        msg: 'User not found.'
      })
    }

    res.json({yourEmail: user.email})
  } catch (error) {
    console.error(error)
    return res.status(500).json({error})
  }
})

module.exports = router