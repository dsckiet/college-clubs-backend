const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    email: { type: String, required: true },
    name: String,
    role: String,
    phone: String,
    libId: { type: String, required: true},
    gender: String,
    clubName: String
});

module.exports = Student = mongoose.model('student', StudentSchema);