/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import { ICardItem } from 'common/interfaces/homeItemInterface';
import { Rating } from 'common/components/home/Rating';

export const HomeItems = ({ data }: { data: ICardItem }) => {
  return (
    <div className="home-item">
      <div className="home-item-wrapper">
        <div className="home-item-upper">
          <div className="upper__wrapper">
            <div className="upper__play-btn" />
            <img src={data.background_image} alt="game background" className="upper__image" />
            <video className="upper__video" />
            <div className="upper__play-text">Play full video</div>
          </div>
        </div>
        <div className="home-item-bottom">
          <div className="bottom__wrapper">
            <div className="bottom__icon" />
            {data.metacritic && <Rating metacritic={data.metacritic} />}
            <div className="bottom__text">
              <div className="bottom__text-wrapper">
                <p className="bottom__text-tittle">
                  {data.name}
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
