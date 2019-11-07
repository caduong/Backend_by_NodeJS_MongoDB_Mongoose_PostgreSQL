var express = require('express');
var carModel = require('../model/carModel');
var userModel = require('../model/userModel');

module.exports = {

	/* Get all cars . */
	getCars: async (req, res, next) => {
		const cars = await carModel.find({});
		res.status(200).json(cars);
	},

	/* Add a car . */
	newCar: async (req, res, next) => {
		const userPick = await userModel.findById(req.body.seller);
		const newCar = req.body;
		delete newCar.seller;
		const car = new carModel(newCar)
		car.seller = userPick;
		await car.save();
		userPick.cars.push(car);
		await userPick.save();
		res.status(200).json(car);
	},

	/* GET a car with ID . */
	getCar: async (req, res, next) => {
		const { carId } = req.params;
		const car = await carModel.findById(carId);
		res.status(200).json(car);
	},

	// /* Remove a car . */
	removeCar: async (req, res, next) =>  {
		const { carId } = req.params;
		await carModel.findByIdAndRemove(carId);
		res.status(200).send('Removed');
	},

	/* Update a car . */
	updateUser: async (req, res, next) => {
		const { carId } = req.params;
		const carUpdate = await carModel.findByIdAndUpdate(carId, req.body);
		res.status(200).json(carUpdate);
	},
};


