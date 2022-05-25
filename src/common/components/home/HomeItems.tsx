import React from 'react';

export const HomeItems = () => {
  return (
    <div className="home-item">
      <div className="home-item-wrapper">
        <div className="home-item-upper">
          <div className="upper__wrapper">
            <div className="upper__play-btn" />
            <video src="" className="upper__video" />
            <div className="upper__play-text">Play full video</div>
          </div>
        </div>
        <div className="home-item-bottom">
          <div className="bottom__wrapper">
            <div className="bottom__icon" />
            <div className="bottom__text">
              <div className="bottom__text-wrapper">
                <p className="bottom__text-tittle">
                  <span className="bottom__text-icon" />
                </p>
              </div>
            </div>
            <div className="bottom__likes">
              <div className="likes__wrapper">
                <div className="likes__plus">+</div>
                <div className="likes__number">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
