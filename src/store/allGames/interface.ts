export type TLoad = 'pending' | 'done' | 'error';

export interface IGameStore {
  loading: TLoad;
  isStarted: boolean;
  store: any;

  loadStatus(load: TLoad): void;
  startedStatus(started: boolean): void;

  upload(dataGames: any): void;
}

export interface IGameServices {
  loadService(load: TLoad): void;
  startedService(started: boolean): void; // not void
  getGameService(data: any): void;
}

export interface IGameController {
  uploadController(pageNumber: number): void;
}
