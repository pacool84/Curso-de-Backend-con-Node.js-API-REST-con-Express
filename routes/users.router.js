const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //Utilizamos el metodo query para recabar los query params
  const { limit, offset } = req.query; //http://localhost:3000/users?limit=13&offset=200
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send('No hay QUERY PARAMS');
  }
});

module.exports = router;
