const moment = require('moment');
// imported half of the required data to avoid heap running out of memory
//
const oneMillion = require('./../../../buildFakeData.js').SQL(10);

console.log('built ', moment().calendar());

exports.seed = function seed(knex, Promise) {
  return knex('shoe_size').del()
    .then(() => knex('images').del())
    .then(() => knex('products').del())
    .then(() => {
      return Promise.all(oneMillion.map(data => {
        return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
          console.log('images seeded ', moment().calendar());
          return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => {
            console.log('products seeded ', moment().calendar());
            return Promise.all(data.shoes.map(list => knex('shoe_size').insert(list)))
          });
        });
      }));
    })
    .then(() => Promise.all(oneMillion.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded ', moment().calendar());
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => console.log('seeding 2 million complete', moment().calendar()));
      });
    })))
    .then(() => Promise.all(oneMillion.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded ', moment().calendar());
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => console.log('seeding 3 million complete', moment().calendar()));
      });
    })))
    .then(() => Promise.all(oneMillion.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded ', moment().calendar());
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => console.log('seeding 4 million complete', moment().calendar()));
      });
    })))
    .then(() => Promise.all(oneMillion.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded ', moment().calendar());
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => console.log('seeding 5 million complete', moment().calendar()));
      });
    })))
    .then(() => Promise.all(oneMillion.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded ', moment().calendar());
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => console.log('seeding 6 million complete', moment().calendar()));
      });
    })))
    .then(() => Promise.all(oneMillion.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded ', moment().calendar());
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => console.log('seeding 7 million complete', moment().calendar()));
      });
    })))
    .then(() => Promise.all(oneMillion.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded ', moment().calendar());
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => console.log('seeding 8 million complete', moment().calendar()));
      });
    })))
    .then(() => Promise.all(oneMillion.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded ', moment().calendar());
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => console.log('seeding 9 million complete', moment().calendar()));
      });
    })))
    .then(() => Promise.all(oneMillion.map(data => {
      return Promise.all(data.images.map(list => knex('images').insert(list))).then(() => {
        console.log('images seeded ', moment().calendar());
        return Promise.all(data.products.map(list => knex('products').insert(list))).then(() => console.log('seeding 10 million complete.\n Done with seeding', moment().calendar()));
      });
    })))
};

