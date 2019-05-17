/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'product_wrapper',
  password: 'rei',
  port: '5432',
});

const getAllImages = (cb) => {
  const queryString = 'SELECT * FROM images';
  pool.query(queryString, (err, result) => {
    if (err) {
      return cb(err, null);
    }
    return cb(null, result.rows);
  });
};

const getAllProducts = (cb) => {
  const queryString = 'SELECT * FROM products';
  pool.query(queryString, (err, result) => {
    if (err) {
      return cb(err, null);
    }
    return cb(null, result.rows);
  });
};

module.exports = {
  pool,
  getAllImages,
  getAllProducts,
};
