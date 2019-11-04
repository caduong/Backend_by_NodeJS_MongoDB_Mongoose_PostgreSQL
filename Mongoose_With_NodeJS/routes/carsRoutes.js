var express = require('express');
var router = express.Router();

var carsController = require('../controller/carsController');
const { check, validationResult } = require('express-validator');
const validate  = require('../helpers/userHelpers');


router.route('/')
	.get(carsController.getCars)
	.post( 
		[
			check('make').isString(),
			check('model').isString(),
			check('year').isInt()
		],
		validate.validateBody(),
		carsController.newCar)

router.route('/:carId')
	.get(carsController.getCar)
	// .put(usersController.updateUser)
	.delete(carsController.removeCar)

module.exports = router;
