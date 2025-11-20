'use server';

import { prisma } from '@/shared/lib/prisma';
import { TGameUser } from '@/entities/game/model/types';

export default async function getUserGames(userId: string): Promise<TGameUser[]> {
  try {
    const userGames = await prisma.userGame.findMany({
      where: { userId },
    });

    return userGames ?? [];
  } catch (error) {
    throw new Error(`Не удалось загрузить игры пользователя: ${(error as Error).message}`);
  }
}
