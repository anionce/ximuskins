var express = require("express");
var router = express.Router();

/* GET fear to fail listing. */
router.get("/", function (req, res, next) {
  res.send(
    "This is the Fear to Fail Area. There's no space for cowards in here"
  );
});

module.exports = router;
