const mongoose = require('mongoose')

// Models are fancy constructors compiled from Schema definitions
// setting up constructor in mongoose to set initial values and types for documents
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'], // these all are properties of name object
  },
  lname : {
    type: String
  },

  midname : {
    type: String
  },

  completed: {
    type: Boolean,
    // default: false,
  },
})

module.exports = mongoose.model('Task', TaskSchema) // parameters are name given to model and schema
// goto controllers task add start adding documents

// An instance of a model is called a document