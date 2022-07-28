import React from 'react';
import { metacriticColor } from 'common/helpers/metacriticColor';

export const Rating = ({ metacritic }: { metacritic: number }) => {
  const { colorElement, borderColor } = metacriticColor(metacritic);

  return (
    <div className="bottom__rating" style={{ color: colorElement, borderColor }}>
      {metacritic}
    </div>
  );
};
