const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: String,
    role: String,
    phone: String,

});

module.exports = User = mongoose.model('user', UserSchema);