const merge = require("webpack-merge");

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const { imageminLoader, ImageminWebpackPlugin } = require("imagemin-webpack");
const CompressionPlugin = require("compression-webpack-plugin");

const imageMinPlugins = [imageminJpegtran({arithmetic: true}), imageminPngquant({ quality: 50 }),];

const commons = require('./webpack.common');

const dev = {
  output: {
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png)$/i,
        use: [
          {
            loader: "file-loader"
          },
          {
            loader: imageminLoader,
            options: {
              plugins: imageMinPlugins
            }
          }
        ]
      } 
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new OptimizeCssAssetsPlugin(),
    new UglifyJsPlugin(),
    new ImageminWebpackPlugin({
      imageminOptions: {
        plugins: imageMinPlugins
      }
    }),
    new CompressionPlugin(),
  ],
};

module.exports = merge.smart(commons, dev);