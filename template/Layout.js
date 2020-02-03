import './Layout.scss';
import React from 'react';
import cn from 'classnames';
import Header from '@/components/Header/Header';

const Layout = ({ children, className }) => (
  <div className={cn('layout', { [className]: !!className })}>
    <div className="layout__background" />
    <Header />
    {children}
  </div>
);

export default Layout;
