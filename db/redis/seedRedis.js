const Fs = require('fs');
const Path = require('path');
const Process = require('process');
const CustomStream = require('stream').Writeable;

CustomStream.prototype._write = (chunk) => console.log(chunk);

const logStream = new CustomStream();

const inputFile = Process.argv.slice(2, 3);
const readable = Fs.createReadStream(inputFile);


Fs.readFile(inputFile, (err, data) => {
  let proto = '';

})