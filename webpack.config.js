var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/app.js",
    output: {
        path: "./dist",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new HtmlWebpackPlugin({
          title: 'xCoin',
          filename: 'index.html'
      })
    ]
};
