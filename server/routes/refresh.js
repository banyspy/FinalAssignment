var express = require('express');
var router = express.Router();
const valueName = '../value.json';
const value = require(valueName);

router.get('/', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.json({data: value.Total});
  }); //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

module.exports = router;