import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__item">
          <div className="header__logo">1</div>
        </div>
        <div className="header__item">
          <div className="header__rate">2</div>
        </div>
        <div className="header__item">
          <div className="header__search__inner">4</div>
        </div>
        <div className="header__item">
          <div className="header__log">
            <a href="#" className="header__log__link">
              LOG IN
            </a>
            <a href="#" className="header__log__link">
              SIGN UP
            </a>
            <a href="#" className="header__log__link">
              API
            </a>
            <div className="header__log__menu">menu</div>
          </div>
        </div>
      </div>
    </header>
  );
};
