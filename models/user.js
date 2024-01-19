const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    hashedPassword: { type: String, required: true}
});

// Additional Methods to Add
// - Password Hashing

module.exports = mongoose.model('User', userSchema);