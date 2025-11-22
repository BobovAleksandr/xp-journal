"use client";

import styles from "./GameControls.module.scss";
import cn from "classnames";
import { TUserGameStatusKey } from "@/entities/game/model/constants";
import StatusSelect from "@/entities/game/ui/StatusSelect/StatusSelect";
import GameInCollectionControls from "@/entities/game/ui/GameInCollectionControls/GameInCollectionControls";
import { useReducer } from "react";
import { addUserGame } from "@/shared/api/toDb/addUserGame";
import deleteUserGame from "@/shared/api/toDb/deleteUserGame";
import { updateUserGame } from "@/shared/api/toDb/updateUserGame";
import gameReducer, { TGamePayload } from "./hooks/gameReducer";
import GameRating from "@/entities/game/ui/GameRating/GameRating";

type GameControlsProps = {
  className?: string;
  rating: number;
  status: TUserGameStatusKey;
  inCollection: boolean;
  isReleased: boolean;
  daysToRelease?: number;
  userId?: string;
  gameId?: number;
};

export type TGameState = {
  inCollection: boolean;
  status: TUserGameStatusKey;
  rating: number;
  error?: string;
};

const GameControls = ({
  rating,
  status,
  inCollection,
  isReleased,
  className,
  userId,
  gameId,
}: GameControlsProps) => {
  const initialGameState: TGameState = {
    inCollection,
    status,
    rating,
    error: "",
  };

  const [gameState, dispatch] = useReducer(gameReducer, initialGameState);

  const addedInCollection = isReleased && gameState.inCollection;

  const handleUpdateGame = async (action: TGamePayload) => {
    const was = gameState.inCollection;

    // локальный оптимистичный апдейт
    dispatch(action);

    if (action.action === "add" && !was) {
      const added = await addUserGame(userId!, String(gameId));
      dispatch({ action: "update", payload: added }); // или возврат
    }

    if (action.action === "delete" && was) {
      const deleted = await deleteUserGame(userId!, String(gameId));
      if (!deleted) dispatch({ action: "add" }); // откат
    }

    if (action.action === "update") {
      const updated = await updateUserGame(
        userId!,
        String(gameId),
        action.payload?.rating ?? gameState.rating,
        action.payload?.status ?? gameState.status
      );
      dispatch({
        action: "update",
        payload: updated,
      });
    }
  };

  return (
    <section className={cn(styles.game_controls, className)}>
      <span>{gameState.error}</span>
      {addedInCollection && (
        <GameRating rating={gameState.rating} action={handleUpdateGame} />
      )}
      <div className={styles.game_controls_actions}>
        <GameInCollectionControls
          inCollection={gameState.inCollection}
          action={handleUpdateGame}
        />
        {gameState.inCollection && (
          <StatusSelect status={gameState.status} action={handleUpdateGame} isReleased={isReleased}/>
        )}
      </div>
    </section>
  );
};

export default GameControls;
