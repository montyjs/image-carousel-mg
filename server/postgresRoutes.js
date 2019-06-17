// SETUP
//
const db = require('./../db/sql/dbConfig.js');

// ROUTES
//
module.exports.images = (req, res) => {
  const id = Math.floor(Math.random() * 312500) * 32;
  //
  // comment line 8 and uncomment line 12 for querying from the last 100
  //
  // const id = Math.floor(Math.random() * 101) * 32 + 9996800;
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
  //
  // comment line 23 and uncomment line 27 for querying from the last 100
  //
  // const id = Math.floor(Math.random() * 101) + 9999000;
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


