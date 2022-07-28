/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */

import { AllGamesStore } from 'store/allGames//gameStore';
import { TLoad /* IGameStore */ } from 'store/allGames/interface';
import { totalPage } from 'common/helpers/totalPage';

export class GameStoreServices {
  constructor(private readonly store: AllGamesStore) {}

  loadService(load: TLoad) {
    return this.store.loadStatus(load);
  }

  startetService(started: boolean) {
    return this.store.startedStatus(started);
  }

  getGameService(data: any) {
    const totalPages = totalPage(data.count, 20);
    return this.store.upload({ data, paginatePage: totalPages });
  }
}
