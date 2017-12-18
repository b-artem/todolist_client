const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.module.js'
    // vendor: [
    //   'react',
    //   'react-dom'
    // ]
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
        test: /\.(png|jpg|jpeg|gif|svg|ttf|woff|woff2)$/,
        use: 'file-loader?name=[name].[ext]',
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
