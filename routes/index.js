//Archivo principal donde se configuraran todas las rutas
const express = require('express');
const productsRouter = require('./products.router'); //Importamos las rutas de products
const usersRouter = require('./users.router'); //Importamos las rutas de users

function routerApi(app) {
  //Generando una ruta maestra o global
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter); //Definimos la ruta e importamos todo el modulo de rutas de products
  router.use('/users', usersRouter); //Definimos la ruta e importamos todo el modulo de rutas de users
}

module.exports = routerApi;
