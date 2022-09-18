import { Configuration } from 'webpack';
import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { InjectManifest } from 'workbox-webpack-plugin';
const LoadablePlugin = require('@loadable/webpack-plugin');

import { IS_DEV, SRC_DIR, DIST_DIR } from './env';
import audioLoader from './loaders/audio';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';
import svgLoader from './loaders/svg';
import imgLoader from './loaders/img';

const config: Configuration = {
  entry: path.join(SRC_DIR, 'client'),
  module: {
    rules: [audioLoader.client, cssLoader.client, jsLoader, svgLoader.client, imgLoader.client]
  },
  output: {
    path: DIST_DIR,
    filename: IS_DEV ? '[name].js' : '[name].[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: IS_DEV ? '[name].css' : '[name].[contenthash].css',
    }),
    ...(!IS_DEV ? [
      new InjectManifest({
        swSrc: './src/sw.ts',
      }),
    ] : []),
    new LoadablePlugin(),
  ],
  devtool: IS_DEV ? 'cheap-source-map' : 'source-map',
  performance: {
    hints: IS_DEV ? false : 'warning',
  },
};

export default config;
