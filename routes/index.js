var express = require("express");
var router = express.Router();

// OLD /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});

module.exports = router;
