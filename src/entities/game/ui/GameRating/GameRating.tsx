"use client";

import { useState } from "react";
import styles from "./GameRating.module.scss";
import cn from "classnames";
import RatingStar from "../RatingStar/RatingStar";

type GameRatingProps = {
  className?: string;
};

const GameRating = ({ className }: GameRatingProps) => {
  const [rating, setRating] = useState(0);

  return (
    <ul className={cn(styles.stars__list, className)}>
      <input type="number" hidden value={rating} />
      <RatingStar id={1} onCLick={() => {}} type="empty" />
      <RatingStar id={1} onCLick={() => {}} type="empty" />
      <RatingStar id={1} onCLick={() => {}} type="empty" />
      <RatingStar id={1} onCLick={() => {}} type="empty" />
      <RatingStar id={1} onCLick={() => {}} type="empty" />
    </ul>
  );
};

export default GameRating;
