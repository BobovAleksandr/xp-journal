"use client";

import { useState } from "react";
import styles from "./GameRating.module.scss";
import cn from "classnames";
import RatingStar from "../RatingStar/RatingStar";
import { MAXIMUM_GAME_RATING } from "@/app/constants";
import IconButton from "@/shared/components/IconButton/IconButton";
import CrossIcon from "@/shared/assets/xmark.svg";

type GameRatingProps = {
  className?: string;
  rating?: number;
};

const GameRating = ({ className, rating }: GameRatingProps) => {
  const [ratingState, setRatingState] = useState(rating || 0);

  return (
    <div className={styles.stars_group}>
      <input
        name="ating"
        min={MAXIMUM_GAME_RATING - MAXIMUM_GAME_RATING} // 0
        max={MAXIMUM_GAME_RATING}
        type="number"
        readOnly
        hidden
        value={ratingState}
      />
      <ul className={cn(styles.stars_list, className)}>
        {Array.from({ length: MAXIMUM_GAME_RATING }, (_, index) => (
          <RatingStar
            key={index}
            id={index + 1}
            onCLick={() => {
              setRatingState(index + 1);
            }}
            type={ratingState >= index + 1 ? "filled" : "empty"}
          />
        ))}
      </ul>
      {ratingState > 0 && (
        <IconButton
          icon={CrossIcon}
          variant="large"
          title="Обнулить рейтинг"
          onClick={() => {
            setRatingState(0);
          }}
        />
      )}
    </div>
  );
};

export default GameRating;
