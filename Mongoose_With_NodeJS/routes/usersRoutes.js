var express = require('express');
var router = express.Router();
var usersController = require('../controller/usersController');

router.route('/')
	.get(usersController.getUsers)
	.post(usersController.newUser)

router.route('/:ID')
	.get(usersController.getUser)
	.put(usersController.updateUser)
	.delete(usersController.removeUser)

module.exports = router;
