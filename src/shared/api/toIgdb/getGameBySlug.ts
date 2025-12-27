'use server';

import {BASE_URL, ENDPOINTS} from "@/app/constants";
import {TGameClient, TGameIgdb} from "@/entities/game/model/types";

export default async function getGameBySlug(slug: string): Promise<TGameClient | null> {
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
      genres.name,
      platforms.name,
      game_status,
      cover.image_id,
      first_release_date,
      collections.name,
      collections.slug,
      involved_companies.company.name,
      involved_companies.company.slug,
      involved_companies.developer,
      involved_companies.publisher,
      screenshots.image_id,
      videos.video_id,
      websites.url,
      websites.type,
      game_type,
      dlcs,
      expansions.name,
      expansions.first_release_date,
      expansions.cover.image_id,
      expansions.slug,
      summary;
    where slug = "${slug}";
    limit 1;
  `,
  });

  if (!response.ok) {
    throw new Error('Ошибка получения данных об игре')
  }

  const data: TGameIgdb[] = await response.json();

  if (!data[0]) return null

  // Мапим и переименовываем поля в camelCase
  const { first_release_date, involved_companies, game_type, game_status, cover, screenshots, videos, collections, expansions, ...rest } = data[0];

  return {
    ...rest,
    releaseDate: first_release_date,
    companies: involved_companies,
    gameType: game_type,
    gameStatus: game_status,
    cover: cover ? {id: cover?.id, imageId: cover?.image_id} : undefined,
    screenshots: screenshots?.map(s => ({id: s.id, imageId: s.image_id})) ?? [],
    videos: videos?.map(s => ({id: s.id, videoId: s.video_id})) ?? [],
    collection: collections ? {
      slug: collections?.[0].slug,
      name: collections?.[0].name
    } : undefined,
    expansions: expansions ? expansions.map((exp) => ({
      id: exp.id,
      name: exp.name,
      slug: exp.slug,
      releaseDate: exp.first_release_date,
      cover: {
        id: exp.cover.id,
        imageId: exp.cover.image_id,
      },
    })) : undefined,
  };
}