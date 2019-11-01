var express = require('express');
var router = express.Router();

var cache = require('express-redis-cache')();

var usersController = require('../controller/usersController');

router.route('/')
	.get(cache.route(), usersController.getUsers)
	.post(usersController.newUser)

router.route('/:userId')
	.get(usersController.getUser)
	.put(usersController.updateUser)
	.delete(usersController.removeUser)

module.exports = router;
