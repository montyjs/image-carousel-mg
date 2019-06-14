// IMPORTS
//
const plotly = require('plotly')(process.env.PLOTLY_USERNAME, process.env.PLOTLY_API_KEY);


// VARS
//
const random = () => Math.floor(Math.random() * 10000001);
const random32 = () => Math.floor(Math.random() * 312500) * 32;
const quantity = 500000;
let xData = [];


// BUILD and SORT DATA
//
for (let i = 0; i < quantity; i++) {
  xData.push(random32());
}

xData.sort((a, b) => a - b)


// PLOTLY VARS
var data = [
  {
    x: xData,
    type: "histogram"
  }
];

var graphOptions = { filename: "basic-histogram", fileopt: "overwrite" };


// PLOTLY GRAPH
//
plotly.plot(data, graphOptions, function (err, msg) {
  if (err) console.log('error', err);
  else console.log(msg);
});