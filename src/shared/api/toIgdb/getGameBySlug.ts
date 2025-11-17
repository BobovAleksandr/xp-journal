'use server';

import { BASE_URL, ENDPOINTS } from "@/app/constants";
import { TGameClient, TGameIgdb } from "@/entities/game/model/types";

export default async function getGameBySlug(slug: string): Promise<TGameClient> {
  const response = await fetch(`${BASE_URL}${ENDPOINTS.GAMES}`, {
    method: 'POST',
    headers: {
      'Client-ID': process.env.IGDB_CLIENT_ID!,
      Authorization: `Bearer ${process.env.IGDB_ACCESS_TOKEN!}`,
    },
    body: `
    fields 
      id, 
      slug, 
      name, 
      cover.image_id,
      first_release_date,
      franchises.name,
      franchises.slug,
      involved_companies.company.name,
      involved_companies.company.slug,
      involved_companies.company.logo.image_id,
      involved_companies.developer,
      involved_companies.publisher,
      screenshots.image_id,
      videos.video_id,
      websites.url,
      websites.type,
      game_type,
      dlcs;
    where slug = "${slug}";
    limit 1;
  `,
  });

  if (!response.ok) {
    throw new Error('Ошибка получения данных об игре:', { cause: `${response.status} ${response.statusText}` })
  }

  const data: TGameIgdb[] = await response.json();

  if (!data[0]) {
    throw new Error('Игра не найдена');
  }

  // Переименовываем поля в camelCase
  const { first_release_date, involved_companies, game_type, cover, screenshots, videos, ...rest } = data[0];

  const formatedData: TGameClient = {
    ...rest,
    releaseDate: first_release_date,
    companies: involved_companies,
    gameType: game_type,
    cover: cover ? { id: cover?.id, imageId: cover?.image_id } : undefined,
    screenshots: screenshots?.map(s => ({ id: s.id, imageId: s.image_id })) ?? [],
    videos: videos?.map(s => ({ id: s.id, videoId: s.video_id })) ?? [],
  };

  return formatedData;
}