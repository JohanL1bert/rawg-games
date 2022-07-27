export type TLoad = 'pending' | 'done' | 'error';

export interface IGameStore {
  loading: TLoad;
  loadAllGames(): void;
}
