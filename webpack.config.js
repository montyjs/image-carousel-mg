/* eslint-disable no-path-concat */

module.exports = {
  entry: `${__dirname}/client`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public/dist`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-es2016']
        }
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['absolute/path/a', 'absolute/path/b']
          },
        }],
      },
    ],
  },
};
