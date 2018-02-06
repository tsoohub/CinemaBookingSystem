const express = require('express');
const router = require('express').Router();
var User = require('../models/User.js');
var Movie = require('../models/Movie');
var jwt = require('jsonwebtoken');

router.put('/:id', (req, res, next) => {
    User.findOneAndUpdate({ _id: req.body._id, }, { $push: { "userTickets": req.body.tickets } }, { "new": true }, function (err, user) {
        
        if (err) throw err;
        Movie.findById(req.params['id'], function (err, movie) {
            console.log(movie);
            var seat = req.body.tickets.adultCount + req.body.tickets.childrenCount;
            var availableSeat = movie.schedule.filter(x => x.startTime === req.body.tickets.time)[0].totalSeat;
            movie.schedule.filter(x => x.startTime === req.body.tickets.time)[0].totalSeat = availableSeat-seat;
            movie.save();
            // findOneAndUpdate({startTime:req.body.tickets.time},{$set:{"totalSeat":seat}},(err,result)=>{
            //     console.log(result);
            // });
            console.log('available:',availableSeat);
            console.log('available:',seat);
            // if (!err) {
            //     var seat = req.body.tickets.adultCount + req.body.tickets.childrenCount;
            //     movie.userTickets.findOneAndUpdate({ time: req.body.tickets.time }, { $set: { "totalSeat": seat } }, (err, result) => {
            //         console.log(result);
            //     });
            // }
        });
        // Movie.findByIdAndUpdate(req.params['id'],{$set:{""}})
        res.json(user);
    });
});

module.exports = router;