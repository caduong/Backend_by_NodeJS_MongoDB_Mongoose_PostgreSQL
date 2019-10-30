var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
var convertObjectID = require('mongodb').ObjectID;

const assert = require('assert');

// Create path to Database
const url = 'mongodb://localhost:27017';

// Set name of Database
const dbName = 'contact';

const collectionName = 'listUser';

/* GET users listing. */
router.get('/', function (req, res, next) {
   //res.send('This is a User page. Here is data from add user: ');  
   //! findDocuments
   const findDocuments = function (db, callback) {
      // Get the documents collection
      const collection = db.collection('listUser');
      // Find some documents
      collection.find({}).toArray(function (err, docs) {
         assert.equal(err, null);
         console.log("Found the following records");
         res.status(200).json(docs);
         callback(docs);
      });
   };

   //! Use connect method to connect to the server 
   MongoClient.connect(url, function (err, client) {
      assert.equal(null, err);
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      findDocuments(db, function () {
         client.close();
      });
   });
});

router.post('/', function (req, res, next) {
   var data = req.body;
   //req.session.dataName = data;
   //res.send("Data: " + JSON.stringify(data));

   //! insertDocuments
   const insertDocuments = function (db, callback) {
      // Get the documents collection
      const collection = db.collection('listUser');
      // Insert some documents
      collection.insert(data, function (err, result) {
         assert.equal(err, null);
         console.log("Add data done!");
         callback(result);
      });
   }

   //! Use connect method to connect to the server
   MongoClient.connect(url, function (err, client) {
      assert.equal(null, err);
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      insertDocuments(db, function () {
         client.close();
      });
   });
   res.redirect('/users');

});

router.get('/remove/:ID', function (req, res, next) {
   var objectid = convertObjectID(req.params.ID);
   //! Remove
   const removeDocument = function (db, callback) {
      // Get the documents collection
      const collection = db.collection(collectionName);
      // Delete document where a is 3
      collection.deleteOne({ _id: objectid }, function (err, result) {
         assert.equal(err, null);
         assert.equal(1, result.result.n);
         console.log("Removed complete!!!");
         callback(result);
      });
   }

   //! Use connect method to connect to the server
   MongoClient.connect(url, function (err, client) {
      assert.equal(null, err);
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      removeDocument(db, function () {
         client.close();
      });
   });
   res.redirect('/users');

});

router.get('/:ID', function (req, res, next) {
   var objectid = convertObjectID(req.params.ID);
   //! findDocuments
   const findDocuments = function (db, callback) {
      // Get the documents collection
      const collection = db.collection('listUser');
      // Find some documents
      collection.find({ _id: objectid }).toArray(function (err, docs) {
         assert.equal(err, null);
         console.log("Found the following records");
         res.status(200).json(docs);
         callback(docs);
      });
   };

   //! Use connect method to connect to the server 
   MongoClient.connect(url, function (err, client) {
      assert.equal(null, err);
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      findDocuments(db, function () {
         client.close();
      });
   });
});

router.post('/:ID', function (req, res, next) {
   var objectid = convertObjectID(req.params.ID);
   var data = req.body;

   //! updateDocuments
   const updateDocument = function (db, callback) {
      // Get the documents collection
      const collection = db.collection(collectionName);
      // Update document where a is 2, set b equal to 1
      collection.updateOne({ _id: objectid }
         , { $set: data }, function (err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
         });
   }

   //! Use connect method to connect to the server
   MongoClient.connect(url, function (err, client) {
      assert.equal(null, err);
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      updateDocument(db, function () {
         client.close();
      });
   });
   res.redirect('/users/' + req.params.ID);

});

module.exports = router;
