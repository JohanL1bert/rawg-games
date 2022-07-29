/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
import React from 'react';
import { toJS } from 'mobx';
import { ICardItem } from 'common/interfaces/homeItemInterface';
import { Rating } from 'common/components/home/Rating';
import { HomeSlider } from 'common/components/home/HomeSlider';
import { HomeVideo } from 'common/components/home/HomeVide';

export const HomeItems = ({ data }: { data: ICardItem }) => {
  const { metacritic, name, short_screenshots, clip, background_image } = data;

  console.log(toJS(data));
  return (
    <div className="home-item">
      <div className="home-item-wrapper">
        <div className="home-item-upper">
          <div className="upper__wrapper">
            {clip === null ? (
              <HomeSlider shortScreenshots={short_screenshots} backgroundImage={background_image} />
            ) : (
              <HomeVideo />
            )}
          </div>
        </div>
        <div className="home-item-bottom">
          <div className="bottom__wrapper">
            <div className="bottom__icon" />
            {data.metacritic && <Rating metacritic={metacritic} />}
            <div className="bottom__text">
              <div className="bottom__text-wrapper">
                <p className="bottom__text-tittle">
                  {name}
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
