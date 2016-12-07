module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          "style",
          "css",
          "sass"
        ],
        exclude: /node_modules/
      },
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015', 'react'
          ]
        }
      }
    ]
  }
}
