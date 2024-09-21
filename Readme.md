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

npm install nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D

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
