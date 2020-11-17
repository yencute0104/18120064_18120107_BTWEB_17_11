var express = require('express');
var router = express.Router();
const bookController = require('../controllers/bookController');

/* GET list of books. */
router.get('/', bookController.index);

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('books/list', { title: 'Trang chủ' });
// });

module.exports = router;
