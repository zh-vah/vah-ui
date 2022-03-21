import React, { Fragment, useEffect, useState } from "react";

import useMousePositon from "./uesmousePosition";

const MouseTranks: React.FC = () => {
  const positon = useMousePositon();
  return (
    <Fragment>
      <p>{"x:" + positon.x + "y:" + positon.y}</p>
      <code>sdad</code>
    </Fragment>
  );
};

export default MouseTranks;
