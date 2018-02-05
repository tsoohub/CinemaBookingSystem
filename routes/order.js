const express = require('express');
const router = require('express').Router();
var User = require('../models/User.js');
var jwt = require('jsonwebtoken');

router.put('/:id', (req, res, next) => {
    console.log('startiiiiiiiiiiiiiiiiiiiing order',req.body);
    console.log('startiiiiiiiiiiiiiiiiiiiing order',req.body.tickets);
        // res.json(user);
    User.findByIdAndUpdate(req.body.user._id, {$push:{"userTickets":req.body.tickets}},{"new":true}, function (err, user) {
        if(err) throw err;
        console.log(user);
        res.json(user);
    }); 
    // User.findById(req.body.user._id, (err,result)=>{
    //     if(!err){
    //     result.userTickets.push(req.body.schedule);
    //     result.save((err,data)=>{
    //         console.log(data);
    //     });
    // }
    // });
});

module.exports = router;