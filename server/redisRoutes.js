// IMPORTS
//
const redis = require('redis');

// SETUP
//
const host = 'localhost';
const redisPort = 6379;
const client = redis.createClient({ port: redisPort, host });
let SHOE_SIZES;

// LOG REDIS CONNECTION AND FETCH SHOE_SIZES
//
client.on('connect', () => {
  console.log('Redis Server Started...');

  const multi = client.multi();

  for (let i = 1; i <= 20; i++) {
    multi.hgetall(`shoesize:${i}`);
  }

  multi.exec((error, shoe_sizes) => {
    SHOE_SIZES = shoe_sizes;
  });
});

// ROUTES
//
module.exports.images = (req, res) => {
  const random = Math.floor(Math.random() * 312500) * 32;

  const multi = client.multi();

  for (let i = random - 32; i <= random; i++) {
    multi.hgetall(`image:${i}`);
  }

  multi.exec((err, results) => {
    if (err) res.json({ error: err });

    results = results.sort((a, b) => a.color - b.color);

    return res.json({ rows: results });
  });
};


module.exports.products = (req, res) => {
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
      shoeSizes: SHOE_SIZES.map(x => x.size).sort(),
    };
    return res.json({ row: response });
  });
};