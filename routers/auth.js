const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

const router = express.Router()
const jwtAuth = passport.authenticate('jwt', {session: false})

router.post('/signup', async (req, res) => {
  const { email, password } = req.body

  if(!email || !password) {
    return res.status(400).json({
      success: false, 
      msg: 'Please pass email and password.'
    })
  }

  try {
    const isDup = await User.findOne({email})
    if(isDup) {
      return res.json({
        success: false, 
        msg: 'Email is already.'
      })
    }

    const newUser = new User({email, password})
    await newUser.save()

    res.status(201).json({
      success: true, 
      user: newUser
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false, 
      msg: error.message
    })
  }
})

router.post('/signin', async (req, res) => {
  const { email, password } = req.body

  if(!email || !password) {
    return res.status(400).json({
      success: false, 
      msg: 'Please pass email and password.'
    })
  }

  try {
    const user = await User.findOne({email})
    if(!user) {
      return res.status(400).json({
        success: false, 
        msg: 'Authentication failed, Email not found.'
      })
    }

    const isMatch = await user.comparePassword(password)
    if(!isMatch) {
      return res.status(400).json({
        success: false, 
        msg: 'Authentication failed, Wrong password.'
      })
    }

    const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET, {
      expiresIn: 86400
    })

    res.json({success: true, token})
    
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false, 
      msg: error.message
    })
  }
})

router.post('/signout', jwtAuth, (req, res) => {
  res.json({
    success: true, 
    msg: 'Sign out successfully.'
  })
})

module.exports = router
