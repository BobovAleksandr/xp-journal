'use server';

import { BASE_URL, ENDPOINTS } from "@/app/constants";
import { TClientGames, TIgdbGames } from "@/entities/game/model/types";

export default async function getGamesForMain(ids: number[]): Promise<TClientGames[] | null> {
  try {
    if (ids.length === 0) return [];

    const response = await fetch(`${BASE_URL}${ENDPOINTS.GAMES}`, {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID!,
        Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN!}`,
      },
      body: `
        fields id, slug, name, cover.image_id;
        where id = (${ids.join(',')});
        limit 500;
      `,
    });

    if (!response.ok) {
      throw new Error(`Ошибка получения данных об играх`);
    }

    const data: TIgdbGames[] = await response.json();

    if (!data[0]) return null

    return data.map(({ id, slug, name, cover }) => ({
      id,
      slug,
      name,
      cover: cover ? { id: cover.id, imageId: cover.image_id } : undefined,
    }));

  } catch (error) {
    throw new Error(`Не удалось загрузить список игр: ${(error as Error).message}`);
  }
}
