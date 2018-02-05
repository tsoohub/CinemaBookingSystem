var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/Movie.js');

/* GET ALL MOVIE BY TSoodol (02/05/2018) */
router.get('/', function(req, res, next) {
   Movie.find(function (err, movies) {
    if (err) return next(err);
    res.json(movies);
  });
});

/* GET MOVIE BY ID Molomjamts (02/04/2018)    */
router.get('/:id', function(req, res, next) {
    console.log('movie:'+req.params['id']);
    Movie.findOne({_id:req.params['id']},function (err, movie) {
        console.log('movie:'+movie);
     res.json(movie);
   });
 });

/* SAVE MOVIE BY TSoodol (02/05/2018) */
router.post('/', function(req, res, next) {
    Movie.create(req.body, function (err, post) {    
        if (err) return next(err);
        res.json(post);
    });
});

router.delete('/:id', function(req, res, next) {
    let id = req.params['id'];
    // Movie.delete({_id: id}, function(err, movie) {
    //     res.json(movie);
    // });
    console.log("ID: "+id);
    Movie.findByIdAndRemove(id, req.body, function(err, movie) {
        if (err) return err;
        res.json(movie);
    });
});

module.exports = router;