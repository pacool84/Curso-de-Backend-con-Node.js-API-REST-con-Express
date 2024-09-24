//Archivo principal donde se configuraran todas las rutas

const productsRouter = require('./products.router'); //Importamos las rutas de products
const usersRouter = require('./users.router'); //Importamos las rutas de users

function routerApi(app) {
  app.use('/products', productsRouter); //Definimos la ruta e importamos todo el modulo de rutas de products
  app.use('/users', usersRouter); //Definimos la ruta e importamos todo el modulo de rutas de users
}

module.exports = routerApi;
