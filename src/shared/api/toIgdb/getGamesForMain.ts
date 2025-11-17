'use server';

import { BASE_URL, ENDPOINTS } from "@/app/constants";
import { TClientGamesForMain, TIgdbGamesForMain } from "@/entities/game/model/types";

export default async function getGamesForMain(ids: number[]): Promise<TClientGamesForMain[]> {
  const response = await fetch(`${BASE_URL}${ENDPOINTS.GAMES}`, {
    method: 'POST',
    headers: {
      'Client-ID': process.env.IGDB_CLIENT_ID!,
      Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN!}`,
    },
    body: `
      fields id, slug, name, cover.image_id;
      where id = (${ids.join(',')});
    `,
  });

  if (!response.ok) {
    throw new Error('Ошибка получения данных об играх:', { cause: `${response.status} ${response.statusText}` });
  }

  const data: TIgdbGamesForMain[] = await response.json();

  return data.map(({ id, slug, name, cover }) => ({
    id,
    slug,
    name,
    cover: cover ? { id: cover.id, imageId: cover.image_id } : undefined,
  }));
}
