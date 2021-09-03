const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    server: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js",
  },
  devtool: "hidden-source-map",
  target: "node",
  externals: [
    nodeExternals(),
    nodeExternals({
      whitelist: [/@todolist/],
      modulesFromFile: true,
    }),
  ],
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
        },
      },
      // NOTE: On webpack bull has a issue
      // Ref: https://github.com/aliksend/bull_webpack_issue/issues/1
      // Solution: https://github.com/OptimalBits/bull/issues/811#issuecomment-470897718
    ],
  },
  plugins: [],
};