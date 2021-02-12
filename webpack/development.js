const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
    compress: true,
    index: 'index.html',
    host: '0.0.0.0',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              esModule: false,
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};
