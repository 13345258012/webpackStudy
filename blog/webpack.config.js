const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "dist.js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    title: '博客列表'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
    ]
  }
}