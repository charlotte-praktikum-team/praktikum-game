const imgRegex = /^(?!.*\.inline).*\.(png|jpg|jpeg)$/;

export default {
  client: {
    test: imgRegex,
    loader: 'url-loader',
  },
  server: {
    test: imgRegex,
    loader: 'null-loader',
  }
}
