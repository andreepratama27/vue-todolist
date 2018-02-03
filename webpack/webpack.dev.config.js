const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpack = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devWebpackConfig = merge(baseWebpack, {
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    })
  ]
})