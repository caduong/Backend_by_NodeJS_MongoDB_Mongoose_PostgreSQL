var express = require('express');
var router = express.Router();

// --------------------- Cookie------------------------------------------
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

// ---------------------Express Session--------------------------------------
router.get('/createSession', function(req, res, next){
  req.session.sessionOne = "this is a data";
  res.send("Created!!");
});

router.get('/getSession', function(req, res, next){
  res.send("Data: " + req.session.sessionOne);
});

router.get('/destroySession', function(req, res, next){
  req.session.destroy(function(err){
    console.log("err: " + err);
  });
  res.send("Destroy done!!!");
});

module.exports = router;
