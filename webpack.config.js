const babelOptions = require('./babel.config');

module.exports = {
  mode: 'production',
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions,
        }
      }
    ]
  }
};
