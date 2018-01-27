var express = require('express');
var router = express.Router();

/* GET stories listing. */

//CURRENT TO GET WEBSITE RUNNING
router.get('/', function(req, res, next) {
  res.json([
    { id: 0, story_entry: 'Welcome to the Jungle' },
    { id: 1, story_entry: 'What is your name?' },
    { id: 2, story_entry: 'You enter the forest' },
    { id: 3, story_entry: 'Before you there is a fork in the path' },
    { id: 4, story_entry: 'A scary monster jumps out at you' },
    { id: 5, story_entry: 'You run for your life...' }
  ]);
});

router.get('/story', (req, res) => {
  res.json({
    story: 'All stories'
  });
});

router.get('/story/:storyId(\\d+)', (req, res) => {
  res.json({
    storyId: req.params.storyId
  });
});

router.get('/story/:storyId(\\d+)/entry', (req, res) => {
  res.json({
    storyId: req.params.storyId,
    entry: 'All entries for specific story'
  });
});

router.get('/story/:storyId(\\d+)/entry/:entryId(\\d+)', (req, res) => {
  res.json({
    storyId: req.params.storyId,
    entryId: req.params.entryId,
    pathId: checkForPath(req)
  });
});

router.get('/story/:storyId(\\d+)/entry/:entryId(\\d+)/alt', (req, res) => {
  res.json({
    storyId: req.params.storyId,
    entryId: req.params.entryId,
    alt: 'Show all alternative entries for given entry for a specific story',
    pathId: checkForPath(req)
  });
});

router.get(
  '/story/:storyId(\\d+)/entry/:entryId(\\d+)/alt/:storyvarId(\\d+)',
  (req, res) => {
    res.json({
      storyId: req.params.storyId,
      entryId: req.params.entryId,
      storyvarId: req.params.storyvarId,
      pathId: checkForPath(req)
    });
  }
);

function checkForPath(req) {
  let path;
  if (!req.query.path) {
    path = 0;
  } else {
    path = req.query.path;
  }
  return path;
}

module.exports = router;
