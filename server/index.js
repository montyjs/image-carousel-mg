/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public/dist')));
console.log(path.join(__dirname, '../public/dist'))

app.get('/images', (req, res) => {
  res.sendStatus(200);
});

app.get('/product-details', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`listening on port ${port}`);
});
