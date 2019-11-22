var express = require('express');
var contactModel = require('../model/userModel');

var faker =require('faker');

module.exports = {

	/* Get all users . */
	getUsers: async (req, res, next) => {
		const users = await contactModel.find({});
		res.status(200).json(users);
	},

	/* Add a users . */
	newUser: async (req, res, next) => {
		const newUser = new contactModel(req.body);
		const usersSaved = await newUser.save();
		res.status(200).json(usersSaved);
	},

	// newUser: async (req, res, next) => {
	// 	for(i = 0; i < 799; i++) {
	// 		var newUser = new contactModel({
	// 			name: faker.name.findName(),
	// 			email: faker.internet.email(),
	// 			country: faker.address.country(),
	// 			countrycode: faker.address.countryCode(),
	// 			city: faker.address.city(),
	// 			phonenumber: faker.phone.phoneNumberFormat(),
	// 			username: faker.internet.userName(),
	// 			password: faker.internet.password(),
	// 		});
	// 		console.log("newUser: " + newUser)
	// 		var usersSaved = await newUser.save();
			
	// 	}
	// 	res.status(200).send("done");
	// },

	/* GET a users with ID . */
	getUser: async (req, res, next) => {
		// http://localhost:3000/users/5dd2042a5e9d2c3c43797da1-CAOANHDUONG-123456
		// ,"username":"Jamey_Rippin32","password":"ryb_hIEs2oy7hKs"
		const { userId } = req.params;
		const { userName } = req.params;
		const { passWord } = req.params;
		const user = await contactModel.findById(userId);
		if ((JSON.stringify(userName) == JSON.stringify(user.username)) && (JSON.stringify(passWord) == JSON.stringify(user.password))) {
			res.status(200).json(user);
		} 
		else {
			res.status(200).send("info False!");	
		}
	},

	// /* Remove a users . */
	removeUser: async (req, res, next) =>  {
		const { userId } = req.params;
		await contactModel.findByIdAndRemove(userId);
		//await contactModel.remove();
		res.status(200).send('Removed');
		
	},

	/* Update a users . */
	updateUser: async (req, res, next) => {
		const { userId } = req.params;
		const userUpdate = await contactModel.findByIdAndUpdate(userId, req.body);
		res.status(200).json(userUpdate);
	},
};


