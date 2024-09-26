# Proyecto de Node.js con Configuración de ESLint y Prettier

Este proyecto incluye configuración para ESLint y Prettier, así como scripts personalizados para el desarrollo y el linting de código.

## Configuración

### Archivos de configuración

Se han generado los siguientes archivos de configuración:

- **.gitignore**: Archivo para ignorar archivos y directorios específicos del control de versiones (Git).
- **.eslintrc**: Configuración de ESLint para asegurar un estilo de código consistente y evitar errores.
- **.editorconfig**: Configuración para mantener estilos de codificación uniformes entre diferentes editores y entornos de desarrollo.

### Modificación de Scripts en `package.json`

Se han agregado/modificado los siguientes scripts en el archivo `package.json`:

```json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js",
  "lint": "eslint ."
}
```

`npm install nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D`

- **nodemon**: Monitorea los cambios en el código fuente y reinicia automáticamente la aplicación en el entorno de desarrollo.
- **eslint**: Herramienta para el análisis estático del código con el objetivo de encontrar problemas y mantener un código limpio.
- **eslint-config-prettier**: Desactiva todas las reglas de ESLint que podrían entrar en conflicto con Prettier.
- **eslint-plugin-prettier**: Ejecuta Prettier como una regla dentro de ESLint.
- **prettier**: Formateador de código que asegura un estilo consistente.

# Creando nuestro servidor HTTP con Express

```javascript
// Importamos la librería de Express para crear un servidor web de manera sencilla
const express = require("express");

// Inicializamos la aplicación Express, que será la base de nuestro servidor
const app = express();

// Definimos el puerto en el que nuestra aplicación va a escuchar
// El puerto 3000 es común para desarrollo, pero en producción es importante
// usar variables de entorno para puertos configurables
const port = 3000;

// Definimos una ruta GET para el endpoint raíz ('/')
// Esta es la ruta básica que el servidor responderá cuando se acceda al dominio principal
// 'req' representa el objeto de la solicitud (request) y 'res' representa el objeto de la respuesta (response)
app.get("/", (req, res) => {
  // Respondemos con un mensaje al cliente que realice una solicitud a '/'
  res.send("Servidor Express Conectado");
});

// Hacemos que la aplicación escuche en el puerto definido
// Cuando el servidor esté corriendo, ejecutará el callback para mostrar un mensaje en la consola
app.listen(port, () => {
  // Aquí se imprime un mensaje indicando que el servidor está corriendo y en qué URL puede accederse
  // El `http://localhost:` indica que el servidor está corriendo localmente
  console.log("Servidor escuchando en http://localhost:" + port);
});
```

## Routing o rutas en Express

Las rutas en Express nos permiten manejar diferentes URLs/endpoints y definir cómo el servidor responde a las solicitudes HTTP (GET, POST, PUT, DELETE, etc.).

### Definiendo nuevas rutas o endpoints

#### Ruta GET para el endpoint `/nueva-ruta`

Cuando un cliente acceda a este endpoint, el servidor responderá con un mensaje de texto:

```javascript
app.get("/nueva-ruta", (req, res) => {
  res.send("Hola esta es mi nueva ruta");
  // El método send() envía una respuesta de texto simple al cliente.
});

//
//
//
app.get("/products", (req, res) => {
  res.json({
    name: "Producto 1",
    price: 50000,
  });
  // El método json() envía una respuesta en formato JSON, muy útil cuando trabajamos con APIs.
  // En este caso estamos enviando un objeto con los datos de un producto.
});
```

#### Ruta GET para el endpoint '/products'

Aquí el servidor responde con un objeto JSON, que es un formato estándar para estructurar datos.

Los datos JSON son muy utilizados en APIs porque son fáciles de leer y procesar por máquinas y humanos.

```javascript
app.get("/products", (req, res) => {
  res.json({
    name: "Producto 1",
    price: 50000,
  });
  // El método json() envía una respuesta en formato JSON, muy útil cuando trabajamos con APIs.
  // En este caso estamos enviando un objeto con los datos de un producto.
});
```

## API REST

## ¿Qué es REST (Representational State Transfer)?

REST es un conjunto de convenciones para crear servicios web que permiten la comunicación entre el cliente y el servidor a través del protocolo HTTP. Es uno de los enfoques más utilizados para desarrollar APIs por su simplicidad y escalabilidad.

Una API RESTful sigue estos principios, utilizando recursos y métodos HTTP estándar para realizar operaciones como obtener, crear, modificar o eliminar datos.

### Métodos HTTP en una API REST

Los métodos HTTP definen las acciones que se pueden realizar sobre los recursos (datos) en una API REST. Los más comunes son:

- **GET**: Se utiliza para obtener o solicitar información.  
  _Ejemplo_: Obtener una lista de productos desde el servidor.
- **PUT**: Sirve para modificar recursos existentes, generalmente identificado por un ID.  
  _Ejemplo_: Actualizar los datos de un producto específico.
- **POST**: Se usa para crear nuevos recursos como información, productos, categorías, etc.  
  _Ejemplo_: Añadir un nuevo producto a la base de datos.
- **DELETE**: Permite eliminar recursos.  
  _Ejemplo_: Eliminar un producto de la base de datos.

### Convenciones en una API RESTful

- **URLs como recursos**: En una API RESTful, las URLs (endpoints) representan recursos o colecciones de recursos. Por ejemplo:

  - `/products`: Representa una colección de productos.
  - `/products/1`: Representa un producto específico identificado por el ID 1.

- **Uso de verbos HTTP**: La interacción con los recursos se realiza a través de los verbos HTTP (GET, POST, PUT, DELETE) en lugar de incluir la acción en la URL.  
  _Ejemplo_: En lugar de usar `/deleteProduct/1`, se usaría `DELETE /products/1`.

- **Respuestas en formato JSON**: Aunque REST no está limitado a un formato en particular, es común que las APIs RESTful utilicen JSON para enviar y recibir datos, ya que es legible y fácil de procesar por la mayoría de los lenguajes de programación.

- **Sin estado (Stateless)**: Las solicitudes entre el cliente y el servidor son independientes; cada petición debe contener toda la información necesaria para procesarla. El servidor no guarda estado entre peticiones, lo que hace las APIs REST más escalables.

## Método GET - Recibir Parámetros

### Convención Recomendada

Al construir APIs RESTful, es una buena práctica estructurar las URLs de la siguiente manera:

- `api.example.com/tasks/{id}/`
- `api.example.com/people/{id}/`
- `api.example.com/users/{id}/tasks/`

En estos ejemplos, primero se define la entidad y luego se especifica el **ID** correspondiente. Esto proporciona una estructura clara y facilita la identificación del recurso.

### Ejemplo: Obtener el Detalle de un Producto Específico

El siguiente ejemplo muestra cómo definir un endpoint GET para obtener el detalle de un producto mediante un parámetro en la URL:

```javascript
// Definimos un endpoint para obtener el detalle de un producto específico
// La sintaxis ":id" indica que estamos utilizando un parámetro dinámico en la URL
app.get("/products/:id", (req, res) => {
  // Obtenemos el valor del parámetro "id" desde la solicitud (req.params.id)
  const id = req.params.id;

  // Alternativamente, podríamos usar desestructuración:
  // const { id } = req.params;

  // Devolvemos una respuesta en formato JSON con el ID del producto solicitado
  res.json({
    id,
    name: "Product 2", // En un caso real, estos datos serían extraídos de una base de datos
    price: 350,
  });
});
// Definimos un endpoint que devuelve productos asociados a una categoría específica
// Aquí la URL maneja dos parámetros dinámicos: categoryId y productId
app.get("/categories/:categoryId/products/:productId", (req, res) => {
  // Utilizamos desestructuración para extraer ambos parámetros directamente de req.params
  const { categoryId, productId } = req.params;

  // Devolvemos una respuesta en formato JSON con los IDs de la categoría y el producto
  res.json({
    categoryId, // ID de la categoría del producto
    productId, // ID específico del producto dentro de esa categoría
  });
});
```

## Query Params

Parametros de consulta que usualmente vienen en los metodos GET

La convencion a seguir es:

- `api.example.com/products/`
- `api.example.com/products/?page=1` (Paginar)
- `api.example.com/products/?limit=10&offset=0`
- `api.example.com/products/?region=USA` (Filtrar)
- `api.example.com/products/?region=USA&brand=XYZ`

### Para este proyecto utilizaremos la libreria FAKER para generar informacion falsa

`npm install faker@5.5.3`
`const faker = require ('faker')`

Existe otra libreria mas actualizada que es recomendable utilizar para el proyecto

`npm install @faker-js/faker`
`const {faker} = require('@faker-js/faker')`

## Separación de Responsabilidades con Express Router

### Single Responsibility Principle

Cada artefacto o pieza de codigo debe de tener una unica responsabilidad

## Códigos de Estado o HTTP Response status codes

Es un standard que indica que sucede cuando se envía una petición HTTP, dichos codigo funcionan por rango
-Informational responses (100 - 199)
-Successfuks Responses (200 - 299)
-Redirects (300 - 399)
-Clients Errors (400 - 499)
-Server Errors (500 - 599)

Los estados importantes en los que nos estaremos enfocando son
-200 / Ok
-201 / Created (Generalmente usado en un POST)
-202 / Accepted
