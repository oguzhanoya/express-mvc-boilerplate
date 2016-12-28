var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var TodoSchema = new Schema({
    name: String,
    done: Boolean
});

// create the model
var TodoModel = mongoose.model('Todo', TodoSchema);

// export the model
module.exports = TodoModel;