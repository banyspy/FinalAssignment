var express = require('express');
var router = express.Router();
const fs = require('fs');
const valueName = '../value.json';
const value = require(valueName);

router.get('/', function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000/'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    value.Total++; //increase the amount of clicks by one
    fs.writeFile(valueName, JSON.stringify(value, null, 2), err => {})
});

module.exports = router;
