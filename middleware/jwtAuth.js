const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const User = require('../models/user')

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = process.env.JWT_SECRET

passport.use('jwt', new JwtStrategy(opts, async (payload, done) => {
  
  try {
    const user = await User.findOne({_id: payload._id})
    if(!user) done(null, false, {message: 'Unauthorized'})

    done(null, user)
  } catch (error) {
    done(error, false)
  }

}))
