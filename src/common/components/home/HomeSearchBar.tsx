import React from 'react';

export const HomeSearchBar = () => {
  return (
    <div className="home-bar">
      <h2>New and trending</h2>
      <p>Based on player counts and realse date</p>
      <div className="home-bar__wrapper">
        <div className="home-bar-search-options" />
        <div className="home-bar-display" />
      </div>
    </div>
  );
};
