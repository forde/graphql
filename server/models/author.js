const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const autchorSchema = new Schema({
    name: String,
    age: Number,
});

module.exports = mongoose.model('Author', autchorSchema);