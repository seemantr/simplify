'use strict'
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// the path(s) that should be cleaned
let pathsToClean = [
    'app/**/*.*'
]

const commonConfig = {
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
            entry: { main: './main.ts' },
            target: 'electron-main',
            node: {
                __filename: false,
                __dirname: false
            },
            // Use dev tool as the inline source map can be debugged automatically
            // in VS Code
            devtool: 'source-map-inline',
            output: {
                path: path.resolve(__dirname),
                filename: '[name].js'
            }
        },
        commonConfig),
    Object.assign(
        {
            entry: { renderer: './src/renderer.tsx' },
            target: 'electron-renderer',
            plugins: [
                new webpack.SourceMapDevToolPlugin({ filename: '[name].js.map' }),
                new CleanWebpackPlugin(pathsToClean)
            ],
            output: {
                path: path.resolve(__dirname, 'app'),
                publicPath: '/app/',
                filename: '[name].js'
            }
        },
        commonConfig)
]