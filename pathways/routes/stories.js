var express = require('express');
var router = express.Router();

/* GET stories listing. */
router.get('/', function(req, res, next) {
	res.json([
		{id: 0, story_entry: 'Welcome to the Jungle'},
		{id: 1, story_entry: 'What is your name?'},
		{id: 2, story_entry: 'You enter the forest'},
		{id: 3, story_entry: 'Before you there is a fork in the path'}
	]);
});

module.exports = router;