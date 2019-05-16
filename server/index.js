require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.sendStatus(200)
});

app.get('/images', (req, res, next) => {
  res.sendStatus(200);
});

app.get('/product-details', (req, res, next) => {
  res.sendStatus(200);
});

app.listen(PORT, err => {
  if (err) {
    return console.log(err);
  }
  console.log(`listening on port ${PORT}`);
});
