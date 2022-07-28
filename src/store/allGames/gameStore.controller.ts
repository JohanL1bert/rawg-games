/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
import { GameStoreServices } from 'store/allGames/gameStore.services';
import { apiService } from 'store/allGames//apiService';
import { IGameController } from 'store/allGames/interface';

export class GameStoreController implements IGameController {
  constructor(private readonly gameStoreServices: GameStoreServices) {}

  key = process.env.REACT_APP_API_KEY;

  async uploadController(pageNumber: any) {
    try {
      this.gameStoreServices.startetService(true);
      const data: any = await apiService.get(
        `https://api.rawg.io/api/games?key=${this.key}&page=${pageNumber}`
      );
      this.gameStoreServices.getGameService(data.data);
    } catch (e) {
      console.log(e);
    } finally {
      this.gameStoreServices.startetService(false);
    }
  }
}
