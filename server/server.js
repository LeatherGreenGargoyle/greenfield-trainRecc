var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var setupPassport = require('./passportSetup');
var path = require('path');
require('../db');

var bodyParser = require('body-parser');
var router = require('./routes');

var app = express();
app.use(express.static(path.join(__dirname, '../dist')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ 
  secret: 'trainrecc',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 6000000 }
}));
app.use(flash());
setupPassport(app);
app.use('/api', router);



var port = 80;
app.listen(process.env.PORT || port, function(){
  console.log('App listening on port', port);
});

