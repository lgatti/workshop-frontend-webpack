const merge = require("webpack-merge");

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commons = require('./webpack.common');

const dev = {
};

module.exports = merge.smart(commons, dev);