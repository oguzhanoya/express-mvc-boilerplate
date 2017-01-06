const express = require('express');

const router = express.Router();

const Todo = require('../models/todo');
const Utils = require('../helpers/utils');

// get home page
router.get('/', (req, res, next) => {
  // generate a new name
  const name = Utils.randomString(5);

  // new todo model
  const newTodo = new Todo({ name, done: false });

  newTodo.save()
    .then((todo) => { console.log(`Success! ${todo.name} saved! \n${todo}`); })
    .catch((err) => { console.log(err); });

  res.render('index', { title: 'Express' });
});

module.exports = router;
