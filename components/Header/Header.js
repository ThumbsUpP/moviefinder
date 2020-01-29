import './Header.scss';
import React, { useContext } from 'react';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import { StoreContext } from '@/contexts/StoreContext';

const Header = () => {
  const { state, dispatch } = useContext(StoreContext);
  console.log(state);
  return (
    <div className="header">
      <ContentWrapper className="header-content">
        <img src="/logo.svg" alt="logo" />
      </ContentWrapper>
    </div>
  );
};

export default Header;
