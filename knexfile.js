const Path = require('path');
require('dotenv').config();
const process = require('process');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
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
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
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
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
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
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
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

