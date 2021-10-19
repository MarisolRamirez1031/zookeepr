const path = require('path');

const router = require('express').Router();
  
  // getting index.html
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
  
  // route to animals.html
  router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
  });
  
  // route to zookeepers.html
  router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
  });
  
  // wildcard route
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });


  module.exports = router;