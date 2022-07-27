/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import { AllGamesStore } from 'store/allGames//gameStore';
import { TLoad /* IGameStore */ } from 'store/allGames/interface';

export class GameStoreServices {
  constructor(private readonly store: AllGamesStore) {}

  loadService(load: TLoad) {
    return this.store.loadStatus(load);
  }

  getGameService(data: any) {
    return this.store.upload(data);
  }

  getCountService(count: any) {
    return this.store.countPage(count.data.count);
  }
}
