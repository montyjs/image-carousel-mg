/* eslint-disable no-console */
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const db = require('../db/index.js');

const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public/dist')));

app.get('/images', (req, res) => {
  db.getAllImages((err, results) => {
    if (err) {
      return res.json({ error: err });
    }
    return res.json({ rows: results });
  });
});

app.get('/products', (req, res) => {
  db.getRandomProduct((err, result) => {
    if (err) {
      return res.json({ error: err });
    }
    // there has got to be a better way of doing this.
    // Could this be destructured/reassigned at the component level?
    const response = {
      productName: result.product_name,
      companyName: result.company_name,
      itemNumber: result.item_number,
      color: result.color,
      price: result.price,
      rating: result.rating,
      noRatings: result.no_ratings,
      shoeSizes: result.shoe_sizes.map(x => x.size),
    };
    return res.json({ row: response });
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`listening on port ${port}`);
});
