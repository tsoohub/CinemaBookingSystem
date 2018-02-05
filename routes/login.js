const express = require('express');
const router = require('express').Router();
var User = require('../models/User.js');
var jwt = require('jsonwebtoken');


router.post('/', (req, res, next) => {
    console.log('comingRq:'+req.body.username);
    console.log(req.headers);
    User.findOne({ username: req.body.username, password: req.body.password }, function (err, user) {
        var jwtBearerToken;
        if (user != null) {
            jwtBearerToken = jwt.sign(
                {}, 'secret', { expiresIn: '1h' });
            res.json({ token: jwtBearerToken, loggedUser: user });
        }
        else {
            res.sendStatus(401);
        }
    });
});

module.exports = router;