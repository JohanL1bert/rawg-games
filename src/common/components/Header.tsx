import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoute } from 'common/const/AppRoutes.const';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__item">
          <NavLink to={AppRoute.main}>
            <div className="header__logo">RAWG</div>
          </NavLink>
        </div>
        <div className="header__item">
          <div className="header__rate">2</div>
        </div>
        <div className="header__item">
          <div className="header__search__inner">4</div>
        </div>
        <div className="header__item">
          <div className="header__log">
            <NavLink to={AppRoute.login} className="header__log__link">
              LOG IN
            </NavLink>
            <NavLink to={AppRoute.signIn} className="header__log__link">
              SIGN UP
            </NavLink>
            <a href="https://rawg.io/apidocs" className="header__log__link">
              API
            </a>
            <div className="header__log__menu">menu</div>
          </div>
        </div>
      </div>
    </header>
  );
};
