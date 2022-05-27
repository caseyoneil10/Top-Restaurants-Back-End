const MONGODB_URI  = process.env.MONGODB_URI
const mongoose = require ('mongoose');
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(MONGODB_URI  ,  { useNewUrlParser: true});

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));