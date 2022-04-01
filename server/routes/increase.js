var express = require('express');
var router = express.Router();
var fs = require('fs');
var valueName = '../value.json';
var value = require(valueName);

router.get('/', function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', 'application/json');
    value.Total+=1; //increase the amount of clicks by one
    (async() => {await fs.writeFile(valueName, JSON.stringify(value, null, 2), err => {})})();
});

module.exports = router;