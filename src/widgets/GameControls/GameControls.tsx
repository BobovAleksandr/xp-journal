"use client";

import styles from "./GameControls.module.scss";
import cn from "classnames";
import GameRating from "@/entities/game/ui/GameRating/GameRating";
import Form from "next/form";
import { TUserGameStatusKey } from "@/entities/game/model/constants";
import gameStatusAction from "./actions/gameStatusAction";
import StatusSelect from "@/entities/game/ui/StatusSelect/StatusSelect";
import GameInCollectionControls from "@/entities/game/ui/GameInCollectionControls/GameInCollectionControls";
import { useActionState } from "react";

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

export type TFormState = {
  fields?: {
    rating: number;
    inCollection: boolean;
    status: TUserGameStatusKey;
  };
  success: boolean;
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
  const formInitialState: TFormState = {
    fields: {
      rating,
      inCollection,
      status,
    },
    success: false,
  };

  const [formState, fomAction] = useActionState(
    gameStatusAction,
    formInitialState
  );

  const addedInCollection = isReleased && formState.fields?.inCollection;
  // TODO попап с ошибкой если error есть

  return (
    <Form
      action={fomAction}
      onChange={(e) => e.currentTarget.requestSubmit()}
      className={cn(styles.game_controls, className)}
    >
      {addedInCollection && <GameRating rating={formState.fields?.rating} />}
      <input type="text" name="userId" value={userId} hidden readOnly />
      <input type="text" name="gameId" value={gameId} hidden readOnly />
      <div className={styles.game_controls_actions}>
        <GameInCollectionControls
          inCollection={formState.fields?.inCollection}
        />
        {addedInCollection && (
          <StatusSelect status={formState.fields?.status} />
        )}
      </div>
    </Form>
  );
};

export default GameControls;
