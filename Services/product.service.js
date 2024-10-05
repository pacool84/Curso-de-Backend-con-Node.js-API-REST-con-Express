//Los servicios deben de estar sepradados de las rutas por lo que la logica de negocio debe de estar en los servicios
const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id); //Aqui find es un metodo propio de JS para trabajar con arreglos

    if (!product) {
      throw boom.notFound('Product NOT FOUND');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is BLOCKED');
    } else {
      return product;
    }
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id); //Aqui findIndex es un metodo propio de JS para trabajar con arreglos
    //Nos aseguramos que el indice o el producto si exista
    if (index === -1) {
      throw boom.notFound('Product NOT FOUND'); //Error 404
    } else {
      //this.products[index] = changes; Hacerlo de esta forma es un error, ya que reemplazamos TODO el objeto lo que causa es que deje de existir el id o referencias hacia un objeto
      const product = this.products[index];
      this.products[index] = {
        ...product,
        ...changes,
      };
      return this.products[index];
    }
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product NOT FOUND');
    } else {
      this.products.splice(index, 1);
      return { id };
    }
  }
}

module.exports = ProductsService;
