// imported in two batches to avoid heap running out of memory
//
const fiveMillion = require('./../../../buildFakeData.js').SQL();

console.log('built');

exports.seed = function seed(knex, Promise) {
  return knex('shoe_size').del()
    .then(() => knex('images').del())
    .then(() => knex('products').del())
    .then(() => Promise.all(fiveMillion.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded');
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => {
          console.log('products seeded');
          return Promise.all(data.shoes.map(list => knex('shoe_size').insert(list)))
        });
      });
    })))
    .then(() => Promise.all(fiveMillion.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded');
        return Promise.all(data.products.map(list => knex('products').insert(list)));
      });
    })));
};
