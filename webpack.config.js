/* eslint-disable no-path-concat */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './client/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }, {
            loader: 'sass-loader'
          }
        ],
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.es6'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        WEBPACK: JSON.stringify(true),
      }
    })
  ]
};
