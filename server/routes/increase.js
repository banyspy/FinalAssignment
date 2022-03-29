var express = require('express');
var router = express.Router();
import VALUE from "../value.json";

router.get('/increase', function(req, res,next){
    VALUE.Total++; //increase the amount of clicks by one
});

module.exports = router;
