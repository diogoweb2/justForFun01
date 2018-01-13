const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

const prodLayoutFolder =
  "../../Bgrs.RA.SP.Branding/Layouts/Bgrs.RA.SP.Branding/";
const prodStyleFolder = "../../Bgrs.RA.SP.Branding/STYLES/";
let isProd = false;
if (process.env.NODE_ENV !== undefined) {
  isProd = process.env.NODE_ENV.trim() === "production";
}

module.exports = {
  entry: {
    react: ["react", "react-dom"],
    Messages: "./src/widgets/Messages/index.jsx"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader?sourceMap",
          use: [{ loader: "css-loader", options: { importLoaders: 1 } }]
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

  devtool: "cheap-source-map",
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: isProd
      ? `${prodLayoutFolder}[name].js`
      : "../Layouts/JSWP/[name].js"
  },
  devServer: {
    overlay: {
      errors: true
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["react"],
      chunks: ["Messages"],
      minChunks: 2
    }),

    new WriteFilePlugin(),
    new ExtractTextPlugin({
      filename: isProd ? `${prodStyleFolder}[name].css` : "../STYLES/[name].css"
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
    // new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
    //   //analyzerMode: "disabled"
    //   analyzerMode: "server"
    // }),
    new DuplicatePackageCheckerPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.DefinePlugin({
      DEV_ENV: JSON.stringify(!isProd),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    })

    // new MinifyPlugin()
  ]
};
