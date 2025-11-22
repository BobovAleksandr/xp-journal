"use client";

import { memo, useState } from "react";
import styles from "./GameRating.module.scss";
import cn from "classnames";
import RatingStar from "../RatingStar/RatingStar";
import IconButton from "@/shared/components/IconButton/IconButton";
import CrossIcon from "@/shared/assets/xmark.svg";
import { MAXIMUM_GAME_RATING } from "../../model/constants";
import { TGamePayload } from "@/widgets/GameControls/hooks/gameReducer";

type GameRatingProps = {
  className?: string;
  rating?: number;
  action: ({ action, payload }: TGamePayload) => void;
};

const GameRating = ({ className, action, rating = 0 }: GameRatingProps) => {
  return (
    <div className={styles.stars_group}>
      <ul className={cn(styles.stars_list, className)}>
        {Array.from({ length: MAXIMUM_GAME_RATING }, (_, index) => (
          <li key={index}>
            <RatingStar
              id={index + 1}
              onClick={() =>
                action({ action: "update", payload: { rating: index + 1 } })
              }
              type={rating >= index + 1 ? "filled" : "empty"}
            />
          </li>
        ))}
      </ul>
      <IconButton
        className={cn(styles.stars_reset, {
          [styles.disabled]: rating === 0, // Если рейтинг 0 - скрываем кнопку визуально
        })}
        icon={CrossIcon}
        variant="large"
        title="Обнулить рейтинг"
        onClick={() => action({ action: "update", payload: { rating: 0 } })}
      />
    </div>
  );
};

export default memo(GameRating);
