const elixir  = require('laravel-elixir')
const path    = require('path')
const webpack = require('webpack')

const jsPath  = elixir.config.get('assets.js.folder')

module.exports = {

  watch: elixir.isWatching(),

  resolve: {
    extensions: ['', '.js', '.vue']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'resources/assets'),
        exclude: 'node_modules',
        loader: 'babel' 
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },

  externals: {
    'jquery': 'jQuery'
  }
}