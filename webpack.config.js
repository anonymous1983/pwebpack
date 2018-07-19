const webpack = require("webpack");
const path = require("path");

let config = {
    mode: 'development', // [ development || production || none ] : https://webpack.js.org/concepts/mode/
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "./bundle.js"
    }
};

module.exports = config;