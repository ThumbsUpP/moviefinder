import './Header.scss';
import React from 'react';
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper';
import SearchIcon from '@/public/searchicon.svg';

const Header = () => {
  return (
    <div className="header">
      <ContentWrapper className="header-content">
        <img className="header-content__img" src="/logo.svg" alt="logo" />
        <form className="header-content__form">
          <SearchIcon />
          <input
            className="header-content__form__search"
            placeholder="Non fonctionnel..."
          />
        </form>
      </ContentWrapper>
    </div>
  );
};

export default Header;
