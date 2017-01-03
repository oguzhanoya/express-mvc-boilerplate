const Mongoose = require('mongoose');
const config = require('./config');

Mongoose.connect(config.database.url);
const db = Mongoose.connection;

db.on('error', console.error.bind(console, `Connection error ${config.database.url}\n`));

db.once('open', () => {
  console.log('Connection with database succeeded.');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Connection disconnected through app termination.');
    process.exit(0);
  });
});

module.exports = db;
