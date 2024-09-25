const express = require('express');
const faker = require('faker');
const router = express.Router(); //Generamos un router para tener acceso a la app

//Router especifico para nuestro products
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query; //http://localhost:3000/products?size=1000
  const limit = size || 10;
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

//End Point para gestionar POST / Creacion de un producto
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

module.exports = router; //Exportamos el router de este end point
