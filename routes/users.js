var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('emp', { title: 'HR Express','guest':req.session.guest, number: req.query.emp_num, name: 'Osama Oransa', position: 'PaaS Expert' });
});

module.exports = router;
