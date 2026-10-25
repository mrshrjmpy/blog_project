import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: {
  login: "./src/index.js",
  homepage: "./src/homepage/homepage.js",
  profile: "./src/profile/profile.js",
},

  output: {
    filename: "[name].js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
    plugins: [
    new HtmlWebpackPlugin({
      title: "login",
      filename: "index.html",
      template: "./src/index.html",
      chunks:["login"],
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
    }),],
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
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

const generateHtmlPlugin = (title) => {
  return new htmlWebpackPlugin({
    title,
    filename: 'index.html',
    template: `./src/pages/${title.toLowerCase()}/index.html`,
  });
}

const populateHtmlPlugins = (pagesArray) => {
  res = [];
  pagesArray.forEach(page => {
    res.push(generateHtmlPlugin(page));
  })
  return res;
}