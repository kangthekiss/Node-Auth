const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const passport = require('passport')

require('dotenv').config()
require('./database/mongodb')
require('./middleware/jwtAuth')

const { PORT, LOGGER } = process.env

const authRouter = require('./routers/auth')
const profileRouter = require('./routers/profile')

const app = express()
const port = PORT || 3000

app.use(logger(LOGGER))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(passport.initialize())

// Router
app.use('/auth', authRouter)
app.use('/profile', profileRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = {}
  err.status = 404
  err.message = 'Not Found'
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  
  const error = err.message
  res.status(err.status || 500).json({error})
})

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})