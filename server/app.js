var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter     = require('./routes/index');
var usersRouter     = require('./routes/users');
var increaseRouter  = require('./routes/increase');
var refreshRouter   = require('./routes/refresh');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(cors({
  origin: 'http://localhost:3000/'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/increase', increaseRouter);
app.use('/refresh', refreshRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//Old code is here!!
/*
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const app = express()
const port = 8080


let total = 0; //total amount of clicks

app.post('/increase', (req, res)=>{
    total++; //increase the amount of clicks by one
})

app.post('/refresh', (req, res)=>{
  res.json({data:total})
}) //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) //default logging 

*/
