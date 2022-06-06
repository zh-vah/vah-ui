// require('core-js/es6/string');
// const path = require('path');

module.exports = {
  // lazyLoad(nodePath, nodeValue) {
  //   // if (typeof nodeValue === 'string') {
  //   //   return true;
  //   // }
  //   return nodePath.endsWith('/demo');
  // },
  lazyLoad: false,
  pick: {
    posts(markdownData) {
      return {
        meta: markdownData.meta,
        description: markdownData.description,
      };
    },
    // components(markdownData) {
    //   // const { filename } = markdownData.meta;
    //   // if (!/^components/.test(filename)
    //   //     || /[/\\]demo$/.test(path.dirname(filename))) return;
    //   return {
    //     meta: markdownData.meta,
    //   };
    // },
    // changelog(markdownData) {
    //   if (/CHANGELOG/.test(markdownData.meta.filename)) {
    //     return {
    //       meta: markdownData.meta,
    //     };
    //   }
    // },
  },
  plugins: [
    "bisheng-plugin-description",
    "bisheng-plugin-toc?maxDepth=2&keepElem",
    // 'bisheng-plugin-hzero-ui',
    "@ant-design/bisheng-plugin",
    "bisheng-plugin-react?lang=__react",
  ],
  routes: [
    {
      path: "/",
      component: "./template/Layout",
      childRoutes: [
        {
          path: "/components",
          component: "./template/Content",
        },
        {
          path: "/components/:children",
          dataPath: "/:children/index",
          component: "./template/Content",
        },
        {
          path: "/docs/:children",
          dataPath: "/:children",
          component: "./template/Content",
        },
      ],
    },
  ],
};
