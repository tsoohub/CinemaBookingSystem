var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    phone: String,
    password: String,
    userTickets: [
        { movieId: Number, 
          scheduleId: Number,
          adultCount: Number,
          childrenCount: Number }
    ]

});

module.exports = mongoose.model('user', UserSchema);