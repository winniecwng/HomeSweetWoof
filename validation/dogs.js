const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateDogInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.breed)) {
    errors.breed = 'Breed field is required';
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender field is required';
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = 'Age field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};