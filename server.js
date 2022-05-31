const MONGODB_URI  = process.env.MONGODB_URI
const mongoose = require ('mongoose');
const db = mongoose.connection;
const express = require ('express');
const app = express ();



const PORT = process.env.PORT || 3003;

require("dotenv").config()

app.get("/", (req, res) => {
    res.send("Hello World");
  })

// Connect to Mongo
mongoose.connect(MONGODB_URI, () => {
    console.log('whatever')
})

app.listen(PORT, () => console.log( 'Listening on port:', PORT));

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));
