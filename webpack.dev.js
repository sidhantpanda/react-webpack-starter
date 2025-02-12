const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3001, // Add your desired port number here
  },
  optimization: {
    runtimeChunk: 'single',
  },
});
