/* Tsoodol 02/03/2018
   User collections with all property and type*/

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    phone: String,
    password: String,
    userTickets: [
        { movieId: String, 
          time: String,
          adultCount: Number,
          childrenCount: Number }
    ]

});

module.exports = mongoose.model('user', UserSchema);