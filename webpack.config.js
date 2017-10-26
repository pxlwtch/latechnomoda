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
    new HtmlWebpackPlugin({filename: 'work.html', template: 'src/work.html'}),
    new HtmlWebpackPlugin({filename: 'case-study/aqua.html', template: 'src/case-study/aqua.html'}),
    new HtmlWebpackPlugin({filename: 'case-study/bandshite.html', template: 'src/case-study/bandshite.html'}),
    new HtmlWebpackPlugin({filename: 'case-study/beverly.html', template: 'src/case-study/beverly.html'}),
    new HtmlWebpackPlugin({filename: 'case-study/rosie.html', template: 'src/case-study/rosie.html'}),
    extractSass
  ],
  module: {
    rules: [
      {test: /\.jpg$/, use: ["file-loader"]},
      {test: /\.png$/, use: ["url-loader?mimetype=image/png"]},
      {test: /\.gif$/, use: [{
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/"
        }

      },
      {
        loader: "image-webpack-loader",
        options: {
          query: {
         //   mozjpeg: {
         //     progressive: true,
         //   },
            gifsicle: {
              interlaced: true,
            },
         //   optipng: {
         //     optimizationLevel: 7,
         //   }
          }
        }
      }
      ]},
      {test: /\.scss$/, use: extractSass.extract({
        use: ["css-loader", "sass-loader"],
        fallback: "style-loader",
        publicPath: "static/css"
      })},
      {test: /\.html$/, use: [{loader: 'html-loader', options: { minimize: true }}]}
    ]
  }
};
