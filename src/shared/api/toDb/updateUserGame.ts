import { prisma } from "@/shared/lib/prisma";
import { TUserGameStatusKey } from "@/entities/game/model/constants";

export async function updateUserGame(
  userId: string,
  gameId: string,
  rating: number,
  status: TUserGameStatusKey
) {
  try {
    const userGame = await prisma.userGame.update({
      where: {
        userId_id: {
          userId,
          id: Number(gameId),
        },
      },
      data: {
        rating,
        status,
      },
      select: {
        rating: true,
        status: true,
      },
    });

    return userGame;
  } catch (error) {
    throw new Error(
      `Не удалось обновить игру: ${(error as Error).message}`
    );
  }
}
