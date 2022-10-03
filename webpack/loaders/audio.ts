const audioRegex = /^(?!.*\.inline).*\.(ogg|mp3|wav|mpe?g)$/;

export default {
  client: {
    test: audioRegex,
    loader: 'file-loader',
  },
  server: {
    test: audioRegex,
    loader: 'null-loader',
  }
}
