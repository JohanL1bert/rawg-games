import { makeAutoObservable } from 'mobx';
import { TLoad /* IGameStore */ } from 'store/allGames/interface';
import { AppLoadStatus } from 'common/enums/store-load-status.enum';
import { GameStoreController } from 'store/allGames/gameStore.controller';
import { GameStoreServices } from 'store/allGames//gameStore.services';

export class AllGamesStore {
  loading: TLoad = AppLoadStatus.pending;

  count: number = 0;

  store: any = {
    results: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  loadStatus(load: TLoad) {
    this.loading = load;
  }

  upload(data: any) {
    const clone = { ...data };
    this.store.results.push(...clone.results);
  }

  countPage(count: number) {
    this.count = count;
  }

  /*  async loadAllGames() {
    this.loading = AppLoadStatus.pending;
    try {
      const data = await axios.get(
        `https://api.rawg.io/api/games?key=2a4e5fe5763546019fe84b4d252a4110`
      );
      console.log(data, 'data');
      this.loading = AppLoadStatus.done;
    } catch (err) {
      this.loading = AppLoadStatus.error;
      throw new Error(`${err}`);
    }
  } */
}

const allGamesStore = new AllGamesStore();
const service = new GameStoreServices(allGamesStore);
const gameController = new GameStoreController(service);

export { allGamesStore, gameController };
