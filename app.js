var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var book = require('./routes/book');
var user = require('./routes/user');
var login = require('./routes/login');
var movie = require('./routes/movie');
var order = require('./routes/order');
var cors = require('cors');
var jwt = require('express-jwt');

var app = express();
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost/cinema', { promiseLibrary: require('bluebird') })
mongoose.connect('mongodb://mwa:mwa@ds125578.mlab.com:25578/cinema', { promiseLibrary: require('bluebird') })

  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(cors());

/*Molomjamts 02/05/2018
 JWT implementation. checking token to access some URL using JWT express.
 if token is valid it will access to URL*/
const authCheck = jwt({secret:'secret'});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/login', login);
app.use('/user',  user);
app.use('/signup', user);
app.use('/movie', authCheck, movie);
app.use('/order', authCheck, order);

app.use('*', function (req, res) {
  res.send('Hello');
  res.end();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (req, res, next) {
  var err = new Error('Unauthorized!');
  err.status = 401;
  res.json(err);
});
// error handler
app.use(function (err, req, res, next) {

  // render the error page
  res.status(err.status || 500);
  if (err.status == 401) {
    res.json(err);
  }
  else if (err.status == 404) {
    res.json({ error: 'page not found!' });
  } else {
    res.json('internal error');
  }
});

app.listen(3000);
