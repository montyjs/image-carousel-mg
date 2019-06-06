
exports.up = function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('images', (table) => {
      table.increments('id').primary();
      table.string('size');
      table.string('color');
      table.string('orientation');
      table.text('url');
    }),
    knex.schema.createTable('shoe_size', (table) => {
      table.increments('id').primary();
      table.decimal('size');
    }),
    knex.schema.createTable('products', (table) => {
      table.increments('id').primary();
      table.string('product_name');
      table.string('company_name');
      table.integer('item_number');
      table.string('color');
      table.string('price');
      table.string('rating');
      table.integer('no_ratings');
    }),
  ]);
};

exports.down = function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('images'),
    knex.schema.dropTable('shoe_size'),
    knex.schema.dropTable('products'),
  ])
};
