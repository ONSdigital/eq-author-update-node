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
    filename: "main.js",
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
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      },
      {
        test: /\.(js|mjs|jsx)$/,
        include: paths.appSrc,
        loader: require.resolve("babel-loader"),
        options: {
          plugins: [
            [
              require.resolve("babel-plugin-named-asset-import"),
              {
                loaderMap: {
                  svg: {
                    ReactComponent: "@svgr/webpack?-prettier,-svgo![path]",
                  },
                },
              },
            ],
          ],
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          // Don't waste time on Gzipping the cache
          cacheCompression: false,
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    fallback: {
      fs: false,
    },
    // Allows imports using absolute paths
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new NodePolyfillPlugin(),
    new webpack.ContextReplacementPlugin(/config/),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "./dist"),
    hot: true,
    port: 3000,
  },
};
