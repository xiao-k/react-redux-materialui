var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/index",
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    root: [path.join(__dirname, 'src')],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
        test: /\.js|\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  }
};