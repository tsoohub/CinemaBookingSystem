var express = require('express');
var router = express.Router();

/* GET home page Tsoodol 02/06/2018 */
router.get('/', function(req, res, next) {
  console.log('book called!!!!!!!!!');
  res.send('Express RESTful API');
});

module.exports = router;