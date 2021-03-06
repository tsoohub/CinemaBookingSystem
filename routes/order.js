const express = require('express');
const router = require('express').Router();
var User = require('../models/User.js');
var Movie = require('../models/Movie');
var jwt = require('jsonwebtoken');

/* Molomjamts - 02/05/2018
    it will push the new record to user's ticket list.
    and lookup the movie that user ordered and reducig number of avaiable seat
    by number of user's ordered ticket 
*/
router.put('/:id', (req, res, next) => {
    User.findOneAndUpdate({ _id: req.body._id, }, { $push: { "userTickets": req.body.tickets } }, { "new": true }, function (err, user) {

        if (err) throw err;
        Movie.findById(req.params['id'], function (err, movie) {
            console.log(movie);
            var seat = parseInt(req.body.tickets.adultCount) + parseInt(req.body.tickets.childrenCount);
            var availableSeat = movie.schedule.filter(x => x.startTime === req.body.tickets.time)[0].totalSeat;
            if (availableSeat >= seat) {
                movie.schedule.filter(x => x.startTime === req.body.tickets.time)[0].totalSeat = availableSeat - seat;
                movie.save();
            }
            else{
                throw err;
            }
        });
        res.json(user);
    });
});

module.exports = router;