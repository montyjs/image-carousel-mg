const Path = require('path');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'cj',
      password: 'student',
      database: 'product_wrapper',
    },
    useNullAsDefault: true,
    charset: 'utf8',
    migrations: {
      directory: Path.join(__dirname, '/db/sql/migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, '/db/sql/seeds/dev'),
    },
  },

  test: {
    client: 'pg',
    connection: {
      user: 'cj',
      password: 'student',
      database: 'product_wrapper',
    },
    useNullAsDefault: true,
    charset: 'utf8',
    migrations: {
      directory: Path.join(__dirname, '/db/sql/migrations'),
    },
    seeds: {
      directory: Path.join(__dirname, '/db/sql/seeds/dev'),
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'product_wrapper',
      user: 'cj',
      password: 'student',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'product_wrapper',
      user: 'cj',
      password: 'student',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
