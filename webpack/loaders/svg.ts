export default {
  client: {
    test: /^(?!.*\.inline).*\.svg$/,
    loader: '@svgr/webpack',
  },
  server: {
    test: /^(?!.*\.inline).*\.svg$/,
    loader: 'null-loader',
  }
}
