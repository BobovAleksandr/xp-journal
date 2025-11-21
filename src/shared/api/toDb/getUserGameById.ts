'use server';

import { TGameUser } from "@/entities/game/model/types";
import { prisma } from "../../lib/prisma";

export async function getUserGameById(userId: string, gameId: number): Promise<TGameUser | null> {
  try {
    const result = await prisma.userGame.findUnique({
      where: {
        userId_id: {
          userId,
          id: gameId,
        },
      },
    });

    return result;
  } catch (error) {
    throw new Error(`Ошибка при получении данных об игре: ${(error as Error).message}`);
  } finally {
    await prisma.$disconnect();
  }
}
