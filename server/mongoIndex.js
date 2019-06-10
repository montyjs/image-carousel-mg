require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const db = require('../db/mongo/dbConfig.js');

const port = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public/dist')));



app.get('/images', (req, res) => {
  const random = Math.floor(Math.random() * 312500) * 32;
  db('images').select('*').whereBetween('id', [random - 31, random]).then((results) => {
    results = results.map(item => {
      delete item['id'];
      return item;
    }).sort((a, b) => a.color - b.color);
    return res.json({ rows: results });
  });
});

app.get('/products', (req, res) => {
  const random = Math.floor(Math.random() * 10000001);
  db('products').select('*').where({ 'id': random }).then((result) => {
    result = result[0];
    db('shoe_size').select('*').then(shoe_sizes => {
      const response = {
        productName: result.product_name,
        companyName: result.company_name,
        itemNumber: result.item_number,
        color: result.color,
        price: result.price,
        rating: result.rating,
        noRatings: result.no_ratings,
        shoeSizes: shoe_sizes.map(x => x.size),
      };
      return res.json({ row: response });
    });
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`listening on port ${port}`);
});