var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/users', function(req, res, next) {
  res.render('index');
});

router.post('/post', function(req, res, next) {
  res.send('hello!');
});



module.exports = router;
