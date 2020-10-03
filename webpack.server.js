const path = require("path");
const baseConig = require("./webpack.base.js");
const merge = require("webpack-merge");
const nodeExtrenals = require("webpack-node-externals");

const config = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [nodeExtrenals()],
};

module.exports = merge(baseConig, config);
