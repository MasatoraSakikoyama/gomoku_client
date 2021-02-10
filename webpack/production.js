const path = require('path')

const base = {
  mode: 'production'
}

const rules = [
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

const plugins = []

module.exports = { base, rules, plugins }
