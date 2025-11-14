import { TGameUser } from "../game/model/types";

export type TUser = {
  id: number;
  email: string;
  name: string;
  games: TGameUser[];
}