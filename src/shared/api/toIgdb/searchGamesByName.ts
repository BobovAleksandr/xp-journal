"use server";

import {BASE_URL, ENDPOINTS} from "@/app/constants";
import {TClientSearchGame, TIgdbSearchGame} from "@/entities/game/model/types";

export default async function searchGamesByName(name: string): Promise<TClientSearchGame[]> {

  try {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.GAMES}`, {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID!,
        Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN!}`,
      },
      body: `
          fields name, slug, first_release_date;
          search "${name}";
          where version_parent = null;
        `,
    });

    if (!response.ok) {
      throw new Error(`Ошибка получения данных об играх`);
    }

    const data: TIgdbSearchGame[] = await response.json();

    return data.map(game => ({
      ...game,
      releaseDate: game.first_release_date,
    }));

  } catch (error) {
    throw new Error(`Не удалось загрузить список игр: ${(error as Error).message}`);
  }

}