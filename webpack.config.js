const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.js",
    pageload: "./src/pageload.js",
    header: "./src/header.js",
    sidebar: "./src/sidebar.js",
    todoView: "./src/todoView.js",
    formView: "./src/formView.js",
    storageHandler: "./src/storageHandler.js",
    projectDeleteAd: "./src/projectDeleteAd.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        use: "raw-loader",
      },
    ],
  },
};