var express = require('express');
var router = express.Router();

/* //! Setup, define and connect with MongoDB 
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Create path to Database
const url = 'mongodb://localhost:27017';

// Set name of Database
const dbName = 'contact';

// Connect with Database
MongoClient.connect(url, function(err,client){
  assert.equal(null, err);
  console.log("Database connect complete!!!");
  const db = client.db(dbName);

  client.close();
}); 
 *///! ----------------------------------------------------------------------


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
