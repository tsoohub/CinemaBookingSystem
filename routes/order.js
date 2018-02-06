const express = require('express');
const router = require('express').Router();
var User = require('../models/User.js');
var Movie = require('../models/Movie');
var jwt = require('jsonwebtoken');

router.put('/:id', (req, res, next) => {
    User.findByIdAndUpdate(req.body.user._id, {$push:{"userTickets":req.body.tickets}},{"new":true}, function (err, user) {
        if(err) throw err;
        // Movie.findByIdAndUpdate(req.params['id'],{$set:{""}})
        res.json(user);
    }); 
});

module.exports = router;