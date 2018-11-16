let mongoose = require('mongoose')

// persons Schema
let personSchema = mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
})

module.exports = mongoose.model('Preson', personSchema)