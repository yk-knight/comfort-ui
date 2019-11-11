'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require("webpack");
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')


module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: '/dist/',
    filename: 'comfort-ui.js',
    library:'COMFORT',
    libraryTarget:'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
            test: /\.less$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "less-loader" }
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: 'babel-loader'
        },
        {
            test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
            loader: 'url-loader',
            query: {
                limit: 30000,
                name: '[name].[ext]?[hash]'
            }
        },
    ]
  },
  plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
}
