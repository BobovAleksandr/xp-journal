"use server";

import { prisma } from "@/shared/lib/prisma";
import { TUserGameStatusKey } from "@/entities/game/model/constants";

export async function addUserGame(
  userId: string,
  gameId: string
) {
  try {
    const userGame = await prisma.userGame.create({
      data: {
        userId,
        id: Number(gameId),
        rating: 0,
        status: "notCompleted" as TUserGameStatusKey,
      },
      select: {
        rating: true,
        status: true,
      },
    });

    return userGame;
  } catch (error) {
    throw new Error(
      `Не удалось добавить игру: ${(error as Error).message}`
    );
  }
}
