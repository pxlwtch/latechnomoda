const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin("bundle.css");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs")
  },
  plugins: [
    new HtmlWebpackPlugin({filename: 'index.html', template: 'src/index.html'}),
    new HtmlWebpackPlugin({filename: 'main.html', template: 'src/main.html'}),
    new HtmlWebpackPlugin({filename: 'bio.html', template: 'src/bio.html'}),
    new HtmlWebpackPlugin({filename: 'resume.html', template: 'src/resume.html'}),
    new HtmlWebpackPlugin({filename: 'work.html', template: 'src/work.html'}),
    new HtmlWebpackPlugin({filename: 'case-study/beverly.html', template: 'src/case-study/beverly.html'}),
    new HtmlWebpackPlugin({filename: 'case-study/bandshite.html', template: 'src/case-study/bandshite.html'}),
    extractSass,
    extractSass
  ],
  module: {
    rules: [
      // { test: /\.html$/, use: [ 'file-loader?name=[path][name].[ext]!extract-loader!html-loader' ] }
      {test: /\.jpg$/, use: ["file-loader"]},
      {test: /\.png$/, use: ["url-loader?mimetype=image/png"]},
      // {test: /\.scss$/, use: [ "css-loader", "sass-loader" ]},
      {test: /\.scss$/, use: extractSass.extract({
        use: ["css-loader", "sass-loader"],
        fallback: "style-loader",
        publicPath: "static/css"
      })},
      {test: /\.html$/, use: [{loader: 'html-loader', options: { minimize: true }}]}
    ]
  }
};
