const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const Car = require('./carModel');



const userSchema = new Schema({
    name: String,
    email: String,
    country: String,
    countrycode: String,
    city: String,
    phonenumber: String,
    username: String,
    password: String,
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]
}, { collection: 'listUser' });

module.exports = mongoose.model('userModel', userSchema);

/*
{
    firstName: String,
    lastName: String,
    email: String,
    cars:
}

*/