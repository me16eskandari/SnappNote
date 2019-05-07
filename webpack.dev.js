const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',   
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './src',
        hot: true
    },  
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            },]
        }]
    },
    devServer: {
      historyApiFallback: true,
      inline: true,
      port: 3000,
      hot: true
    },
    plugins: [                           
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Snapp Food Note',
            inject: false,
            template: require('html-webpack-template'),
            bodyHtmlSnippet :'<main class="main" id="app"></main>'
        })   
    ]
});