var express = require('express');
var router = express.Router();

var timestampParser = require("../service/timestampParser");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {});
});

router.get('/:timestamp', function (req, res, next) {
    var timestamp = req.params.timestamp;
    res.send(timestampParser(timestamp));
});

module.exports = router;
