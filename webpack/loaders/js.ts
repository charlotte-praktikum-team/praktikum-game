const path = require('path');

export default {
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        configFile: path.resolve('./tsconfig.json'),
        transpileOnly: true,
      },
    },
  ],
}
