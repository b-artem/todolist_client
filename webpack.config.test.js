const webpack = require('webpack')
const merge = require('webpack-merge')

const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',

  output: {
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('test')
      }
    })
  ]
})
