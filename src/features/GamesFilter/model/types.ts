import { TGameType, TUserGameStatusKey } from "@/entities/game/model/constants";

export type TGamesFilter = {
  gameStatus: TUserGameStatusKey[];
  gameType: TGameType[];
};