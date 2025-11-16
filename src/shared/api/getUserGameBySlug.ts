'use server';

import { TGameUser } from "@/entities/game/model/types";
import { prisma } from "../lib/prisma";

export async function getUserGameBySlug(slug: string): Promise<TGameUser | null> {
  return await prisma.userGame.findFirst({
    where: { slug },
  });
}
