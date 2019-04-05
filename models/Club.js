const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
    title: { type: String, required: true},
    desc: { type: String, required: true},
    logo: { type: String, required: true},
    coverImage: ,
    numOfMembers: String,
    lead: String
});

module.exports = Club = mongoose.model('club', ClubSchema);