import collect from "bisheng/collect";
import MainContent from "./MainContent";
import React from 'react'
// export default MainContent
export default collect(async (nextProps) => {

  const { pathname } = nextProps.location;
  const pageDataPath = pathname.split("/");
  pageDataPath.shift();


  console.log(nextProps.data, [...pageDataPath, 'demo'], '...pageDataPath, demo');
  const demosFetcher = nextProps.utils.get(nextProps.data, [
    ...pageDataPath,
    "demo",
  ]);
  console.log(demosFetcher, 'demosFetcher');
  // console.log(nextProps.data.components.Button.demo.icon(), 'demosFetcher');
  // nextProps.data.components.Button.demo.icon().then(res => {console.log(res, 'res');})
  if (demosFetcher) {
  //   const [demos] = await Promise.all([demosFetcher()]);
    return { demos: demosFetcher };
  }
})(MainContent);
