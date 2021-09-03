var webpack = require("webpack");

var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const { REACT_APP_BACKEND_API } = process.env;

const environmentVariables = {
  "process.env": {
    REACT_APP_BACKEND_API: JSON.stringify(REACT_APP_BACKEND_API),
  },
};

module.exports = {
  mode: "development",
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },

  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new webpack.DefinePlugin(environmentVariables),
  ],
};