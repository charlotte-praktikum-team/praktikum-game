const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { IS_DEV } = require('../env');

export default {
  client: {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          sourceMap: IS_DEV,
        },
      },
      {
        loader: 'postcss-loader',
      },
    ],
  },
  server: {
    test: /\.css$/,
    loader: 'null-loader'
  }
}
