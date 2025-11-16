"use client";

import styles from "./GameControls.module.scss";
import cn from "classnames";
import GameRating from "@/entities/game/ui/GameRating/GameRating";
import Form from "next/form";
import { TUserGameStatusKey } from "@/entities/game/model/constants";
import gameStatusAction from "./actions/gameStatusAction";

type GameControlsProps = {
  rating: number;
  className?: string;
  status: TUserGameStatusKey;
  inCollection: boolean;
  isReleased: boolean;
  daysToRelease?: number;
};

const GameControls = ({
  rating,
  // status,
  // inCollection,
  isReleased,
  className,
}: GameControlsProps) => (
  <Form
    action={gameStatusAction}
    className={cn(styles.game_controls, className)}
  >
    {isReleased && <GameRating rating={rating} />}
    <div className={styles.game_controls_buttons}>
    </div>
  </Form>
);

export default GameControls;
