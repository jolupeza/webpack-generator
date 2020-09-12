const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenhash].bundle.js',
    path: path.resolve(__dirname, '../', 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        sideEffects: true,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            },
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}

module.exports = config
