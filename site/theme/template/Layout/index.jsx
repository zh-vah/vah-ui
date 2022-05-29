import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

if (typeof window !== 'undefined') {
  /* eslint-disable global-require */
  require('../../static/style');
}

const Layout = props => {
  const { pathname } = props.location;
  const { children, ...restProps } = props;
  console.log(props, 'wdeprops');
  return (
    <div className="page-wrapper">
      <Header {...restProps} />
      {children}
      {/* <Footer {...restProps} /> */}
    </div>
  );
};

export default Layout;
