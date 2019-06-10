const mongoose = require('mongoose');

// CONFIGURATION
//
const dbName = 'productwrapper';
const URI = `mongodb://localhost:27017/${dbName}`;
const options = { useNewUrlParser: true, poolSize: 8, family: 4 };

mongoose.connect(URI, options);


// SCHEMAS
//
const imageSchema = mongoose.Schema({
  size: String,
  color: String,
  orientation: String,
  url: String
});

const shoeSizeSchema = mongoose.Schema({
  size: Number
});

const productSchema = mongoose.Schema({
  productName: String,
  companyName: String,
  itemNumber: Number,
  color: String,
  price: String,
  rating: String,
  noRatings: Number
});


// MODELS
//
const Image = mongoose.model('Image', imageSchema);
const ShoeSize = mongoose.model('ShoeSize', shoeSizeSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = { Image, ShoeSize, Product };