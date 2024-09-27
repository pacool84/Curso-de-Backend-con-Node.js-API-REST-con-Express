const express = require('express');
const ProductsService = require('./../Services/product.service');
const router = express.Router(); //Generamos un router para tener acceso a la app
const service = new ProductsService(); //Creamos una instancia del servicio

//Router especifico para nuestro products
router.get('/', (req, res) => {
  const products = service.find(); //Mandamos llamar el metodo find del servicio product.service.js
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//Todos los parametros recibidos por el metodo GET, se recibiran como tipo STRING
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
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
