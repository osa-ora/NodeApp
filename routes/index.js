var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.guest==null) req.session.guest='Osama '+random(1,10);
  res.render('index', { title: 'HR Express','guest':req.session.guest });
});

module.exports = router;

function random (low, high) {
	return Math.floor(Math.random() * (high - low + 1) + low);
}