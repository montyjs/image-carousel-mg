// IMPORTS
//
require('newrelic');
require('dotenv').config();
const process = require('process');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// SETUP
//
const app = express();
const port = process.env.PORT || 3001;


// MIDDLEWARE
//
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/dist')));


// ROUTES
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




// SERVE
//
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`listening on port ${port}`);
});

