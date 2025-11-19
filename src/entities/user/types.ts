import { TGameUser } from "../game/model/types";

export type TDbUser = {
  id: number;
  email: string;
  name: string;
  games: TGameUser[];
}