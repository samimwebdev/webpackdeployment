const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['jquery','lodash']
  },
  mode: 'production',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  optimization:{
    splitChunks: {
      chunks: 'all'
    },
   minimizer:[
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    }),
    new OptimizeCSSAssetsPlugin()
   ]
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },{
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader']
      },{
        test: /\.(gif|png|jpeg|jpg|svg)$/i,
        use:[
          {
          loader: 'url-loader',
          options:{
            outputPath: 'images',
            limit: 40000,
            name: '[name].[ext]'
          }
        },
        'image-webpack-loader'
      ]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
   new CleanWebpackPlugin('./dist')
  ]
}