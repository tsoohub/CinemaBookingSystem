var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/Movie.js');

/* GET ALL MOVIES */
router.get('/', function(req, res, next) {
   Movie.find(function (err, movies) {
    if (err) return next(err);
    res.json(movies);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
    Movie.create(req.body, function (err, post) {
        console.log(req.body);
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;