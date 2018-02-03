var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('book called!!!!!!!!!');
  res.send('Express RESTful API');
});

module.exports = router;