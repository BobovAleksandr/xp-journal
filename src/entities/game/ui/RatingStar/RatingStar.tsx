"use client";

import styles from "./RatingStar.module.scss";
import cn from "classnames";
import StarIconEmpty from "./assets/icons/star.svg";
import StarIconFilled from "./assets/icons/star-fill.svg";

type RatingStarProps = {
  type: "empty" | "filled";
  className?: string;
  onCLick: () => void;
  id: number;
};

const RatingStar = ({
  type = "empty",
  onCLick,
  className,
  id,
}: RatingStarProps) => {
  const Icon = type === "empty" ? StarIconEmpty : StarIconFilled;
  return (
    <li className={cn(styles.star, className)}>
      <button onClick={onCLick} title={String(id)} className={styles.star_button}>
        <Icon width={32} height={32} className={styles.star_icon} />
      </button>
    </li>
  );
};

export default RatingStar;
