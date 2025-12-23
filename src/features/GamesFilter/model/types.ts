import { TGameType, TUserGameStatusKey } from "@/entities/game/model/constants";

export type TGamesFilter = {
  gameStatus: Record<TUserGameStatusKey, boolean>;
  gameType: Record<TGameType, boolean>;
}