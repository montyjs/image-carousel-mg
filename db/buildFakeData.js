// data formatter
//
const buildAllRows = (data, titles) => {
  return data.split('\n')
    .map(line => Object.fromEntries(line.split(/\t/).slice(1).map((item, i) => [titles[i], item])))
    .slice(0, 100)
};

// data builders
//

const buildXImages = (images, imageTitles, urls, bound) => {
  const imageRows = images.split('\n').map(line => line.split(/\t/).slice(1))
  let rows = [];
  let k = 0;
  for (let i = 0; i < bound; i++) {
    rows = rows.concat(
      imageRows.map(line => Object.fromEntries(line.map((item, i) => [imageTitles[i], item])))
        .sort((a, b) => {
          if (a.color === b.color) {
            return a.orientation < b.orientation ? -1 : a.orientation > b.orientation ? 1 : 0;
          }
          return a.color - b.color;
        })
    );
  }
  return rows.map((item, i) => {
    if (i === 0) {
      item.url = urls[0];
    } else if (item.orientation === rows[i - 1].orientation) {
      item.url = urls[k % urls.length];
    } else {
      k++;
      item.url = urls[k % urls.length];
    }
    return item;
  });
};

const buildXProducts = (products, productTitles, bound) => {
  const productRows = buildAllRows(products, productTitles);
  let rows = [];
  for (let i = 0; i < bound; i++) {
    rows = rows.concat(productRows);
  }
  return rows;
};


// Raw data files for 100 listings
//
const products = require('./rawData/productsText');
const images = require('./rawData/imageText.js');
const imageUrls = require('./rawData/imageList.json');
const shoeSizes = [(38), (38.5), (39), (39.5), (40), (40.5), (41), (41.5), (42), (42.5), (43), (43.5), (44), (44.5), (45), (45.5), (46), (46.5), (47), (47.5)];

// Variables
//
const productTitles = ['product_name', 'company_name', 'item_number', 'color', 'price', 'rating', 'no_ratings'];
const imageTitles = ['size', 'color', 'orientation', 'url'];

const imageRows4000 = buildXImages(images, imageTitles, imageUrls.urls, 125);
const productRows4000 = buildXProducts(products, productTitles, 40);


// Build functions
//
const repeatData = function (dataArr, iterations) {
  let output = [];
  for (let i = 0; i < iterations; i++) {
    output.push(dataArr);
  }
  return output;
};


// EXPORTS
//
// Export 5 million rows of data for images and products respectively
// We subdivided them because we want to seed 20 million rows between images and products and we don't want a heap out of memory error
//
module.exports.SQL = function (n = 50) {

  return [
    {
      products: repeatData(productRows4000, 25 * n),
      images: repeatData(imageRows4000, 25 * n),
      shoes: shoeSizes.map(x => { return { size: x } }),
    },
  ];
};

module.exports.REDIS = { image: imageRows4000, product: productRows4000, shoesize: shoeSizes.map(x => { return { size: x } }) };
