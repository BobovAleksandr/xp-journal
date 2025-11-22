"use server";

import { prisma } from "@/shared/lib/prisma";

export default async function deleteUserGame(userId: string, gameId: string) {
  try {
    const deleted = await prisma.userGame.delete({
      where: {
        userId_id: {
          userId,
          id: Number(gameId),
        },
      },
      select: { id: true },
    });

    return deleted;
  } catch (error) {
    throw new Error(`Не удалось удалить игру: ${(error as Error).message}`);
  }
}
