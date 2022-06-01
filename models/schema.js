const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    type: String,
    chef: String,
    image: String,
    rank: {type: Number, unique: true, message: 'Rank must be Unique'},
    show: Boolean,
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
