const express = require('express');
// const mongo = require("mongoskin");
const router = require('express').Router();

// // var db = mongo.db("mongodb://localhost:27017/cinema", { native_parser: true });

// router.post('/', (req, res,next) => {
//     console.log('startiiiiiiiiiiiiiiiiiiiing');
//     // res.send('Express RESTful LOGIN');
//     // var user = db.collection('user').find({ username: req.body.username, password: req.body.password });
//     db.collection('address').find({username: req.body.username}, { name: 1, category: 1, longitude: 1, latitude: 1 }).toArray((err, result) => {
//         if (err) throw err;
//         res.json(result);
//         console.dir("Success" + JSON.stringify(result));
//         return db.close();
//     });
//     // console.log('found!!!!!!!!!!!!!!!!!!!!!!!!');
//     // console.log('found!!!!!!!!!!!!!!!!!!!!!!!!'+req.body.username +"password:"+req.body.password);
//     // var jwtBearerToken="okk";
//     if (user) {
//         console.dir("user:"+user);
//         // jwtBearerToken= jwt.sign({}, 'RSA_PRIVATE_KEY', {
//         //     algorithm: 'RS256',
//         //     expiresIn: 120,
//         //     subject: user._id
//         // });
//         res.json(jwtBearerToken);
//     }
//     else {
//         console.log("user not found!");
//         res.json("d");
//     }
// });

// // function login(req, res) {
// //     var user=db.collection('user').findOne({username:req.username, password:req.password});
// //     if(user){
// //         const jwtBearerToken = jwt.sign({}, 'RSA_PRIVATE_KEY', {
// //             algorithm: 'RS256',
// //             expiresIn: 120,
// //             subject: userId
// //         }
// //     }
// //     else{
// //         res.sendsta
// //     }
// // }

module.exports = router;