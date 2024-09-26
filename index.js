const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Servidor Express Conectado');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});
routerApi(app);
app.listen(port, () => {
  console.log('Servidor escuchando en http://localhost:' + port);
});

/* // Importamos la librería de Express para crear un servidor web de manera sencilla
const express = require('express');

// Inicializamos la aplicación Express, que será la base de nuestro servidor
const app = express();

// Definimos el puerto en el que nuestra aplicación va a escuchar
// El puerto 3000 es común para desarrollo, pero en producción es importante
// usar variables de entorno para puertos configurables
const port = 3000;

//Importamos la libreria FAKER para generar informacion DUMMY en nuestra aplicacion
//const faker = require('faker');

//const { faker } = require('@faker-js/faker');

//Exportamos la funcion que gestionas TODAS las rutas de nuestra app
const routerApi = require('./routes/index.js');

routerApi(app); //PASAMOS LA APP A NUESTRO ROUTER PRINCIPAL

//Implementando MIDDLEWARE nativo de express para trabajar con JSON y metodo POST
app.use(express.json());

// Definimos una ruta GET para el endpoint raíz ('/')
// Esta es la ruta básica que el servidor responderá cuando se acceda al dominio principal
// 'req' representa el objeto de la solicitud (request) y 'res' representa el objeto de la respuesta (response)
app.get('/', (req, res) => {
  // Respondemos con un mensaje al cliente que realice una solicitud a '/'
  res.send('Servidor Express Conectado');
});

// Hacemos que la aplicación escuche en el puerto definido
// Cuando el servidor esté corriendo, ejecutará el callback para mostrar un mensaje en la consola
app.listen(port, () => {
  // Aquí se imprime un mensaje indicando que el servidor está corriendo y en qué URL puede accederse
  // El `http://localhost:` indica que el servidor está corriendo localmente
  console.log('Servidor escuchando en http://localhost:' + port);
});

// Routing o rutas en Express:
// Las rutas en Express nos permiten manejar diferentes URLs/endpoints
// y definir cómo el servidor responde a las solicitudes HTTP (GET, POST, PUT, DELETE, etc.).

// Definiendo nuevas rutas o endpoints:

// Ruta GET para el endpoint '/nueva-ruta'
// Cuando un cliente acceda a este endpoint, el servidor responderá con un mensaje de texto
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola esta es mi nueva ruta');
  // El método send() envía una respuesta de texto simple al cliente.
});

/* // Ruta GET para el endpoint '/products'
// Aquí el servidor responde con un objeto JSON, que es un formato estándar para estructurar datos.
// Los datos JSON son muy utilizados en APIs porque son fáciles de leer y procesar por máquinas y humanos.
app.get('/products', (req, res) => {
  const { size } = req.query; //Obtenemos query params para poder controlar la cantidad de resultados en este end point
  const limit = size || 10; //Definimos por default solo mostrar 10 productos
  //Generamos la información DUMMY de nuestra app
  const products = [];
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
  // El método json() envía una respuesta en formato JSON, muy útil cuando trabajamos con APIs.
  // En este caso estamos enviando un objeto con los datos de un producto.
});

app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});

// Definimos un endpoint para obtener el detalle de un producto específico
// La sintaxis ":id" indica que estamos utilizando un parámetro en la URL,
// es decir, un valor dinámico que será proporcionado por el cliente
app.get('/products/:id', (req, res) => {
  // Obtenemos el valor del parámetro "id" desde la solicitud (req.params.id)
  const id = req.params.id;
  // Alternativamente, podríamos usar la desestructuración de objetos para obtener el parámetro "id"
  // const { id } = req.params;

  // Devolvemos una respuesta en formato JSON con el ID del producto solicitado y otros detalles
  res.json({
    id,
    name: 'Product 2', // En un caso real, estos datos serían extraídos de una base de datos
    price: 350,
  });
}); */

//Caso de uso, ERROR muy comun en ROUTING
//En este caso filter lo esta tomando como un parametro
//Para resolver este caso se debe de considerar "LO ESPECIFICO SIEMPRE ANTES DE LO DINAMICO"
//Por lo que este end point deberia de colocarse antes que el end point app.get('/products/:id', (req, res) => {}
/* app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
}); */

// Definimos un endpoint más complejo que devuelve productos asociados a una categoría específica
// En este caso, la URL maneja dos parámetros dinámicos: categoryId y productId
/* app.get('/categories/:categoryId/products/:productId', (req, res) => {
  // Utilizamos desestructuración para extraer ambos parámetros directamente de req.params
  const { categoryId, productId } = req.params;

  // Devolvemos una respuesta en formato JSON con los IDs de la categoría y el producto
  res.json({
    categoryId, // ID de la categoría del producto
    productId, // ID específico del producto dentro de esa categoría
  });
}); */

//Creando end point con query params
//Como el parametro es "opcional" NO se debera definir en la ruta

/* app.get('/users', (req, res) => {
  //Utilizamos el metodo query para recabar los query params
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({ limit, offset });
  } else {
    res.send('No hay QUERY PARAMS');
  }
});
 */
