// Raw data files for 100 listings
//
const products = require('./productsText');
const images = require('./imageText.js');
const urls = require('./seedingSetup/imageList.json');

// builder functions
//
const filterByProp = (array, prop) => array.map(obj => obj[prop]).filter((item, i, arr) => arr.indexOf(item) === i);

const buildAllRows = (data, titles) => data.split('\n').map(line => Object.fromEntries(line.split(/\t/).slice(1).map((item, i) => [titles[i], item])));

const buildAllOptions = (data, titles) => titles.map(title => Object.fromEntries([[title, filterByProp(buildAllRows(data, titles), title)]])).reduce((acc, cur) => Object.assign(acc, cur), {});

const buildRandomRow = (dataObj) => Object.keys(dataObj).map(k => randomSelectArray(dataObj[k]));

const buildNRows = function buildNRows(dataObj, n) {
  let titles = Object.keys(dataObj);
  let rows = [];
  for (let i = 0; i < n; i++) {
    rows.push(Object.fromEntries(titles.map(title => {
      let list = dataObj[title];
      return [[title], list[i % list.length]]
    })));
  }
  return rows;
};

// helper functions
//
const randomSelectArray = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const randomSelectNArray = function (arr, n) {
  return Array.from({ length: n }, (_, i) => randomSelectArray(arr));
}

const equallySplitArray = function (arr) {
  let output = [];
  let step = 4000;
  for (let i = 0; i < arr.length; i += step) {
    output.push(arr.slice(i, i + step))
  }
  return output;
};

// data objects
//
const shoeSizes = [(38), (38.5), (39), (39.5), (40), (40.5), (41), (41.5), (42), (42.5), (43), (43.5), (44), (44.5), (45), (45.5), (46), (46.5), (47), (47.5)];

const productTitles = ['product_name', 'company_name', 'item_number', 'color', 'price', 'rating', 'no_ratings'];
const allProductOptions = buildAllOptions(products, productTitles);


const imageTitles = ['size', 'color', 'orientation', 'url'];
const allImageOptions = buildAllOptions(images, imageTitles);
allImageOptions.url = urls.urls;
allImageOptions.orientation = allImageOptions.orientation.filter(x => !(/\s+/).test(x));



// Build all function
//
const buildN = function (n) {
  return [
    {
      images: equallySplitArray(buildNRows(allImageOptions, n)),
      products: equallySplitArray(buildNRows(allProductOptions, n)),
      shoes: equallySplitArray(randomSelectNArray(shoeSizes, n).map(x => { return { size: x } }), n),
    },
  ];
};

module.exports = buildN(5000000);
