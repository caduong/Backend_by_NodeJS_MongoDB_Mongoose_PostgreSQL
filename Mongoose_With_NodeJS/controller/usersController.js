var express = require('express');
var contactModel = require('../model/usersModel');

module.exports = {

	/* Get all users . */
	getUsers: async (req, res, next) => {
		const users = await contactModel.find({});
		res.status(200).json(users);
	},

	/* Add a users . */
	newUser: async (req, res, next) => {
		const newUser = new contactModel(req.body);
		const usersSaved = await newUser.save()
		res.status(200).json(usersSaved);
	},

	/* GET a users with ID . */
	getUser: async (req, res, next) => {
		const { userId } = req.params;
		const user = await contactModel.findById(userId);
		res.status(200).json(user);
	},

	// /* Remove a users . */
	removeUser: async (req, res, next) =>  {
		const { userId } = req.params;
		await contactModel.findByIdAndRemove(userId);
		res.status(200).send('Removed');
		
	},

	/* Update a users . */
	updateUser: async (req, res, next) => {
		const { userId } = req.params;
		const userUpdate = await contactModel.findByIdAndUpdate(userId, req.body);
		res.status(200).json(userUpdate);
	},

};


