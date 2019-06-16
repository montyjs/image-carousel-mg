// SETUP
//
const db = require('./../db/sql/dbConfig.js');
const fs = require('fs');

// ROUTES
//
module.exports.images = (req, res) => {
  const id = Math.floor(Math.random() * 312500) * 32;
  db('images').select('*').whereBetween('id', [id - 31, id]).then((results) => {
    results = results.map(item => {
      delete item['id'];
      return item;
    }).sort((a, b) => a.color - b.color);
    return res.json({ rows: results });
  });
};

module.exports.products = (req, res) => {
  const id = Math.floor(Math.random() * 10000001);
  db('products').select('*').where({ 'id': id }).then((result) => {
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
};


