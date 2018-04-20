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
};

module.exports = merge.smart(commons, dev);