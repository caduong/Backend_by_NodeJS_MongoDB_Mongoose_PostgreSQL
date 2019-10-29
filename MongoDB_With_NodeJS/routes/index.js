var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'cad';

MongoClient.connect(url, function(err,client){
  assert.equal(null, err);
  console.log("Connect complete!");

  const db = client.db(dbName);
  client.close();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
