var path = require('path');
var webpack = require('webpack');
console.log('***********************');
console.log(path.join(__dirname, 'src'));
console.log('webpack.optimize.CommonsChunkPlugin', webpack.optimize.CommonsChunkPlugin);
module.exports = {
  devtool: 'source-map',

  entry: {
    'App': [ 'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', './src/App'],

    'AdminApp': [ 'webpack-dev-server/client?http://localhost:3000', 'webpack/hot/only-dev-server', './src/AdminApp']
  },
  output: {
    path: path.join(__dirname, 'dist/assets/js'), //运行webpack生成的文件存放目录
    filename: '[name].bundle.js',
    publicPath: '/static/',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  },
    debug:true
};
