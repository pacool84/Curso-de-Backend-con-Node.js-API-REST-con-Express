const express = require('express');
const roputer = express.Router;
const faker = require('faker');
const router = require('./products.router');

router.get('/users', (req, res) => {
  //Utilizamos el metodo query para recabar los query params
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send('No hay QUERY PARAMS');
  }
});

module.exports = router;
