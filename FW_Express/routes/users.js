var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/name/:xxx', function (req, res, next) {
  //res.send('respond with a resource');
  res.cookie('abc', req.params.xxx)
  var InfoPageUsers = {
    dataUser: ["Name", "ADDRESS", "NATI"],
    title: "USERS"
  };

  res.render('users', { pageUsers: InfoPageUsers });
});

router.get('/old', function(req, res, next){
  res.send("Value cookies: " + req.cookies.abc);
});

router.get('/addres', function(req, res, next){
  res.clearCookie('abc');
  res.send("Deleted");
});

module.exports = router;
