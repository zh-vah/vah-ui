import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import MainContent from '../Content'

if (typeof window !== 'undefined') {
  /* eslint-disable global-require */
  require('../../static/style');
}

const Layout = props => {
  const { pathname } = props.location;
  const { children, ...restProps } = props;
  console.log(children, 'children');
  return (
    <div className="page-wrapper">
      <Header {...restProps} />
      {children? children : <MainContent></MainContent>}
      {/* <Footer {...restProps} /> */}
    </div>
  );
};

export default Layout;
