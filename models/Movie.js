var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    name: String,
    decs: String,
    genre: String,
    release: String,
    img: String,
    actors: [],
    directors: [],
    prices: {
        adult: Number,
        child: Number,
    },
    schedule: [{ 
        startTime: String,
        totalSeat: Number,
    }]
});

module.exports = mongoose.model('movie', MovieSchema);