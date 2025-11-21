"use client";

import { useState } from "react";
import styles from "./GameRating.module.scss";
import cn from "classnames";
import RatingStar from "../RatingStar/RatingStar";
import IconButton from "@/shared/components/IconButton/IconButton";
import CrossIcon from "@/shared/assets/xmark.svg";
import { MAXIMUM_GAME_RATING } from "../../model/constants";

type GameRatingProps = {
  className?: string;
  rating?: number;
};

const GameRating = ({ className, rating }: GameRatingProps) => {
  const [ratingState, setRatingState] = useState(rating || 0);

  return (
    <div className={styles.stars_group}>
      <input
        name="rating"
        min={0}
        max={MAXIMUM_GAME_RATING}
        type="number"
        readOnly
        hidden
        value={ratingState}
      />
      <ul className={cn(styles.stars_list, className)}>
        {Array.from({ length: MAXIMUM_GAME_RATING }, (_, index) => (
          <li key={index}>
            <RatingStar
              id={index + 1}
              onCLick={() => setRatingState(index + 1)}
              type={ratingState >= index + 1 ? "filled" : "empty"}
            />
          </li>
        ))}
      </ul>
      <IconButton
        className={cn(styles.stars_reset, {
          [styles.disabled]: ratingState === 0, // Если рейтинг 0 - скрываем кнопку визуально
        })}
        type="submit"
        icon={CrossIcon}
        variant="large"
        title="Обнулить рейтинг"
        onClick={() => setRatingState(0)}
      />
    </div>
  );
};

export default GameRating;
