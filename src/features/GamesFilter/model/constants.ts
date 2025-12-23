import { GAME_TYPE_KEYS, STATUS_KEYS, TUserGameStatusKey } from "@/entities/game/model/constants";
import { TGamesFilter } from "./types";

export const INITIAL_FILTER_STATE: TGamesFilter = {
  gameStatus: STATUS_KEYS.reduce((acc, key) => {
    acc[key] = true;
    return acc;
  }, {} as Record<TUserGameStatusKey, boolean>),
  gameType: GAME_TYPE_KEYS.reduce((acc, key) => {
    acc[key] = false;
    return acc;
  }, {} as Record<typeof GAME_TYPE_KEYS[number], boolean>),
};

export const DEFAULT_FILTER_STATE: TGamesFilter = {
  gameStatus: {
    ...INITIAL_FILTER_STATE.gameStatus,
    // toPlay: false, // Отключить любой статус по умолчанию
  },
  gameType: {
    ...INITIAL_FILTER_STATE.gameType,
    0: true, // Основная игра
  }
};