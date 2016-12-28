var Mongoose = require('mongoose');
var config = require('./config');

Mongoose.connect(config.database.url);
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error ' + config.database.url + '\n'));

db.once('open', function callback() {
    console.log('Connection with database succeeded.');
});

process.on('SIGINT', function() {
    db.close(function() {
        console.log('Connection disconnected through app termination.');
        process.exit(0);
    });
});

module.exports = db;