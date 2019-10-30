var express = require('express');
var router = express.Router();
var contactModel = require('../model/listUser')

/* GET all users . */
router.get('/', function (req, res, next) {
	contactModel.find({}, function (err, data) {
		res.status(200).json(data);
	});
});

/* GET a users with ID . */
router.get('/:ID', function (req, res, next) {
	contactModel.findById(req.params.ID, function (err, data) {
		res.status(200).json(data);
	});
});

/* Remove a users . */
router.get('/remove-user/:ID', function (req, res, next) {
	contactModel.findByIdAndRemove(req.params.ID, function (err, data) { 
		res.status(200).redirect('/users');
	});
});

/* Update a users . */
router.post('/:ID', function (req, res, next) {
	contactModel.findByIdAndUpdate(req.params.ID,req.body,function (err, data) { // data is user updated new info.
		res.status(200).redirect('/users/'+ req.params.ID);
	});
});

/* Add a users . */
router.post('/', function (req, res, next) {
	contactModel.insertMany(req.body,function (err, data) {
		console.log("add a users: "+ data);
		res.status(200).redirect('/users');
	});
	// contactModel = json(req.body);
	
	// contactModel.save();
});



module.exports = router;

// app.delete("/notesapi/:tabID", (request, response) => {
//    NotesModel.findByIdAndRemove(request.params.tabID, (error, data) => {
//       if (error) {
//          console.log("error in deleting yo!");
//          throw error;
//       } else {
//          console.log("data all gone and deleted yo");
//          response.status(204);

//       }
//    });
// });