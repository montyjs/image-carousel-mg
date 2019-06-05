
exports.up = function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('images', (table) => {
      table.increment('id').primary();
      table.string('size');
      table.string('color');
      table.string('orientation');
      table.text('url');
    }),
    knex.schema.createTable('shoe_size', (table) => {
      table.increment('id').primary();
      table.integer('size');
    }),
    knex.schema.createTable('products', (table) => {
      table.increment('id').primary();
      table.string('product_name');
      table.string('company_name');
      table.integer('item_number');
      table.string('color');
      table.cost('price');
      table.string('rating');
      table.integer('no_ratings');
    }),
  ]);
};

exports.down = function down(knex, Promise) {
  return Promise.all([
    knex.dropTable('images'),
    knex.dropTable('shoe_size'),
    knex.dropTable('products'),
  ])
};
