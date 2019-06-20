const mongoose = require('mongoose')
const { URI, COLLECTION } = process.env

mongoose.connect(URI + COLLECTION, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
.then(() => { console.log('mongodb connected.') })
.catch(err => { console.error(err) })