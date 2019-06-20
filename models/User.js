const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(email) {
      if(!validator.isEmail(email)) throw new Error('Email is invalid')
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8
  }
})

userSchema.pre('save', async function(next){
  const user = this

  if(user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, parseInt(process.env.BCRYPT_SALT))
  }

  next()
})

userSchema.methods.comparePassword = async function(password) {
  const user = this

  const isMatch = await bcrypt.compare(password, user.password)
  return isMatch
}

const User = mongoose.model('User', userSchema)

module.exports = User


