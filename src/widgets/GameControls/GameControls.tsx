"use client";

import styles from "./GameControls.module.scss";
import cn from "classnames";
import GameRating from "@/entities/game/ui/GameRating/GameRating";
import Form from "next/form";
import { TUserGameStatusKey } from "@/entities/game/model/constants";
import gameStatusAction from "./actions/gameStatusAction";
import StatusSelect from "@/entities/game/ui/StatusSelect/StatusSelect";
import GameInCollectionControls from "@/entities/game/ui/GameInCollectionControls/GameInCollectionControls";

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

const GameControls = ({
  rating,
  status,
  inCollection,
  isReleased,
  className,
  userId,
  gameId,
}: GameControlsProps) => {

  const shoultShowRating = userId && gameId && isReleased && inCollection;

  console.log(`gameId - ${gameId}`);
  console.log(`userId - ${userId}`);

  return (
    <Form
      action={gameStatusAction}
      onChange={(e) => e.currentTarget.requestSubmit()}
      className={cn(styles.game_controls, className)}
    >
      {shoultShowRating && <GameRating rating={rating} />}
      <input type="text" name="userId" value={userId} hidden readOnly />
      <input type="text" name="gameId" value={gameId} hidden readOnly />
      <div className={styles.game_controls_actions}>
        <GameInCollectionControls inCollection={inCollection} />
        <StatusSelect status={status} />
      </div>
    </Form>
  );
};

export default GameControls;
