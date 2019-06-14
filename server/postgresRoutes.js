// SETUP
//
const db = require('./../db/sql/dbConfig.js');

// ROUTES
//
module.exports.images = (req, res) => {
  const random = Math.floor(Math.random() * 312500) * 32;
  db('images').select('*').whereBetween('id', [random - 32, random]).then((results) => {
    results = results.map(item => {
      delete item['_id'];
      return item;
    }).sort((a, b) => a.color - b.color);
    return res.json({ rows: results });
  });
};

module.exports.products = (req, res) => {
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
};


