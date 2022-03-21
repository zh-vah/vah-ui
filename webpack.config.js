const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    // 先尝试 ts 后缀的 TypeScript 源码文件
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        // 命中项目目录下所有的 JavaScript 文件
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: ["babel-loader"],
      },
      // {
      //   test: /\.ts$/,
      //   loader: "awesome-typescript-loader",
      // },
      {
        // 增加对 SCSS 文件的支持
        test: /\.scss$/,
        // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    open: true,
    port: 3001,
    static: {
      // 指定托管的根目录 contentBase: __dirname, -- 请注意，这种写法已弃用
      directory: path.join(__dirname, "/"),
    },
    hot: true,
  },
  devtool: "source-map",
  mode: "development",
};
