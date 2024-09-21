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
