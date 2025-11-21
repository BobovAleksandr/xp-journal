"use server";

import { TUserGameStatusKey } from "@/entities/game/model/constants";
import addOrUpdateUserGame from "@/shared/api/toDb/addUserGame";
import deleteUserGame from "@/shared/api/toDb/deleteUserGame";

export default async function gameStatusAction(formData: FormData) {
  const rating = formData.get('rating') as string;
  const inCollection = formData.get('inCollection') as string | null; // "on" или null
  const gameStatus = formData.get('gameStatus') as TUserGameStatusKey;
  const userId = formData.get('userId') as string;
  const gameId = formData.get('gameId') as string;

  try {
    if (inCollection === null) {
      deleteUserGame(userId, gameId)
    }

    if (inCollection) {
      addOrUpdateUserGame(userId, gameId, rating, gameStatus)
    }
  } catch (error) {
    throw error;
  }

}