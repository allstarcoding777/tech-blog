// require express
const router = require('express').Router();

// get and render all of the posts
router.get('/', async (req, res) => {
  res.render('all');
});

// export the router
module.exports = router;
