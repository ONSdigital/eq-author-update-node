const path = require("path");
// add webpack import
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./config/paths");

module.exports = {
  entry: [
    require.resolve("react-dev-utils/webpackHotDevClient"),
    paths.appIndexJs,
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/public/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    fallback: {
      fs: false,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NodePolyfillPlugin(),
    new webpack.ContextReplacementPlugin(/config/),
    // new HtmlWebpackPlugin({
    //   inject: true,
    //   template: paths.appHtml,
    //   filename: "index.html",
    // }),
  ],
  devServer: {
    static: path.resolve(__dirname, "./public"),
    hot: true,
    port: 3000,
    // Redirects 404s to index.html
    // historyApiFallback: true,
  },
};
