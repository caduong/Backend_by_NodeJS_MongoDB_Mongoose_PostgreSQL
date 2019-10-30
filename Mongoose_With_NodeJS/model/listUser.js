const mongoose = require('mongoose');
var listUser = new mongoose.Schema({name : 'string', card : 'number'}, {collection:'listUser'});

module.exports = mongoose.model('listUSer', listUser);