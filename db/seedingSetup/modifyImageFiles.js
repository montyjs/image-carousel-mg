const fs = require('fs');
const path = require('path');

const getImageFiles = function getImageFiles() {
  return new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname, 'images'), { encoding: 'utf8' }, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(Promise.all(data.map(img => `https://s3.amazonaws.com/sdc1000images/${img}`)))
      }
    });
  });
};

getImageFiles().then(data => {
  fs.writeFile(path.join(__dirname, 'imageList.js'), JSON.stringify(data), (error) => {
    if (error) console.log(error);
    else console.log('success');
  });
});