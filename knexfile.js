require('dotenv').config();
const path = require('path');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'product_wrapper',
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
    },
    useNullAsDefault: true,
    charset: 'utf8',
    migrations: {
      directory: path.join(__dirname, '/db/sql/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/db/sql/seeds/dev'),
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: 'product_wrapper',
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
    },
    useNullAsDefault: true,
    charset: 'utf8',
    migrations: {
      directory: path.join(__dirname, '/db/sql/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/db/sql/seeds/dev'),
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'product_wrapper',
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
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
    client: 'pg',
    connection: {
      database: 'product_wrapper',
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
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

