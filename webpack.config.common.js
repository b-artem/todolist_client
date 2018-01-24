const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js'
  },

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: [
      '.js', '.jsx'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(svg|ttf|woff|woff2|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        exclude: [ path.resolve(__dirname, 'public/index.html') ],
        use: [
          { loader: 'ngtemplate-loader' },
          { loader: 'html-loader', options: { minimize: true, attrs: false } }
        ],
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'TODO List Application',
      template: 'public/index.html'
    }),

    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'runtime' }),

    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}
