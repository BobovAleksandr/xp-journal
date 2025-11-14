'use server';

import { BASE_URL, ENDPOINTS } from "@/app/constants";
import { TGameMainPage } from "@/entities/game/model/types";
import { TUser } from "@/entities/user/types";

export default async function getUserGames(user: TUser): Promise<TGameMainPage[]> {

  const userGames = user.games.map((game) => game.slug);
  const slugList = userGames.map((slug) => `"${slug}"`).join(", ");

  const response = await fetch(`${BASE_URL}${ENDPOINTS.GAMES}`, {
    method: "POST",
    headers: {
      "Client-ID": process.env.IGDB_CLIENT_ID!,
      Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN!}`,
      Accept: "application/json",
    },
    body: `fields name, slug, cover.image_id;
           where slug = (${slugList});`,
  });

  if (!response.ok) {
    // TODO - Обработка ошибок
    throw new Error(`IGDB API error: ${response.status}`);
  }

  const mainPageGames: TGameMainPage[] = await response.json()

  return mainPageGames;
}