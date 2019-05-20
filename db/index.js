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

const getRandomProduct = (cb) => {
  // gets one random row from the database
  const queryString = 'SELECT * FROM products ORDER BY RANDOM() LIMIT 1;';
  pool.query(queryString, (err, result) => {
    if (err) {
      return cb(err, null);
    }
    console.log(result.rows[0]);
    return cb(null, result.rows[0]);
  });
};

module.exports = {
  pool,
  getAllImages,
  getRandomProduct,
};
