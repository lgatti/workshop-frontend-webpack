const merge = require("webpack-merge");

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commons = require('./webpack.common');

const dev = {
  output: {
    path: __dirname + '/dist'
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
  ],
};

module.exports = merge.smart(commons, dev);