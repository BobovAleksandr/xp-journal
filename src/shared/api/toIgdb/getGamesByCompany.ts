'use server';

import { BASE_URL, ENDPOINTS } from "@/app/constants";
import { TClientCollection, TIgdbCollection } from "@/entities/collection/types";

export default async function getGamesByCompany(companySlug: string): Promise<TClientCollection | null> {
  try {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.COMPANIES}`, {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID!,
        Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN!}`,
      },
      body: `
        fields game.id, game.slug, game.name, game.cover.image_id, developer, publisher;
        where company.slug = "${companySlug}";
        limit: 500;
      `,
    });

    if (!response.ok) {
      throw new Error(`Ошибка получения данных о компании`);
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
