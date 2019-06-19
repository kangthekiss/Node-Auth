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
}, {
  timestamps: true
})

userSchema.pre('save', async function(next){
  const user = this

  if(user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10)
  }

  next()
})

userSchema.statics.findByCredential = async function (email, password) {
  const user = await User.findOne({ email })

  if(!user) throw new Error('Unable to login')

  const isMatch = await bcrypt.compare(password, user.password)

  if(!isMatch) throw new Error('Unable to login')

  return user
}

const User = mongoose.model('User', userSchema)

module.exports = User


