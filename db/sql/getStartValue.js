const fs = require('fs');
const path = require('path');
const process = require('process');

const start = process.argv[2]

fs.writeFile(path.join(__dirname, 'start.json'), JSON.stringify({ start: start }), (err) => {
  if (err) console.log(err);
  else console.log('success');
});