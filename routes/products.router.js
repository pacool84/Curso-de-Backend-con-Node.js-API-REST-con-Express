const express = require('express');
const ProductsService = require('./../Services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../schemas/product.schema');
const router = express.Router(); //Generamos un router para tener acceso a la app
const service = new ProductsService(); //Creamos una instancia del servicio

//Router especifico para nuestro products
router.get('/', async (req, res) => {
  const products = await service.find(); //Mandamos llamar el metodo find del servicio product.service.js
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

//Todos los parametros recibidos por el metodo GET, se recibiran como tipo STRING
router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error); //Aqui hacemos de manera explicita que vaya y ejecute los Middlewares de tipo error
    }
  },
);

//End Point para gestionar POST / Creacion de un producto
router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  },
);

//End Point para gestionar PATCH / actualizacion "parcial" de un producto
//La diferencia entre PUT y PATCH es que con PUR deberiamos de actualizar TODOS los atributos del objeto

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      const product = await service.update(id, body);

      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

//End Point para gestionar DELETE

router.delete('/:id', async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const rta = await service.delete(id);

  res.json(rta);
});

module.exports = router; //Exportamos el router de este end point
