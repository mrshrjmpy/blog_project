import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"; // Import the plugin

export default {
  mode: "development",
  entry: {
    login: "./src/index.js",
    homepage: "./src/homepage/homepage.js",
    profile: "./src/profile/profile.js",
    create: "./src/create/create.js",
    postview: "./src/postview/postview.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css", 
    }),
    new HtmlWebpackPlugin({
      title: "login",
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["login"],
    }),
    new HtmlWebpackPlugin({
      title: "homepage",
      filename: "homepage.html",
      template: "./src/homepage/homepage.html",
      chunks: ["homepage"],
    }),
    new HtmlWebpackPlugin({
      title: "profile",
      filename: "profile.html",
      template: "./src/profile/profile.html",
      chunks: ["profile"],
    }),
    new HtmlWebpackPlugin({
      title: "create",
      filename: "create.html",
      template: "./src/create/create.html",
      chunks: ["create"],
    }),
    new HtmlWebpackPlugin({
      title: "postview",
      filename: "postview.html",
      template: "./src/postview/postview.html",
      chunks: ["postview"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        exclude: [
          path.resolve(import.meta.dirname, "src/index.html"),
          path.resolve(import.meta.dirname, "src/homepage/homepage.html"),
          path.resolve(import.meta.dirname, "src/profile/profile.html"),
          path.resolve(import.meta.dirname, "src/create/create.html"),
          path.resolve(import.meta.dirname, "src/postview/postview.html"),
        ]
      },
    ],
  },
};
