var express = require('express');
var router = express.Router();
var contactModel = require('../model/listUser')

/* GET users listing. */
router.get('/', function (req, res, next) {
   contactModel.find({}, function (err, data) {
      console.log(data);
   });
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