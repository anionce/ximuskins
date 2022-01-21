var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('this is the feedbacklover page');
});

module.exports = router;
