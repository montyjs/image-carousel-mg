const fs = require('fs');
const process = require('process');
const data = require('./../buildFakeData.js').REDIS;

const FILE_NAME = process.argv[2];

function buildFile(name, data) {
  let wStream = fs.createWriteStream(`${name}.txt`);
  // console.log(data[name], 'data');
  if (name === 'image' || name === 'product') {
    for (let i = 0; i < 25; i++) {
      buildResp(name, data, 4000 * i, wStream);
    }
  } else {
    buildResp(name, data, 0, wStream)
  }
  wStream.end();
}

function buildResp(name, data, startIndex, wstream) {
  const keys = Object.keys(data[0]);
  return data.forEach((item, i) => {
    let line = `*${2 + keys.length * 2}\r\n$5\r\nHMSET\r\n$${name.length + 1 + String(i + startIndex + 1).length}`;
    line += `\r\n${name}:${i + startIndex + 1}\r\n`;
    line += keys.map(k => `$${k.length}\r\n${k}\r\n$${String(item[k]).length}\r\n${item[k]}\r\n`).join('')
    wstream.write(line + '\r\n');
  });
}


buildFile(FILE_NAME, data[FILE_NAME]);
