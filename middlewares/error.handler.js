function logErrors(err, req, res, next) {
  console.log('logErrors');

  console.log(err);
  next(err); //Aqui sabemos que estamos en un middleware de tipo ERROR
}

//Middleware para crear un formato que se devuelva al usuario
//Este Middleware NO saltaría a otro y dentendría la ejecución

function errorHandler(err, req, res, next) {
  console.log('errorHandler');

  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { logErrors, errorHandler };
