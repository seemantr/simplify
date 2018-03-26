'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const commonConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    typeCheck: true,
                    emitErrors: true
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json', '.html']
    }
}

module.exports = [
    Object.assign(
        {
            entry: { main: './src/main.ts' },
            target: 'electron-main',
            plugins: [new webpack.SourceMapDevToolPlugin({ filename: '[name].js.map' })]
        },
        commonConfig),
    Object.assign(
        {
            entry: { renderer: './src/renderer.tsx' },
            target: 'electron-renderer',
            plugins: [new HtmlWebpackPlugin({
                title: 'Simplify',
                template: './src/index.html'
            }),
            new webpack.SourceMapDevToolPlugin({ filename: '[name].js.map' })]
        },
        commonConfig)
]