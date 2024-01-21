// ./routes/auth.js

const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const router = express.Router()

const JWT_SECRET =
  process.env.JWT_SECRET || 'AFSe3Zu43e5fyFEubSzLP5s7uwdOyD3P7jLILGzUIQw='
const SALT_ROUNDS = 10

// Signup Endpoint
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body
    const salt = await bcrypt.genSalt(SALT_ROUNDS)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = new User({ username, hashedPassword: password })
    await user.save()
    res.status(201).send('User created successfully')
  } catch (error) {
    res.status(500).send('Error creating user')
  }
})

// Login Endpoint
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (user && (await bcrypt.compare(password, user.hashedPassword))) {
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: '1h'
      })
      res.status(200).json({ token })
    } else {
      res.status(401).send('Invalid credentials')
    }
  } catch (error) {
    res.status(500).send('Error logging in')
  }
})

module.exports = router
