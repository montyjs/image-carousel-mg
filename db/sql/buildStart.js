const fs = require('fs');
const process = require('process');

const start = process.argv[2];

fs.writeFile('start.json', JSON.stringify({ start: start }), (err) => {
  if (err) console.log(err);
  else console.log('start file successfully created');
});