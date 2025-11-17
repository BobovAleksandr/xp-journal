'use server';

import { prisma } from '@/shared/lib/prisma';
import { TGameUser } from '@/entities/game/model/types';

export default async function getUserGames(userId: number): Promise<TGameUser[]> {
  const userGames = await prisma.userGame.findMany({
    where: { userId },
  });

  if (userGames.length === 0) return [];

  return userGames;
}
