var express = require('express');
var router = express.Router();

var usersController = require('../controller/usersController');
var carsController = require('../controller/carsController');
const { check, validationResult } = require('express-validator');
const validate  = require('../helpers/userHelpers');

router.route('/')
	.get(usersController.getUsers)
	.post( 
		// [
		// 	check('name').isString(),
		// 	check('email').isEmail() 
		// ],
		// validate.validateBody(),
		usersController.newUser)

router.route('/:userId')
	.get(usersController.getUser)
	.put(usersController.updateUser)
	.delete(usersController.removeUser)
	
router.route('/:userId/car-:carId')
	.get(carsController.getCar)
	

module.exports = router;
