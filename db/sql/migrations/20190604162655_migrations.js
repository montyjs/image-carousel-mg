
exports.up = function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('images', (table) => {
      table.increments('_id').primary();
      table.string('size');
      table.string('color');
      table.string('orientation');
      table.text('url');
      table.index('_id', '_id');
    }),
    knex.schema.createTable('shoe_size', (table) => {
      table.increments('_id').primary();
      table.decimal('size');
      table.index('_id', '_id');
    }),
    knex.schema.createTable('products', (table) => {
      table.increments('_id').primary();
      table.string('product_name');
      table.string('company_name');
      table.integer('item_number');
      table.string('color');
      table.string('price');
      table.string('rating');
      table.integer('no_ratings');
      table.index('_id', '_id');
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
