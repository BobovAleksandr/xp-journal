import { TClientGames, TIgdbGames } from "../game/model/types";

export type TIgdbCollection = {
  name: string;
  games: TIgdbGames[];
}

export type TClientCollection = Omit<TIgdbCollection, "games"> & {
  games: TClientGames[];
}