// Importamos la librería de Express para crear un servidor web de manera sencilla
const express = require('express');

// Inicializamos la aplicación Express, que será la base de nuestro servidor
const app = express();

// Definimos el puerto en el que nuestra aplicación va a escuchar
// El puerto 3000 es común para desarrollo, pero en producción es importante
// usar variables de entorno para puertos configurables
const port = 3000;

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

// Ruta GET para el endpoint '/products'
// Aquí el servidor responde con un objeto JSON, que es un formato estándar para estructurar datos.
// Los datos JSON son muy utilizados en APIs porque son fáciles de leer y procesar por máquinas y humanos.
app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 5000,
    },
    {
      name: 'Product 2',
      price: 350,
    },
  ]);
  // El método json() envía una respuesta en formato JSON, muy útil cuando trabajamos con APIs.
  // En este caso estamos enviando un objeto con los datos de un producto.
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
});

// Definimos un endpoint más complejo que devuelve productos asociados a una categoría específica
// En este caso, la URL maneja dos parámetros dinámicos: categoryId y productId
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  // Utilizamos desestructuración para extraer ambos parámetros directamente de req.params
  const { categoryId, productId } = req.params;

  // Devolvemos una respuesta en formato JSON con los IDs de la categoría y el producto
  res.json({
    categoryId, // ID de la categoría del producto
    productId, // ID específico del producto dentro de esa categoría
  });
});
