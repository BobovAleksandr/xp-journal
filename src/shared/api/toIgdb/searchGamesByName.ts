"use server";

import { BASE_URL, ENDPOINTS } from "@/app/constants";
import { TSearchGame } from "@/entities/game/model/types";

export default async function searchGamesByName(name: string): Promise<TSearchGame[]> {

  try {
    const response = await fetch(`${BASE_URL}${ENDPOINTS.GAMES}`, {
      method: 'POST',
      headers: {
        'Client-ID': process.env.IGDB_CLIENT_ID!,
        Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN!}`,
      },
      body: `
          fields name, slug;
          search "${name}";
          where version_parent = null;
        `,
    });

    if (!response.ok) {
      throw new Error(`Ошибка получения данных об играх`);
    }

    const data: TSearchGame[] = await response.json();

    return data;

  } catch (error) {
    throw new Error(`Не удалось загрузить список игр: ${(error as Error).message}`);
  }

}