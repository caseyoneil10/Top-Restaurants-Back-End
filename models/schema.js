const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    type: String,
    chef: String,
    image: String,
    rank: Number,
    show: Boolean,
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
