import React from 'react';

export const HomeSlider = ({
  shortScreenshots,
  backgroundImage,
}: {
  shortScreenshots: any;
  backgroundImage: string;
}) => {
  console.log(shortScreenshots);

  return (
    <>
      <img src={backgroundImage} loading="lazy" alt="games screen" className="upper__image" />;
      <div className="upper__slider">
        {shortScreenshots.map((item: any) => {
          console.log(item);
          return (
            <div className="slider">
              <img className="slider__img" alt="slider" />
              <span className="slider__bar" />
            </div>
          );
        })}
      </div>
    </>
  );
};
