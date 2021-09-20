const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Dog = require('../../models/Dog');
const validateDogInput = require('../../validation/dogs');

router.get('/', (req, res) => {
    Dog.find()
        .then(dogs => res.json(dogs))
        .catch(err => res.status(404).json({ nodogssfound: 'No dogs found' }));
});

router.get('/user/:user_id', (req, res) => {
    Dog.find({user: req.params.user_id})
        .then(dogs => res.json(dogs))
        .catch(err =>
            res.status(404).json({ nodogsfound: 'No dogs found from that user' }
        )
    );
});

router.get('/:id', (req, res) => {
    Dog.findById(req.params.id)
        .then(dog => res.json(dog))
        .catch(err =>
            res.status(404).json({ nodogfound: 'No dog found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateDogInput(req.body);
  
      if (!isValid) {
        return res.status(400).json(errors);
      }
  
      const newDog = new Dog({
        name: req.body.name,
        breed: req.body.breed,
        gender: req.body.gender,
        age: req.body.age,
        user_id: req.body.user_id
      });
  
      newDog.save().then(dog => res.json(dog));
    }
  );

  router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      Dog.findById(req.params.id)
        .then()
    }
  );

  module.exports = router;

  router.get('/:id', (req, res) => {
    Dog.findById(req.params.id)
        .then(dog => res.json(dog))
        .catch(err =>
            res.status(404).json({ nodogfound: 'No dog found with that ID' })
        );
});