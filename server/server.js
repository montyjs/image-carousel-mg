// IMPORTS
//
require('dotenv').config();
import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import renderPage from '../iso-middleware/render.js';

// SETUP
//
const app = express();
const port = process.env.PORT;


// MIDDLEWARE
//
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// SERVE
//
const buildPath = path.join(__dirname, '../', 'build');
app.use('/', express.static(buildPath));
app.use(express.static(__dirname));


// DATABASE ROUTES
//
if (process.env.ROUTES === 'redis') {

  const redis = require('./redisRoutes.js');

  app.get('/images', redis.images);
  app.get('/products', redis.products);

} else if (process.env.ROUTES === 'postgres') {

  const postgres = require('./postgresRoutes.js');

  app.get('/images', postgres.images);
  app.get('/products', postgres.products);

}

app.get('*', renderPage);

// LAUNCH
//
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`listening on port ${port}`);
});



module.exports = app;
