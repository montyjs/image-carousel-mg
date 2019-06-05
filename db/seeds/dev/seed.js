const data = [];
exports.seed = function seed(knex, Promise) {
  return knex('shoe_size').del()
    .then(() => knex('images').del())
    .then(() => knex('products').del())
    .then(() => Promise.all(data));
};
