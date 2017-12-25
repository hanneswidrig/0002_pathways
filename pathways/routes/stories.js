var express = require('express');
var router = express.Router();

/* GET stories listing. */
router.get('/', function(req, res, next) {
	res.json([{id: 1, story_entry: "..."}]);
});

module.exports = router;