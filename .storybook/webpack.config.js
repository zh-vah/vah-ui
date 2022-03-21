module.exports = ({ config }) => {
  config.module.rules.push({
    rules: [
      {
        // 增加对 SCSS 文件的支持
        test: /\.scss$/,
        // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      
      // 用于解析文档自动生成语法，但似乎新版已经被打包好了
      {
        test: /\.tsx?$/,
        use: [
          // {
          //   loader: require.resolve("babel-loader"),
          // }, 
          // {
          //   loader: require.resolve("react-docgen-typescript-loader"),
          //   options: {
          //     shouldExtractLiteralValuesFromEnum: true,
          //     propFilter: (prop) => {
          //       if (prop.parent) {
          //         return !prop.parent.fileName.includes('node_modules')
          //       }
          //       return true            
          //     }
          //   }
          // }
        ]}
    ],
  });

  config.resolve.extensions.push(".scss");

  return config;
};
