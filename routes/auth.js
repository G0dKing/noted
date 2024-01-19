const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// Signup Endpoint
router.post('/signup', async (req, res) => {
  // Signup logic
});

// Login Endpoint
router.post('/login', async (req, res) => {
  // Login logic
});

module.exports = router;
