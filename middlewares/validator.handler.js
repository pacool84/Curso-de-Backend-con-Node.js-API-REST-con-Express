const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  //Estamos retornando un middleware dinamico por medio de un closure
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false }); //Con abort early hacemos que joi envie todos los errores que encuentre
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
