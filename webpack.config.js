const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

let isProd = false;
if (process.env.NODE_ENV !== undefined) {
  isProd = process.env.NODE_ENV.trim() === "production";
}

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: {
    react: ["react", "react-dom"],
    HD: "./src/index.jsx"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },

      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        loader: "file?name=/font/[name].[ext]"
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: "file?name=/image/[name].[ext]"
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json"
      }
    ]
  },

  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: "[name].js"
  },
  devServer: {
    overlay: {
      errors: true
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["react"],
      minChunks: Infinity
    }),

    new WriteFilePlugin(),
    new ExtractTextPlugin({
      filename: "[name].css"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          // Fail only on errors
          failOnWarning: true,
          failOnError: true,

          // Toggle autofix
          fix: true
        }
      }
    }),

    new DuplicatePackageCheckerPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.DefinePlugin({
      DEV_ENV: JSON.stringify(!isProd),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
