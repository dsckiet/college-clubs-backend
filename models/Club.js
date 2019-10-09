const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 3,
		max: 50
		//enum: ['dsc', 'erp', 'ccell', 'phoenix', 'kommotion', 'tedx', 'innogeeks', 'music club', 'movies club', 'uddeshhya']
	},
    title: { type: String, required: true},
    desc: {
		type: String,
		required: true
	},
    logo: { type: String, required: true},
    coverImage: String,
    numOfMembers: String,
    lead: { type: mongoose.Schema.Types.ObjectId, ref: "Student" }
});

module.exports = Club = mongoose.model('club', ClubSchema);