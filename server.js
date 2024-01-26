// Server.js

// Dependencies

const express = require('express')
const cors = require('cors')
const User = require('./models/user')
const jwt = require('jsonwebtoken')
const path = require('path')
const mongoose = require('mongoose')
const apiRoutes = require('./routes/apiRoutes')
const authRoutes = require('./routes/auth')

// Initialization

const app = express()
app.use(express.json())
app.use(cors())

// Routes

app.use('/api/auth', apiRoutes)
app.use('/api/auth', authRoutes)

// Connect to Database (MongoDB)

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
    // Additional MongoDB Settings
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

// Serve Production Build (client/dist)

app.use(express.static(path.join(__dirname, './client/dist')))
const indexPath = path.join(__dirname, './client/dist/index.html')
app.get('*', (req, res) => {
  res.sendFile(indexPath)
})

// Listening Port

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
