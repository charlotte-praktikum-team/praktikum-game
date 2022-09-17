const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  target: 'node',
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    static: path.join(__dirname, 'build'),
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '/build'),
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'null-loader'
      },
      {
        test: /\.(?:svg|png|jpg|jpeg)$/i,
        loader: 'null-loader'
      }
    ],
  },
  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new LoadablePlugin()
  ],
});
