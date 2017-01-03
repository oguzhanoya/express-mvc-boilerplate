const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create a schema
const TodoSchema = new Schema({
  name: String,
  done: Boolean,
});

// create the model
const TodoModel = mongoose.model('Todo', TodoSchema);

// export the model
module.exports = TodoModel;
