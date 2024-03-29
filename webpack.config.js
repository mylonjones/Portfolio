var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'client/dist'),
    compress: true,
    port: 9000,
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|pdf)$/,
        use: [{ loader: 'url-loader' }]
      }
    ]
  }
};