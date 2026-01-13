"use client";

import styles from "./RatingStar.module.scss";
import cn from "classnames";
import StarIconEmpty from "@/shared/assets/star.svg";
import StarIconFilled from "@/shared/assets/star-fill.svg";

type RatingStarProps = {
  type: "empty" | "filled";
  className?: string;
  onClick: () => void;
  id: number;
};

const RatingStar = ({
  type = "empty",
  onClick,
  className,
  id,
}: RatingStarProps) => {
  const Icon = type === "empty" ? StarIconEmpty : StarIconFilled;
  return (
    <button
      onClick={onClick}
      title={String(id)}
      className={cn(styles.star_button, className)}
    >
      <Icon width={32} height={32} className={styles.star_icon} />
    </button>
  );
};

export default RatingStar;
