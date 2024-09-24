const express = require('express');
const router = express.Router; //Generamos un router para tener acceso a la app
const faker = require('faker');

//Router especifico para nuestro products
router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const products = [];
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  res.json({
    id,
    name: 'Product 2',
    price: 350,
  });
});

module.exports = router; //Exportamos el router de este end point
