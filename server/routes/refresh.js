var express = require('express');
var router = express.Router();
import VALUE from "../value.json";

router.get('/refresh', function(req, res,next) {
    res.json({data: VALUE.Total});
  }); //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

module.exports = router;