/* eslint-disable consistent-return */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */

import { GameStoreServices } from 'store/allGames/gameStore.services';
import { apiService } from 'store/allGames//apiService';
import { AppLoadStatus } from 'common/enums/store-load-status.enum';

export class GameStoreController {
  constructor(private readonly gameStoreServices: GameStoreServices) {}

  key = process.env.REACT_APP_API_KEY;

  async uploadController(pageNumber: any) {
    try {
      this.gameStoreServices.loadService(AppLoadStatus.pending);
      const data: any = await apiService.get(
        `https://api.rawg.io/api/games?key=${this.key}&page=${pageNumber}`
      );
      this.gameStoreServices.getGameService(data.data);
      this.gameStoreServices.loadService(AppLoadStatus.done);
    } catch (e) {
      console.log(e);
    }
  }

  async countController() {
    try {
      this.gameStoreServices.loadService(AppLoadStatus.pending);
      const count: any = await apiService.get(`https://api.rawg.io/api/games?key=${this.key}`);
      this.gameStoreServices.getCountService(count);
      this.gameStoreServices.loadService(AppLoadStatus.done);
    } catch (e) {
      console.log(e);
    }
  }
}
