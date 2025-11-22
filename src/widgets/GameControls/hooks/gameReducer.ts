import { TUserGameStatusKey } from "@/entities/game/model/constants";
import { TGameState } from "../GameControls";

export type TAction = "update" | "add" | "delete";

export type TGamePayload = {
  action: TAction;
  payload?: {
    status?: TUserGameStatusKey;
    rating?: number;
  };
};

export default function gameReducer(state: TGameState, action: TGamePayload): TGameState {

  switch (action.action) {
    case "add":
      return { ...state, inCollection: true };

    case "delete":
      return { ...state, inCollection: false };

    case "update":
      return {
        ...state,
        status: action.payload?.status ?? state.status,
        rating: action.payload?.rating ?? state.rating,
      };

    default:
      return state;
  }
}