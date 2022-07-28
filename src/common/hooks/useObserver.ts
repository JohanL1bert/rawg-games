import { RefObject, useEffect, useRef } from 'react';
import { IntersecterOptions } from 'common/const/intersectionObserver.const';

export const useObserver = (
  ref: RefObject<HTMLSpanElement>,
  canLoad: boolean,
  isStarted: boolean,
  callback: () => void
) => {
  const itemObserver = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isStarted) return;
    if (itemObserver.current) itemObserver.current.disconnect();
    const insideCallback = (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && canLoad) {
        callback();
      }
    };
    itemObserver.current = new IntersectionObserver(insideCallback, IntersecterOptions);
    itemObserver.current.observe(ref.current!);
  }, [isStarted]);
};
