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

//Todos los parametros recibidos por el metodo GET, se recibiran como tipo STRING
router.get('/:id', (req, res) => {
  const id = req.params.id;
  if (id === '666') {
    res.status(404).json({
      message: 'product NOT FOUND - Error 404',
    });
  } else {
    res.status(201).json({
      id,
      name: 'Product 2',
      price: 350,
    });
  }
});

//End Point para gestionar POST / Creacion de un producto
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'Product Created',
    data: body,
  });
});

//End Point para gestionar PATCH / actualizacion "parcial" de un producto
//La diferencia entre PUT y PATCH es que con PUR deberiamos de actualizar TODOS los atributos del objeto

router.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;

  res.json({
    message: 'Product Partial Updated',
    data: body,
    id,
  });
});

//End Point para gestionar DELETE

router.delete('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params;

  res.json({
    message: 'Product Deleted',
    id,
  });
});

module.exports = router; //Exportamos el router de este end point
