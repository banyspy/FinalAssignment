var express = require('express');
var router = express.Router();
const fs = require('fs');
const valueName = '../value.json';
const value = require(valueName);

router.get('/', function(req, res, next) {
    /*fs.readFile(valueName,'utf8',  err => {
      if (err) throw err;
      let value = JSON.parse(Total);
    });*/
    res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    res.json({"data": value.Total}); //please don't read the following line I was dumb res.json() is for sending a JSON response. https://expressjs.com/en/guide/routing.html
  }); //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

module.exports = router;