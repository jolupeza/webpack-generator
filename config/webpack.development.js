const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../', 'dist'),
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
}

module.exports = config
