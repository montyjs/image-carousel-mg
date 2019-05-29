/* eslint-disable no-console */
const { Pool } = require('pg');

const user = process.env.NODE_ENV === 'production' ? process.env.DB_USER : process.env.LOCAL_USER;
const password = process.env.NODE_ENV === 'production' ? process.env.DB_PASSWORD : process.env.LOCAL_PASSWORD;
const host = process.env.NODE_ENV === 'production' ? process.env.DB_HOST : 'localhost';
const database = process.env.NODE_ENV === 'production' ? process.env.DB_DATABASE : process.env.LOCAL_DATABASE;

const pool = new Pool({
  user,
  host,
  database,
  password,
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
    const shoeSizeQueryString = 'SELECT * FROM shoe_size;';
    return pool.query(shoeSizeQueryString, (sizeErr, sizes) => {
      if (sizeErr) {
        return cb(sizeErr, null);
      }
      const response = {
        shoe_sizes: sizes.rows,
        ...result.rows[0],
      };
      return cb(null, response);
    });
  });
};


module.exports = {
  pool,
  getAllImages,
  getRandomProduct,
};
