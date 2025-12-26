'use server';

import { BASE_URL, ENDPOINTS } from "@/app/constants";
import { TGameType } from "@/entities/game/model/constants";
import { TClientGame, TIgdbGames } from "@/entities/game/model/types";

export default async function getGamesForMain(
  ids: number[],
  gameTypes: TGameType[] = []
): Promise<TClientGame[] | null> {
  try {
    if (ids.length === 0) return [];

    // Формируем условие фильтрации по типам
    let whereClause = `id = (${ids.join(',')})`;
    if (gameTypes.length > 0) {
      whereClause += ` & game_type = (${gameTypes.join(',')})`;
    }

    const response = await fetch(`${BASE_URL}${ENDPOINTS.GAMES}`, {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID!,
        Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN!}`,
      },
      body: `
        fields id, slug, name, cover.image_id;
        where ${whereClause};
        limit 500;
      `,
    });

    if (!response.ok) {
      throw new Error(`Ошибка получения данных об играх`);
    }

    const data: TIgdbGames[] = await response.json();

    if (!data[0]) return null;

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
