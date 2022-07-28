import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { HomeOptions } from 'common/components/home/HomeOptions';
import { HomeItems } from 'common/components/home/HomeItems';
import { HomeHeader } from 'common/components/home/HomeHeader';
import { allGamesStore, gameController } from 'store/allGames/gameStore';
import { useObserver } from 'common/hooks/useObserver';
import { ICardItem } from 'common/interfaces/homeItemInterface';

export const HomeContainer = observer(() => {
  const { store, isStarted, totalPage } = allGamesStore;
  const [pageNum, setPageNum] = useState<number>(1);

  const lastPageElement = useRef<HTMLDivElement>(null);

  useObserver(lastPageElement, pageNum < totalPage, isStarted, () => {
    setPageNum((prev) => prev + 1);
  });

  useEffect(() => {
    gameController.uploadController(pageNum);
  }, [pageNum]);

  console.log(toJS(store));

  return (
    <section>
      <HomeHeader />
      <HomeOptions />
      <div className="home-container">
        <div className="home-items">
          {store.results.map((item: ICardItem) => (
            <HomeItems key={item.id} data={item} />
          ))}
        </div>
      </div>

      <span style={{ height: '1px', display: 'inline-block' }} ref={lastPageElement}>
        {isStarted && (
          <div className="loading">
            <h2 style={{ width: '100px', height: '100px' }}>Loading...</h2>
          </div>
        )}
      </span>
    </section>
  );
});
