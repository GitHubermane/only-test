const { merge } = require("webpack-merge");
const common = require("./common.config.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const plugins = [
  new MiniCssExtractPlugin(),
  new ReactRefreshWebpackPlugin()
];

module.exports = merge(common, {
  mode: "development",
  target: "web",
  plugins,
  devtool: "inline-source-map",
  output: {
    filename: "[name].[contenthash].js",
  },
});