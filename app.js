const express = require('express')
const logger = require('morgan')

require('dotenv').config()
require('./database/mongoose')

const app = express()
const port = process.env.PORT || 3000

app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send({message: 'Hello'})
})

app.listen(port, () => {
  console.log('Server is running on port ' + port)
})