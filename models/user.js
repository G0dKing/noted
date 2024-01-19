// ./models/user.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (this.isModified('hashedPassword')) {
        this.hashedPassword = await bcrypt.hash(this.hashedPassword, 10);
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
