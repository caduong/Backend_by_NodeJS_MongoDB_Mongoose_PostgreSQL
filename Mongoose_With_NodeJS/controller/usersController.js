var express = require('express');
var contactModel = require('../model/userModel');

var faker =require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomPhoneNumber = faker.phone.phoneNumberFormat();
var randomeUserName = faker.internet.userName();
var randomPassword = faker.internet.password();
var randomAvatar = faker.internet.avatar();
var randomCountry = faker.address.country();
var randomCountryCode = faker.address.countryCode();
var randomCity = faker.address.city();

module.exports = {

	/* Get all users . */
	getUsers: async (req, res, next) => {
		const users = await contactModel.find({});
		res.status(200).json(users);
	},

	/* Add a users . */
	// newUser: async (req, res, next) => {
	// 	const newUser = new contactModel(req.body);
	// 	const usersSaved = await newUser.save();
	// 	res.status(200).json(usersSaved);
	// },

	newUser: async (req, res, next) => {
		for(i = 0; i < 1; i++) {
			var newUser = new contactModel({
				name: faker.name.findName(),
				email: faker.internet.email(),
				country: faker.address.country(),
				countrycode: faker.address.countryCode(),
				city: faker.address.city(),
				phonenumber: faker.phone.phoneNumberFormat(),
				username: faker.internet.userName(),
				password: faker.internet.password(),
			});
			console.log("newUser: " + newUser)
			//var usersSaved = await newUser.save();
			
		}
		// const newUser = new contactModel({
		// 	name: randomName,
		// 	email: randomEmail,
		// 	phonenumber: randomPhoneNumber,
		// 	username: randomeUserName,
		// 	password: randomPassword,
		// });
		// console.log("newUser: " + newUser)
		// const usersSaved = await newUser.save();

		res.status(200).send("done")//.json(usersSaved);
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


