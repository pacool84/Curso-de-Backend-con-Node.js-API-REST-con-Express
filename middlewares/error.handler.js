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

function BoomErrorHandler(err, req, res, next) {
  //err.isBoom es como podemos identificar si estamos recibiendo un error de tipo BOOM
  if (err.isBoom) {
    const { output } = err; //Boom maneja la informacion del error en el parametro "output"
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}

module.exports = { logErrors, errorHandler, BoomErrorHandler };
