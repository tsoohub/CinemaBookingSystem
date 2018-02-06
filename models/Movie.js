/* Tsoodol 02/03/2018
   Movie collections with all property and type*/
 
var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
    name: String,
    decs: String,
    genre: String,
    img: String,
    adult: Number,
    child: Number,
    schedule: [{ 
        startTime: String,
        totalSeat: Number,
    }]
});

module.exports = mongoose.model('movie', MovieSchema);