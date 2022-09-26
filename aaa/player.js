const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    playerName: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
    individualRole: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model("Player", playerSchema);