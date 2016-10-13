const path = require('path');

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './index.js',
  target: 'node',
  output: {
    path: path.join(__dirname, './build'),
    libraryTarget: 'commonjs',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loaders: ['json-loader']
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ]
  }
};