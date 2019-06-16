// IMPORTS
//
import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import React from 'react';

// SERVER SIDE RENDERING
//
import ReactDOMServer from 'react-dom/server';
import App from './components/app.jsx';
import Html from './components/Html.jsx';

// SETUP
//
const app = express();
const port = process.env.PORT || 3001;


// MIDDLEWARE
//
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res, next) => {

  const indexFile = path.join(__dirname, '../public/dist/index.html');
  const body = ReactDOMServer.renderToString(<App />);

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) res.status(500).send(err);
    else {
      res.send(
        Html({
          body
        })
      );
    }
  })

})


// ROUTES
//
if (process.env.ROUTES === 'redis') {

  const redis = require('./../server/redisRoutes.js');

  app.get('/images', redis.images);
  app.get('/products', redis.products);

} else if (process.env.ROUTES === 'postgres') {

  const postgres = require('./../server/postgresRoutes.js');

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

