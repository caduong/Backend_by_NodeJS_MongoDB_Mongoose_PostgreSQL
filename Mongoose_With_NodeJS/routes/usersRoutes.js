var express = require('express');
var router = express.Router();

var usersController = require('../controller/usersController');
const { check, validationResult } = require('express-validator');
const validate  = require('../helpers/userHelpers');


router.route('/')
	.get(usersController.getUsers)
	.post( 
		[
			check('name').isEmail(), 
			check('card').isLength({min : 5})
		],
		validate.validateBody(),
		usersController.newUser)

router.route('/:userId')
	.get(usersController.getUser)
	.put(usersController.updateUser)
	.delete(usersController.removeUser)

module.exports = router;
