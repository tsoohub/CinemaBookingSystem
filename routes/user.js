var express = require('express');
var router = express.Router();
var User = require('../models/User.js');
var jwt = require('jsonwebtoken');


/* GET ALL USERS */
router.get('/', function(req, res, next) {
    User.find(function (err, users) {
        if (err) return next(err);
        res.json(users);
    });
});

router.post('/', function(req, res, next) {
    
    User.create(req.body, function (err, user) {
        if (err) return next(err);

        var jwtBearerToken = jwt.sign({}, 'secret', { expiresIn: '1h' });
        res.json({token:jwtBearerToken,loggedUser:user});
    });
});

module.exports = router;