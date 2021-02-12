const path = require('path');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false
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
              esModule: false
            }
          },
          'sass-loader'
        ]
      }
    ]
  }
};
