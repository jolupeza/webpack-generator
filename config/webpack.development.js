const path = require('path')

const config = {
  mode: 'development',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../', 'dist')
  },
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../', 'dist'),
    hot: true,
    clientLogLevel: "info",
    overlay: {
      warnings: true,
      errors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/i,
        exclude: /node_modules/,
        use: "eslint-loader",
        enforce: "pre"
      },
      {
        test: /\.scss$/i,
        sideEffects: true,
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
