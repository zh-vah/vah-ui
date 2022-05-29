module.exports = {
  port: 8002,
  exclude: /should-be-ignore/,
  // theme: 'bisheng-theme-one',
  theme: "./site/theme",
  source: ["./src/components", "./docs/react"],
  // source: { components: "./src/components", docs: "./docs/react" }
  htmlTemplate: './site/theme/static/template.html',
  themeConfig: {
    home: "/",
    sitename: "One",
    tagline: "The one theme for bisheng",
    // navigation: [{
    //   title: 'BiSheng',
    //   link: 'https://github.com/benjycui/bisheng',
    // }],
    // footer: 'Copyright and so on...',
    // hideBisheng: true,
    github: "https://github.com/benjycui/bisheng",
  },
  webpackConfig(config) {
    // config.externals = {
    //   'react-router-dom': 'ReactRouterDOM',
    //   'react': 'React'
    // };

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
  lessConfig: {
    javascriptEnabled: true,
    modifyVars: {
      "root-entry-name": "variable",
    },
  },
  root: "/bisheng/",
};
