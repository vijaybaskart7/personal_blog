import React from 'react';
import Header from './Header';
import Marque from './Marque';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
