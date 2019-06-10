// IMPORT MONGOOSE MODELS
//
const moment = require('moment');
const { Image, ShoeSize, Product } = require('./dbConfig.js');



const insert = async function (collection, array, callback) {
  for (let i = 0; i < array.length; i++) {
    await collection.insertMany(array[i]);
  }
  callback();
};

// BUILDING 10 MILLION ROWS FOR TWO TABLES EACH
//
const data = require('./../buildFakeData.js').MONGO();
console.log('built');
console.log(moment().calendar())
// INSERTING DATA
//
insert(Image, data.images, () => {
  console.log('images');
  console.log(moment().calendar())
  insert(Product, data.products, () => {
    console.log('products');
    console.log(moment().calendar())
    insert(ShoeSize, data.shoes, () => {
      console.log('complete');
      console.log(moment().calendar())
    })
  })
})