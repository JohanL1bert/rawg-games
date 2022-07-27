import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { HomeOptions } from 'common/components/home/HomeOptions';
import { HomeItems } from 'common/components/home/HomeItems';
import { HomeHeader } from 'common/components/home/HomeHeader';
import { allGamesStore, gameController } from 'store/allGames/gameStore';
import { IntersecterOptions } from 'common/const/intersectionObserver.const';
import { AppLoadStatus } from 'common/enums/store-load-status.enum';
import { totalPage } from 'common/helpers/totalPage';

export const HomeContainer = observer(() => {
  const { store, loading, count } = allGamesStore;
  const [pageNum, setPageNum] = useState(1);
  const [lastRefElement, setLastRefElement] = useState<null | HTMLDivElement>(null);

  const observerEl = useRef(
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNum((prev) => prev + 1);
      }
    }, IntersecterOptions)
  );

  const countPages = totalPage(count, 20);

  useEffect(() => {
    gameController.countController();
  }, []);

  useEffect(() => {
    if (pageNum <= countPages && countPages > 0) {
      gameController.uploadController(pageNum);
    } else {
      console.log('inside controller');
    }
  }, [pageNum, count]);

  useEffect(() => {
    const currentRefElement = lastRefElement;
    const currentObserver = observerEl.current;

    if (currentRefElement && pageNum < countPages + 1 && countPages > 0) {
      currentObserver.observe(currentRefElement);
    }

    return () => {
      if (currentRefElement) {
        currentObserver.unobserve(currentRefElement);
      }
    };
  }, [lastRefElement, count]);

  return (
    <section>
      <HomeHeader />
      <HomeOptions />
      {store.results.map((item: any) => (
        <HomeItems key={item.id} />
      ))}
      {loading === AppLoadStatus.done && pageNum < countPages ? (
        <div className="loading" ref={setLastRefElement}>
          <h2 style={{ width: '100px', height: '100px' }}>Loading...</h2>
        </div>
      ) : null}
    </section>
  );
});
