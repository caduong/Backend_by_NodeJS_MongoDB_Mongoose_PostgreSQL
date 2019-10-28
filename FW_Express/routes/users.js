var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource');

  var InfoPageUsers = {
    dataUser: ["Name", "ADDRESS", "NATI"],
    title: "USERS"
  };

  res.render('users', { pageUsers: InfoPageUsers });
});

module.exports = router;
