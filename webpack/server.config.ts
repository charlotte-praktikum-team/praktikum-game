import { Configuration } from 'webpack';
import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

import { IS_DEV, SRC_DIR, DIST_DIR } from './env';
import audioLoader from './loaders/audio';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';
import svgLoader from './loaders/svg';
import imgLoader from './loaders/img';

const config: Configuration = {
  name: 'server',
  target: 'node',
  node: { __dirname: false },
  entry: path.join(SRC_DIR, 'server'),
  module: {
    rules: [audioLoader.server, cssLoader.server, jsLoader, svgLoader.server, imgLoader.client]
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
    publicPath: '/assets/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devtool: IS_DEV ? 'cheap-source-map' : 'source-map',
  performance: {
    hints: IS_DEV ? false : 'warning',
  },
  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
  optimization: { nodeEnv: false },
};

export default config;
