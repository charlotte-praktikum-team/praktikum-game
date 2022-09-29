import path from 'path';
import { Configuration, Plugin, Entry } from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import LoadablePlugin from '@loadable/webpack-plugin';
import { InjectManifest } from 'workbox-webpack-plugin';

import { IS_DEV, SRC_DIR, DIST_DIR } from './env';
import audioLoader from './loaders/audio';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';
import svgLoader from './loaders/svg';
import imgLoader from './loaders/img';

const config: Configuration = {
  entry: ([
    IS_DEV && 'react-hot-loader/patch',
    // IS_DEV && 'webpack-hot-middleware/client',
    IS_DEV && 'css-hot-loader/hotModuleReplacement',
    path.join(SRC_DIR, 'client'),
  ].filter(Boolean) as unknown) as Entry,
  module: {
    rules: [audioLoader.client, cssLoader.client, jsLoader.client, svgLoader.client, imgLoader.client]
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: { 'react-dom': '@hot-loader/react-dom' },
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    !IS_DEV && new CompressionPlugin(),
    ...(!IS_DEV ? [
      new InjectManifest({
        swSrc: './src/sw.ts',
      }),
    ] : []),
    new LoadablePlugin(),
  ].filter(Boolean) as Plugin[],
  devtool: 'source-map',
  performance: {
    hints: IS_DEV ? false : 'warning',
  },
};

export default config;
