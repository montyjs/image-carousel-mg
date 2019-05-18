/* eslint-disable no-path-concat */
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['absolute/path/a', 'absolute/path/b'],
          },
        }],
      }, {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
