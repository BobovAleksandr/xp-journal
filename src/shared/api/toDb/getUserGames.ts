'use server';

import { prisma } from '@/shared/lib/prisma';
import { TGameUser } from '@/entities/game/model/types';
import { TUserGameStatusKey } from '@/entities/game/model/constants';

export default async function getUserGames(
  userId: string,
  statuses: TUserGameStatusKey[]
): Promise<TGameUser[]> {
  try {
    const userGames = await prisma.userGame.findMany({
      where: {
        userId,
        status: {
          in: statuses,
        },
      },
    });

    return userGames ?? [];
  } catch (error) {
    throw new Error(`Не удалось загрузить игры пользователя: ${(error as Error).message}`);
  }
}
