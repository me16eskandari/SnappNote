const path = require('path');

module.exports = {
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        './src/index.tsx',
        './src/sass/main.scss'
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: [/node_modules/],
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
}