const config = require('./config')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './main.js'
    },

    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        // publicPath: process.env.NODE_ENV === 'production'
        //     ? config.build.assetsPublicPath
        //     : config.dev.assetsPublicPath
    },

    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname)
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader'
            }
        ]
    }
}