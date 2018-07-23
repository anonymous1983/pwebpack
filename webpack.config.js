const webpack = require("webpack");
const path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var styleLintPlugin = require('stylelint-webpack-plugin');


let config = {

    // ToDo : Export development and production mode at the same time
    mode: 'development', // [ development || production || none ] : https://webpack.js.org/concepts/mode/
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    },
    plugins: [
        // Specify the resulting CSS filename
        new ExtractTextPlugin(path.resolve(__dirname, "./public/app.css")),

        // Stylelint plugin
        new styleLintPlugin({
            configFile: '.stylelintrc',
            context: '',
            files: '**/*.scss',
            syntax: 'scss',
            failOnError: false,
            quiet: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                })
            }
        ]
    }
};

module.exports = config;