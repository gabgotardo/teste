const path = require("path");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpackDashboard = require("webpack-dashboard/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pagesPath = "./src/js/pages";
const isProduction = process.env.NODE_ENV === "production";

function generateEntries(templateDir) {
  const entries = {
    general: [path.resolve(__dirname, "src/js/App.js")],
    recommendation: [`${pagesPath}/Recommendation/index.tsx`],
  };

  const templateFiles = fs
    .readdirSync(path.resolve(__dirname, templateDir))
    .filter(item => item[0] !== ".");

  for (const item of templateFiles) {
    const [name, extension] = item.split(".");
    const fileName = name.split("-")[0];

    if (extension === "ejs") {
      entries[fileName] = [path.join(pagesPath, `${fileName}/index.js`)];
    }
  }

  return entries;
}

const entries = generateEntries("src/templates");

module.exports = {
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? false : "source-map",
  stats: "minimal",
  entry: entries,
  output: {
    filename: "arquivos/B8T-store-[name].js",
    path: path.resolve(__dirname, "dist"),
    chunkLoadingGlobal: "webpackJsonp",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
  },
  module: {
    noParse: /jquery|lodash|hammerjs/,
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "src"),
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000,
            name: "arquivos/[name].[ext]",
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["static*.*", "!static1.js"],
      verbose: true,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/img", to: "arquivos" }],
    }),
    new ForkTsCheckerWebpackPlugin(),
    new webpackDashboard(),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: isProduction,
          toplevel: true,
          format: {
            comments: false,
          },
          compress: {
            drop_console: isProduction,
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [
      ".tsx",
      ".ts",
      ".js",
      ".jsx",
      ".json",
      ".css",
      ".sass",
      ".scss",
    ],
    alias: {
      Components: path.resolve(__dirname, "src/js/components"),
      Helpers: path.resolve(__dirname, "src/js/helpers"),
      Services: path.resolve(__dirname, "src/js/services"),
    },
  },
};
