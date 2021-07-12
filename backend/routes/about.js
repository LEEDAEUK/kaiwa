'use strict'
let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('about');
});

module.exports = router;
