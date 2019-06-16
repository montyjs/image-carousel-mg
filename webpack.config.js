/* eslint-disable no-path-concat */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, 'server', 'server.js'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve('build'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new Dotenv()
  ],
};
