const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        Stack: './src/Stack.js',
        baseConverter: './src/baseConverter.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
};