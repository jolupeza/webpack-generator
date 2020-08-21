const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../css'
            },
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}

module.exports = config
