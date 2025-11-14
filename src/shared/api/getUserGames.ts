'use server';

import { BASE_URL, ENDPOINTS } from "@/app/constants";
import { TGameMainPage } from "@/entities/game/model/types";
import { TUser } from "@/entities/user/types";

export default async function getUserGames(user: TUser): Promise<TGameMainPage[]> {

  const userGamesIds = user.games.map((game) => game.id);
  const idList = userGamesIds.join(", ");

  const response = await fetch(`${BASE_URL}${ENDPOINTS.GAMES}`, {
    method: "POST",
    headers: {
      "Client-ID": process.env.IGDB_CLIENT_ID!,
      Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN!}`,
      Accept: "application/json",
    },
    body: `fields name, slug, cover.image_id;
           where id = (${idList});
          limit 500;`,
  });

  if (!response.ok) {
    // TODO - Обработка ошибок
    throw new Error(`IGDB API error: ${response.status}`);
  }

  const mainPageGames: TGameMainPage[] = await response.json()

  return mainPageGames;
}