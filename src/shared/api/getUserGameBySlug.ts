'use server';

import { TGameUser } from "@/entities/game/model/types";
import { prisma } from "../lib/prisma";

export async function getUserGameBySlug(slug: string): Promise<TGameUser | null> {
  try {
    const result = await prisma.userGame.findFirst({
      where: { slug },
    });
    return result;
  } catch (error) {
    console.error('Ошибка при получении игры пользователя:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
