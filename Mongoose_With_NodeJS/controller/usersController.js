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
		const user = await contactModel.findById(req.params.ID);
		res.status(200).json(user);
	},

	// /* Remove a users . */
	removeUser: async (req, res, next) =>  {
		await contactModel.findByIdAndRemove(req.params.ID);
		res.status(200).send('Removed');
	},

	/* Update a users . */
	updateUser: async (req, res, next) => {
		const userUpdate = await contactModel.findByIdAndUpdate(req.params.ID, req.body);
		res.status(200).json(userUpdate);
	},

};


