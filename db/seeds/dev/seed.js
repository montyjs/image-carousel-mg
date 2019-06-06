const first5Million = require('./../../buildFakeData.js');
const second5Million = require('./../../buildFakeData.js');

console.log('built');

exports.seed = function seed(knex, Promise) {
  return knex('shoe_size').del()
    .then(() => knex('images').del())
    .then(() => knex('products').del())
    .then(() => Promise.all(first5Million.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded');
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => {
          console.log('products seeded');
          return Promise.all(data.shoes.map(list => knex('shoe_size').insert(list)))
        });
      });
    })))
    .then(() => Promise.all(second5Million.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded');
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => {
          console.log('products seeded');
          return Promise.all(data.shoes.map(list => knex('shoe_size').insert(list)))
        });
      });
    })));
};
