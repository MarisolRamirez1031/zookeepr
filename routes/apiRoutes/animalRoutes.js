const router = require('express').Router();

const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');

const { animals } = require('../../data/animals');


router.get('/animals', (req, res) => {
    let results = animals;
    // calling back filterByQuery function 
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });
  
  // new GET rout for animals using param obj
  // param route must come after the other GET route
  router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
  
  // app.post setting up route on our server that accepts data to be used or stored server-side
  router.post('/animals', (req, res) => {
      // set id based on what the next index of the array will be
      req.body.id = animals.length.toString();
  
      // if any data in req.body is incorrect, send 400 error back
      if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
      } else {
      // add animal to json file and animals array in this function
      const animal = createNewAnimal(req.body, animals);
      res.json(req.body);
      }
  });
  
  
  module.exports  = router;