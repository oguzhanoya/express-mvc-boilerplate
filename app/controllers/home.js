var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');
var Utils = require('../helpers/utils');

// get home page
router.get('/', (req, res, next) => {
    // generate a new name
    var name = Utils.randomString(5);

    // new todo model
    var todo = new Todo({ name: name, done: false });
    todo.save();

    res.render('index', { title: 'Express' });
});

module.exports = router;