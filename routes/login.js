const express = require('express');
const router = require('express').Router();
var User = require('../models/User.js');
var jwt = require('jsonwebtoken');


router.post('/', (req, res, next) => {
    User.findOne({ username: req.body.username, password: req.body.password }, function (err, user) {
        var jwtBearerToken;
        
        if (user != null) {
            console.log(user._id);
            jwtBearerToken = jwt.sign(
                {}, 'secret', { expiresIn: '1h' });

            console.log('token:' + jwtBearerToken);
            res.json(jwtBearerToken);
        }
        else{
            res.sendStatus(401); 
        }
    });
});

module.exports = router;