import path from 'path';
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import { IS_DEV, SRC_DIR, DIST_DIR } from './env';
import audioLoader from './loaders/audio';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';
import fileLoader from './loaders/file';

const config: Configuration = {
  name: 'server',
  target: 'node',
  node: { __dirname: false },
  entry: path.join(SRC_DIR, 'server'),
  module: {
    rules: [audioLoader.server, cssLoader.server, jsLoader.server, fileLoader.server]
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: DIST_DIR,
    publicPath: '/assets/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  devtool: 'source-map',
  performance: {
    hints: IS_DEV ? false : 'warning',
  },
  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
  optimization: { nodeEnv: false },
};

export default config;
