import { makeAutoObservable } from 'mobx';
import { TLoad, IGameStore } from 'store/allGames/interface';
import { AppLoadStatus } from 'common/enums/store-load-status.enum';
import { GameStoreController } from 'store/allGames/gameStore.controller';
import { GameStoreServices } from 'store/allGames//gameStore.services';

export class AllGamesStore implements IGameStore {
  loading: TLoad = AppLoadStatus.pending;

  isStarted: boolean = false;

  totalPage: number = 0;

  store: any = {
    results: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  loadStatus(load: TLoad) {
    this.loading = load;
  }

  startedStatus(started: boolean) {
    this.isStarted = started;
  }

  upload(dataGames: any) {
    const { paginatePage } = dataGames;
    const { data } = dataGames;
    this.totalPage = paginatePage;
    this.store.results.push(...data.results);
  }
}

const allGamesStore = new AllGamesStore();
const service = new GameStoreServices(allGamesStore);
const gameController = new GameStoreController(service);

export { allGamesStore, gameController };
