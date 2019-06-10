// IMPORTS
//
require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const redis = require('redis');

// SETUP
//
const app = express();
const client = redis.createClient();
const port = process.env.PORT || 3001;

// LOG REDIS CONNECTION
//
client.on('connect', () => console.log('Redis Server Started...'));

// MIDDLEWARE
//
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/dist')));


// ROUTES
//
app.get('/images', (req, res) => {
  const random = Math.floor(Math.random() * 312500) * 32;

  const multi = client.multi();

  for (let i = random - 31; i <= random; i++) {
    multi.hgetall(`image:${i}`);
  }

  multi.exec((err, results) => {
    if (err) res.json({ error: err });

    console.log('results', results);

    return res.json({ rows: results });
  });

  // db('images').select('*').whereBetween('id', [random - 31, random]).then((results) => {
  //   results = results.map(item => {
  //     delete item['id'];
  //     return item;
  //   }).sort((a, b) => a.color - b.color);
  //   return res.json({ rows: results });
  // });
});

app.get('/products', (req, res) => {
  const random = Math.floor(Math.random() * 10000001);

  client.hgetall(`product:${random}`, (err, result) => {
    if (err) res.json({ error: err });

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


// SERVE
//
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`listening on port ${port}`);
});
