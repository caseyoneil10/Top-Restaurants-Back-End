const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    type: String,
    price: Number,
    image: String,
    hours: String,
    rank: Number,
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;