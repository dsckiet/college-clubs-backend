const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: String,
    role: String,
    phone: String,
    empId: { type: String, required: true},
    gender: String,
    desg: String
});

module.exports = Admin = mongoose.model('admin', AdminSchema);