'use server';

import { BASE_URL, ENDPOINTS } from "@/app/constants";
import { TClientCollection, TIgdbCollection } from "@/entities/collection/types";

export default async function getGamesByCollection(collectionSlug: string): Promise<TClientCollection | null> {
  try {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.COLLETIONS}`, {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID!,
        Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN!}`,
      },
      body: `
        fields name, games.id, games.slug, games.name, games.cover.image_id;
        where slug = "${collectionSlug}";
      `,
    });

    if (!response.ok) {
      throw new Error(`Ошибка получения данных о серии игр`);
    }

    const dataArray: TIgdbCollection[] = (await response.json());
    const collection = dataArray[0]

    if (!collection) return null

    return {
      name: collection.name,
      games: (collection.games).map(({ id, slug, name, cover }) => ({
        id,
        slug,
        name,
        cover: cover ? { id: cover.id, imageId: cover.image_id } : undefined,
      })),
    };
  } catch (error) {
    throw new Error(`Ошибка получения данных о серии игр: ${(error as Error).message}`);
  }
}
