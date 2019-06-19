const mongoose = require('mongoose')

const uri = 'mongodb+srv://warapol:db@1234@cluster0-dygoc.mongodb.net/auth-jwt-and-passport'

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => {
  console.log('mongodb connected.')
})
.catch(err => {
  console.error(err)
})