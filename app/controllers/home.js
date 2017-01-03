const express = require('express');

const router = express.Router();

const Todo = require('../models/todo');
const Utils = require('../helpers/utils');

// get home page
router.get('/', (req, res, next) => {
  // generate a new name
  const name = Utils.randomString(5);

  // new todo model
  const todo = new Todo({ name, done: false });
  todo.save();

  res.render('index', { title: 'Express' });
});

module.exports = router;
