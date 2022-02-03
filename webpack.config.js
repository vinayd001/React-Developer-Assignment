const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  devServer: {
    port: "3000",
    static: ["./public"],
    open: true,
    // no logging in the console
    client: {
      logging: "none",
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ",json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
