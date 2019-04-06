const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
    title: { type: String, required: true},
    desc: { type: String, required: true},
    logo: { type: String, required: true},
    coverImage: String,
    numOfMembers: String,
    lead: { type: mongoose.Schema.Types.ObjectId, ref: "Srudent" }
});

module.exports = Club = mongoose.model('club', ClubSchema);