const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const config = require(path.resolve(__dirname, 'webpack', process.env.NODE_ENV));

const baseConfig = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue?$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: { ie: "11" },
                    useBuiltIns: 'entry',
                    corejs: 3
                  }
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        exclude: path.resolve(__dirname, 'src', 'index.html'),
        options: {
          esModule: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      favicon: path.resolve(__dirname, 'src', 'favicon.ico'),
      title: 'title',
      hash: true
    }),
    new ESLintPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
};

module.exports = merge(baseConfig, config);
