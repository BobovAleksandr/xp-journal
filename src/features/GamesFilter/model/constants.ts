import { TGameType, TUserGameStatusKey } from "@/entities/game/model/constants";
import { TGamesFilter } from "./types";
import { ENDPOINTS } from "@/app/constants";

const DEFAULT_STATUSES: TUserGameStatusKey[] = [
  "completed", 
  "inProgress", 
  "notCompleted", 
  "platinum", 
  "toPlay"
];
const DEFAULT_TYPES: TGameType[] = ["0"]

export const INITIAL_FILTER_STATE: TGamesFilter = {
  gameStatus: [],
  gameType: []
}

export const DEFAULT_FILTER_STATE: TGamesFilter = {
  gameStatus: [...INITIAL_FILTER_STATE.gameStatus, ...DEFAULT_STATUSES],
  gameType: [...INITIAL_FILTER_STATE.gameType, ...DEFAULT_TYPES]
}

export const PAGES_WITH_FILTER = {
  game: [ENDPOINTS.GAMES],
  companies: [ENDPOINTS.COMPANIES]
}