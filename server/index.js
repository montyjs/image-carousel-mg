/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// UNCOMMENT FOR REACT
app.use(express.static('/public'));

app.get('/', (req, res) => {
  res.sendStatus(200);
});

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
