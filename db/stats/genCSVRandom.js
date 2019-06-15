const _ = require('underscore');
const fs = require('fs');
const process = require('process');

const random32 = () => Math.floor(Math.random() * 312500) * 32;
const randomRange32 = (r = random32()) => _.range(r - 32, r);
const random = () => Math.floor(Math.random() * 10000001);

const quantity = 100000;
const wStream = fs.createWriteStream('randomData.txt');

let data = []
for (let i = 0;
  i < quantity; i++) {
  data.push(random32());
}

wStream.write('x,y\n');
data.sort((a, b) => a - b)
  .map((val, i) => { return { x: i + 1, y: val } })
  .forEach(item => wStream.write(`${item.x},${item.y}\n`));
wStream.close();

