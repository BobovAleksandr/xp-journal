import { TUserGameStatusKey } from "@/entities/game/model/constants";
import { prisma } from "@/shared/lib/prisma";

export default async function addOrUpdateUserGame(
  userId: string,
  gameId: string,
  rating: string,
  status: TUserGameStatusKey,
) {
  try {
    await prisma.userGame.upsert({
      where: {
        userId_id: {
          userId,
          id: Number(gameId),
        },
      },
      create: {
        userId,
        id: Number(gameId),
        rating: Number(rating),
        status,
      },
      update: {
        rating: Number(rating),
        status,
      },
    });
  } catch (error) {
    throw new Error(`Не удалось сохранить игру: ${(error as Error).message}`);
  }
}
