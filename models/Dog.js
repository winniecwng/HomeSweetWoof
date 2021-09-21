const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  description: {
      type: String,
      required: false
  },
  photo: {
    type: Array,
    required: false
  }
});

module.exports = Dog = mongoose.model('dogs', DogSchema);