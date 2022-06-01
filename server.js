const mongoose = require ('mongoose');
const db = mongoose.connection;
const express = require ('express');
const app = express ();
const cors = require('cors');
const Restaurant = require('./models/schema.js')

require("dotenv").config()

app.use(express.json());
app.use(cors());

// Routes
app.post('/restaurants',(req, res) => {
  Restaurant.create(req.body, (err, createdRestaurant) => {
      res.json(createdRestaurant)
      console.log(err);
  })
})

app.get('/restaurants', (req, res) => {
  Restaurant.find({
  }).collation({'locale':'en'}).sort('rank').exec((err, foundRestaurant) => {
      res.json(foundRestaurant)
  })
})

app.delete('/restaurants/:id', (req, res) => {
  Restaurant.findByIdAndRemove(req.params.id, (err, deletedResaurant) => {
      res.json(deletedResaurant)
  })
})

app.put('/restaurants/:id', (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRestaurant) => {
        res.json(updatedRestaurant)
    })
})

const PORT = process.env.PORT || 3003;
const MONGODB_URI  = process.env.MONGODB_URI
const mongoURI = "mongodb://localhost:27017/"

// Connect to Mongo
mongoose.connect(MONGODB_URI, () => {
    console.log('Mongo live')
})
// mongoose.connect(mongoURI, () => {
//   console.log('Mongo live')
// });

// Listener
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('Mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('Mongo disconnected'));
