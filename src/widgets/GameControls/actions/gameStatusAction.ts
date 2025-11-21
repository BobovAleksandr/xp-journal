"use server";

import { TUserGameStatusKey } from "@/entities/game/model/constants";
import deleteUserGame from "@/shared/api/toDb/deleteUserGame";
import { TFormState } from "../GameControls";
import { addUserGame } from "@/shared/api/toDb/addUserGame";
import { updateUserGame } from "@/shared/api/toDb/updateUserGame";

export default async function gameStatusAction(prevState: TFormState, formData: FormData): Promise<TFormState> {
  const rating = formData.get('rating') as string;
  const inCollection = formData.get('inCollection') as string | null; // "on" или null
  const gameStatus = (formData.get("gameStatus") ?? "notCompleted") as TUserGameStatusKey;
  const userId = formData.get('userId') as string;
  const gameId = formData.get('gameId') as string;

  try {

    // Удаление
    if (inCollection === null) {
      await deleteUserGame(userId, gameId)
      return {
        fields: {
          rating: 0,
          inCollection: false,
          status: "notCompleted"
        },
        success: true,
      }
    }

    // Добавление
    if (!prevState.fields?.inCollection && inCollection === "on") {
      const newGame = await addUserGame(userId, gameId);

      return {
        fields: {
          rating: newGame.rating,
          inCollection: true,
          status: newGame.status,
        },
        success: true,
      };
    }

    // Обновление
    const updated = await updateUserGame(
      userId,
      gameId,
      Number(rating),
      gameStatus
    );

    return {
      fields: {
        rating: updated.rating,
        inCollection: true,
        status: updated.status,
      },
      success: true,
    };

  } catch (error) {
    return {
      success: false,
      error: `Не удалось сохранить игру: ${(error as Error).message}`
    }
  }
}