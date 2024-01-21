// server.js

const express = require('express')
const cors = require('cors')
const User = require('./models/user')
const jwt = require('jsonwebtoken')
const path = require('path')
const mongoose = require('mongoose')
const apiRoutes = require('./routes/apiRoutes');
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json());

app.use('/api', apiRoutes)

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
    // MongoDB options
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

app.use(express.static(path.join(__dirname, './client/dist')))

const indexPath = path.join(__dirname, './client/dist/index.html')

app.get('*', (req, res) => {
  res.sendFile(indexPath)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
