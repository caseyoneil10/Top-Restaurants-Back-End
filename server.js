
const mongoose = require ('mongoose');
const db = mongoose.connection;
const express = require ('express');
const app = express ();

require("dotenv").config()

const PORT = process.env.PORT || 3003;
// const MONGODB_URI  = process.env.MONGODB_URI
const mongoURI = "mongodb://localhost:27017/"

// Connect to Mongo
// mongoose.connect(MONGODB_URI, () => {
//     console.log('Mongo live')
// })
mongoose.connect(mongoURI, () => {
  console.log('Mongo live')
});



app.get("/", (req, res) => {
    res.send("Hello World");
  })




app.listen(PORT, () => console.log( 'Listening on port:', PORT));

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
