import React from 'react';

import Footer from '../molecules/Footer';
import Header from '../molecules/Header';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
