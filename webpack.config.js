const path = require("path");
// add webpack import
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  entry: "./src/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
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
  // ...add HowModuleReplacementPlugin and devServer
  plugins: [new webpack.HotModuleReplacementPlugin(), new NodePolyfillPlugin()],
  devServer: {
    static: path.resolve(__dirname, "./public"),
    hot: true,
    port: 3000,
  },
};
