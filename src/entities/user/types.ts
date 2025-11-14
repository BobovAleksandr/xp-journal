import { TGameUser } from "../game/model/types";

export type TUser = {
  id: string;
  email: string;
  name: string;
  games: TGameUser[];
}