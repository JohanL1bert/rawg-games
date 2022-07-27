import React from 'react';

export const NavBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__inner">
        <aside className="sidebar__category">
          <nav className="sidebar__category__nav">
            <div className="sidebar__category__home">
              <a href="#" className="sidebar__category__title">
                HOME
              </a>
            </div>
            <div className="sidebar__category__reviews">
              <a href="" className="sidebar__category__tittle">
                Reviews
              </a>
            </div>
            <div className="sidebar__category__items">
              <div className="sidebar__category__menu">
                <span className="sidebar__category__tittle">New Releases</span>
              </div>
              <div className="sidebar__category__menu">
                <span className="sidebar__category__tittle">Top</span>
              </div>
              <div className="sidebar__category__menu">
                <span className="sidebar__category__tittle">All Games</span>
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
};
