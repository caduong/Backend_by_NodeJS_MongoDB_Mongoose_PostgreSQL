var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Create path to Database
const url = 'mongodb://localhost:27017';

// Set name of Database
const dbName = 'contact';


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('This is a User page. Here is data from add user: ');  
});

router.post('/', function(req, res, next) {
  var data = req.body;
  //req.session.dataName = data;
  //res.send("Data: " + JSON.stringify(data));
  
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('listUser');
    // Insert some documents
    collection.insert(data, function(err, result) {
      assert.equal(err, null);
      console.log("Add data done!");  
      callback(result);
    });
  }

    // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    insertDocuments(db, function() {
      
        client.close();
      
    });
  });
  res.redirect('/');
});

module.exports = router;
